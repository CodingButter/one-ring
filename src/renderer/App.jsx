import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { DarkMode } from './Themes';
import { Welcome, Dashboard, Logout } from './pages';
import PrivateRoute from './components/routes/PrivateRoute';
import { AuthProvider } from './providers/AuthProvider';
import './App.css';
import ResponsiveAppBar from './components/common/ResponsiveAppBar';

export default function App() {
  return (
    <ThemeProvider theme={DarkMode}>
      <CssBaseline />
      <AuthProvider>
        <Router>
          <ResponsiveAppBar />
          <Routes>
            <Route exact path="/logout" element={<Logout />} />
            <Route exact path="/" element={<Welcome />} />;
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}
