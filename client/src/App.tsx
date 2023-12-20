import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import './App.css';
import Registrar from './pages/Register';
import { createTheme, ThemeProvider } from '@mui/material';

const fontTheme = createTheme({
  typography: {
    fontFamily: 'Montserrat Alternates, sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={fontTheme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registrar />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
