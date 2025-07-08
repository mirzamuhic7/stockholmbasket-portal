import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { createTheme, ThemeProvider, CssBaseline, Button } from "@mui/material";
import Dashboard from "./pages/Dashboard";
import Players from "./pages/Players";
import TournamentsPage from "./pages/TournamentsPage";
import Settings from "./pages/Settings";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <nav style={{ padding: 10 }}>
          <Link to="/">Dashboard</Link> | <Link to="/players">Players</Link> |{" "}
          <Link to="/tournaments">Tournaments</Link> |{" "}
          <Link to="/settings">Settings</Link>
          <Button
            variant="contained"
            style={{ marginLeft: 20 }}
            onClick={() => setDarkMode(!darkMode)}
          >
            Toggle {darkMode ? "Light" : "Dark"}
          </Button>
        </nav>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/players" element={<Players />} />
          <Route path="/tournaments" element={<TournamentsPage />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}