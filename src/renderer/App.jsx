import { useState } from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Container } from '@mui/material';
import { DarkMode } from './Themes';
import { Welcome, Dashboard, Logout } from './pages';
import PrivateRoute from './components/routes/PrivateRoute';
import { AuthProvider } from './providers/AuthProvider';
import Page from './components/Page';
import './App.css';

export default function App() {
  const [pending, setPending] = useState(true);
  return (
    <ThemeProvider theme={DarkMode}>
      <CssBaseline />
      <AuthProvider>
        <Router>
          <Page pending={pending}>
            <Routes>
              <Route
                exact
                path="/logout"
                element={<Logout pending={pending} setPending={setPending} />}
              />
              <Route
                exact
                path="/"
                element={<Welcome pending={pending} setPending={setPending} />}
              />
              ;
              <Route
                path="/dashboard"
                element={
                  <PrivateRoute>
                    <Dashboard pending={pending} setPending={setPending} />
                  </PrivateRoute>
                }
              />
            </Routes>
          </Page>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}
