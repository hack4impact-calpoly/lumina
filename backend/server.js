import {Auth} from 'aws-amplify'

const express = require("express")
const app = express()

// signs up new user
async function signUp() {
    try {
        const { user } = await Auth.signUp({
            email, // credentials you enter to log in
            password,
            attributes: {
                firstName, // other attributes associated with account (not used to log in)
                lastName,
                email,
                phoneNumber,
            },
            autoSignIn: { // optional - enables auto sign in after user is confirmed
                enabled: false,
            }
        });
        console.log(user);
    } catch (error) {
        console.log('error signing up:', error);
    }
}

// when a user signs up, they get a confirmation code. If not received, this will resend them a new one
async function resendConfirmationCode() {
    try {
        await Auth.resendSignUp(email);
        console.log('code resent successfully');
    } catch (err) {
        console.log('error resending code: ', err);
    }
}

app.listen(3001)