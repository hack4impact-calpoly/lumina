import * as React from 'react'
import { ChakraProvider, Box } from '@chakra-ui/react'
import { ColorModeSwitcher } from './ColorModeSwitcher'
import theme from './theme'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
import Calendar from './pages/Calendar'
import Directory from './pages/Directory'
import Profile from './pages/Profile'

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl" h="100vh" bg="gray.100">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/directory" element={<Directory />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </Box>
  </ChakraProvider>
)
