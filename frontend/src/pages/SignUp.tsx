import { Button, Center, VStack, Card } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from '../components/FormInput';
import nonEmptyFields from '../hooks/nonEmptyFields';
import signUp from '../hooks/signUp';
import { emailRegex, phoneRegex } from '../misc/regex';

function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();
  console.log(navigate);

  const validateEmail = () => email.toLowerCase().match(emailRegex);

  const validatePhone = () => phoneNumber.toLowerCase().match(phoneRegex);
  const validateSignUp = () => {
    if (
      nonEmptyFields(
        firstName,
        lastName,
        email,
        phoneNumber,
        password,
        confirmPassword
      )
    ) {
      if (password === confirmPassword && validateEmail() && validatePhone()) {
        signUp(email, password, `+1${phoneNumber}`, firstName + lastName);
      }
    }
  };

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
          <Button w="100%" onClick={validateSignUp}>
            Submit
          </Button>
        </VStack>
      </Card>
    </Center>
  );
}

export default SignUp;
