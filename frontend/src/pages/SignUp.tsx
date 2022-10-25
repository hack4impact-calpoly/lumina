import { Button, Center, Text, VStack, Stack, Card } from '@chakra-ui/react';
import { getAuth } from 'firebase/auth';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { doc, setDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from '../components/FormInput';
import { db, firebaseApp } from '../firebaseApp';
import { emailRegex, phoneRegex } from '../misc/regex';

const auth = getAuth(firebaseApp);

function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const navigate = useNavigate();

  const nonEmptyStates = () =>
    firstName.length > 0 &&
    lastName.length > 0 &&
    email.length > 0 &&
    phoneNumber.length > 0 &&
    password.length > 0 &&
    confirmPassword.length > 0;

  const validateEmail = () => email.toLowerCase().match(emailRegex);

  const validatePhone = () => phoneNumber.toLowerCase().match(phoneRegex);
  const signUp = () => {
    if (nonEmptyStates()) {
      if (password === confirmPassword && validateEmail() && validatePhone()) {
        createUserWithEmailAndPassword(email, password);
      }
    }
  };

  const saveUserInfo = async (uid: string) => {
    await setDoc(doc(db, 'userInfo', uid), {
      firstName,
      lastName,
      phoneNumber,
      email,
      type: 'basic',
    });
  };

  if (error) {
    return (
      <Center>
        <Stack>
          <Text>An error has occured, please try again.</Text>
        </Stack>
      </Center>
    );
  }
  if (loading) {
    return (
      <Center>
        <Stack>
          <Text>Loading...</Text>
        </Stack>
      </Center>
    );
  }
  if (user) {
    saveUserInfo(user.user.uid);
    localStorage.setItem('user', JSON.stringify(user));
    navigate('/home/dashboard');
  }
  return (
    <Center h="100%">
      <Card>
        <VStack>
          <FormInput
            label="First Name"
            type="text"
            isRequired
            onChange={setFirstName}
          />
          <FormInput
            label="Last Name"
            type="text"
            isRequired
            onChange={setLastName}
          />
          <FormInput
            label="Email"
            type="email"
            isRequired
            onChange={setEmail}
          />
          <FormInput
            label="Phone Number"
            type="text"
            isRequired
            onChange={setPhoneNumber}
          />
          <FormInput
            label="Password"
            type="password"
            isRequired
            onChange={setPassword}
          />
          <FormInput
            label="Confirm Password"
            type="password"
            isRequired
            onChange={setConfirmPassword}
          />
          <Button w="100%" onClick={signUp}>
            Submit
          </Button>
        </VStack>
      </Card>
    </Center>
  );
}

export default SignUp;
