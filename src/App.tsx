import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Settings from "./components/settings/Settings";
import Home from "./components/Home/Home";
import Data from "./components/Data/Data";
import Resources from "./components/Resources/Resources";
import Credits from "./components/credits/Credits";
import SignUp from "./pages/auth/SignUp";
import Dashboard from "./pages/Dashboard";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import type { } from "@mui/x-date-pickers/themeAugmentation";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { ToastContainer } from "react-toastify";
import { setUserState } from "./features/user/userReducer";
import { useAppDispatch, useAppSelector } from "./app/hooks";

const theme = createTheme({
  components: {
    MuiDatePicker: {
      styleOverrides: {
        root: {
          backgroundColor: "#0000",
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          "&:before": {
            borderBottomColor: "white",
            outlineColor: "white",
          },
          "&:hover:before": {
            borderBottomColor: "white",
            outlineColor: "white",
          },
          "&.Mui-focused:before": {
            borderBottomColor: "white",
            outlineColor: "white",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-input": {
            color: "white",
          },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
          {
            borderColor: "white",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "white",
            outlineColor: "white",
            color: "white",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "white",
            outlineColor: "white",
            color: "white",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "white",
            outlineColor: "white",
            color: "white",
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        icon: {
          color: "white",
        },
        iconOpen: {
          color: "white",
        },
        iconFilled: {
          color: "blue",
        },
        iconOutlined: {
          color: "white",
        },
        iconStandard: {
          color: "white",
        },
        select: {
          border: "2px solid white",
          outline: "none",
          color: "white",
          "&:focus": {
            border: "2px solid white",
            outline: "none",
            color: "white",
          },
        },
        outlined: {
          borderColor: "white",
          color: "white",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#fff",
    },
  },
});

function App() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  useEffect(() => {
    const cachedUserData = window.localStorage.getItem("user");

    if (cachedUserData != null) {
      if ((JSON.parse(cachedUserData)).hasOwnProperty("username"))
        dispatch(setUserState(JSON.parse(cachedUserData)));
    }
  }, []);

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <ThemeProvider theme={theme}>
        <div className="w-screen h-screen transition-all duration-1000">
          <BrowserRouter>
            <ToastContainer />
            <Routes>
              <Route
                path="/" element={user.token != null ? <Navigate to="/dashboard" /> : <Navigate to="/login" />
                }
              />
              <Route path="/dashboard" element={user.token != null ? <Dashboard /> : <Navigate to="/login" />}>
                <Route path="" element={<Home />} />
                <Route path="settings" element={<Settings />} />
                <Route path="data" element={<Data />} />
                <Route path="resources" element={<Resources />} />
                <Route path="Credits" element={<Credits />} />
              </Route>
              <Route path="/login" element={user.token != null ? <Navigate to="/dashboard" /> : <Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="*" element={<Dashboard />} />
            </Routes>
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </LocalizationProvider>
  );
}

export default App;
