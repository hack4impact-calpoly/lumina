import { configureStore } from '@reduxjs/toolkit'
import signUpReducer from './components/SignupPage/SignUpSlice'

export default configureStore({
  reducer: {
    signUp: signUpReducer
  },
})