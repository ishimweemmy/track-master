import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Settings from "./components/Settings";
import Home from "./components/Home/Home";
import Data from "./components/Data/Data";
import Resources from "./components/Resources";
import Credits from "./components/Credits";
import SignUp from "./pages/auth/SignUp";
import Dashboard from "./pages/Dashboard";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiFilledInput: {
      styleOverrides: {
        root: {
          '&:before': {
            borderBottomColor: 'white',
            outlineColor: "white"
          },
          '&:hover:before': {
            borderBottomColor: 'white',
            outlineColor: "white"
          },
          '&.Mui-focused:before': {
            borderBottomColor: 'white',
            outlineColor: "white"
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-input': {
            color: 'white',
          },
          '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white',
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white',
            outlineColor: "white",
            color: "white"
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white',
            outlineColor: "white",
            color: "white"
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white',
            outlineColor: "white",
            color: "white"
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        icon: {
          color: 'white',
        },
        iconOpen: {
          color: 'white',
        },
        iconFilled: {
          color: 'blue',
        },
        iconOutlined: {
          color: 'white',
        },
        iconStandard: {
          color: 'white',
        },
        select: {
          border: '2px solid white',
          outline: 'none',
          '&:focus': {
            border: '2px solid white',
            outline: "none",
          },
        },
        outlined: {
          borderColor: 'white',
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#fff',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="w-screen h-screen">
        <BrowserRouter>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="" element={<Home />} />
              <Route path="settings" element={<Settings />} />
              <Route path="data" element={<Data />} />
              <Route path="resources" element={<Resources />} />
              <Route path="Credits" element={<Credits />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
