const nonEmptyFields = (
  firstName: string,
  lastName: string,
  email: string,
  phoneNumber: string,
  password: string,
  confirmPassword: string
) =>
  firstName.length > 0 &&
  lastName.length > 0 &&
  email.length > 0 &&
  phoneNumber.length > 0 &&
  password.length > 0 &&
  confirmPassword.length > 0;

export default nonEmptyFields;
