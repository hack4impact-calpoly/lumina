import * as React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import theme from './theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Calendar from './pages/Calendar';
import Directory from './pages/Directory';
import Profile from './pages/Profile';
import PrivateRoute from './components/PrivateRoute';
import NoAuthRoute from './components/NoAuthRoute';
import SignUp from './pages/SignUp';

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl" h="100vh" bg="gray.100">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <NoAuthRoute element={<Landing />} fallback="/dashboard" />
            }
          />
          <Route
            path="/sign-up"
            element={<NoAuthRoute element={<SignUp />} fallback="/dashboard" />}
          />
          <Route
            path="/dashboard"
            element={<PrivateRoute element={<Dashboard />} fallback="/" />}
          />
          <Route
            path="/calendar"
            element={<PrivateRoute element={<Calendar />} fallback="/" />}
          />
          <Route
            path="/directory"
            element={<PrivateRoute element={<Directory />} fallback="/" />}
          />
          <Route
            path="/profile"
            element={<PrivateRoute element={<Profile />} fallback="/" />}
          />
        </Routes>
      </Router>
    </Box>
  </ChakraProvider>
);
