import React, { useState } from 'react';
import { Container, VStack } from '@chakra-ui/react';

import logo from './assets/images/RISE-logo-full-1.png';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let submitLogin = (email, password) => {
    console.log("submitted email: " + email);
    console.log("submitted password: " + password);
  }

  return (
      <main>
        <Container>
          <VStack>
            <image id="logo" src={logo} />
            <h1>Volunteer System</h1>
            <form id="loginForm">

              <label htmlFor="emailField">Email</label>
              <input
                type="email"
                id="emailField"
                placeholder=""
                value={ email }
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />

              <label htmlFor="passwordField">Password</label>
              <input
                type="password"
                id="passwordField"
                placeholder=""
                value={ password }
                onChange={ (e) => {
                  setPassword(e.target.value);
                }}
                required
              />
              <label htmlFor="passwordField" id="forgotPassword">Forgot your password?</label>

              <button type="button" onClick={ () => submitLogin(email, password) }>
                Log In
              </button>
              <span id="createAccount">First time? <a href="#" title="Create a new Lumina volunteer account">Create a new account</a></span>
            </form>
          </VStack>
        </Container>
      </main>
  );
}