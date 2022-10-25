import * as React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import theme from './theme';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Calendar from './pages/Calendar';
import Directory from './pages/Directory';
import Profile from './pages/Profile';
import PrivateRoute from './components/PrivateRoute';
import NoAuthRoute from './components/NoAuthRoute';
import SignUp from './pages/SignUp';
import CreateAnnouncement from './pages/CreateAnnouncement';
import AnnouncementView from './pages/AnnouncementView';
import Admin from './pages/Admin';
import HomeWrapper from './components/HomeWrapper';

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box h="100vh" maxH="100%" textAlign="center" fontSize="xl">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <NoAuthRoute element={<Landing />} fallback="/home/dashboard" />
            }
          />
          <Route
            path="/sign-up"
            element={
              <NoAuthRoute element={<SignUp />} fallback="/home/dashboard" />
            }
          />
          <Route path="/home" element={<HomeWrapper />}>
            <Route path="dashboard">
              <Route
                index
                element={<PrivateRoute element={<Dashboard />} fallback="/" />}
              />
              <Route
                path="create-announcement"
                element={
                  <PrivateRoute element={<CreateAnnouncement />} fallback="/" />
                }
              />
              <Route
                path="annoucement/:annoucementId"
                element={
                  <PrivateRoute element={<AnnouncementView />} fallback="/" />
                }
              />
            </Route>
            <Route
              path="calendar"
              element={<PrivateRoute element={<Calendar />} fallback="/" />}
            />
            <Route
              path="directory"
              element={<PrivateRoute element={<Directory />} fallback="/" />}
            />
            <Route
              path="profile"
              element={<PrivateRoute element={<Profile />} fallback="/" />}
            />
            <Route
              path="admin"
              element={<PrivateRoute element={<Admin />} fallback="/" />}
            />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </Box>
  </ChakraProvider>
);
