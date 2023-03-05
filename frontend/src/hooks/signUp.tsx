import { Auth } from 'aws-amplify';

// signs up new user
async function signUp(
  email: string,
  password: string,
  phoneNumber: string,
  name: string
) {
  try {
    const { user } = await Auth.signUp({
      username: email, // credentials you enter to log in
      password,
      attributes: {
        email,
        given_name: name,
        phone_number: phoneNumber,
      },
      autoSignIn: {
        // optional - enables auto sign in after user is confirmed
        enabled: false,
      },
    });
    return user;
  } catch (error) {
    console.error('error signing up:', error);
    return null;
  }
}

export default signUp;
