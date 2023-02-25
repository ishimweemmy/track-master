import {
  Checkbox,
  FormControlLabel,
  InputAdornment,
  TextField,
} from "@mui/material";
import { Link, redirect } from "react-router-dom";
import NavWraper from "../../components/Global/AuthWraper";
import { useLoginUserMutation } from "../../services/user-api-slice";
import { useState } from "react";

const Login = () => {
  const [loginUser, { data, error, isError, isLoading, isSuccess }] =
    useLoginUserMutation();

  const [userCredentials, setUserCredentials] = useState({
    username: "",
    password: "",
  });

  return (
    <NavWraper>
      <span className="text-white text-4xl font-bold tracking-wider ssm1:text-3xl">
        Login to TrackMaster
      </span>
      <div className="w-[50%] h-[5.5rem] flex flex-col items-start gap-2 ssm:w-[70%] ssm1:w-[80%] xss:w-full 2lg:w-[70%]">
        <span className="text-white text-sm font-semibold tracking-wider">
          Username
        </span>
        <TextField
          placeholder="Enter username"
          InputProps={{
            sx: {
              "& input": {
                color: "white",
              },
              "& label": { color: "white" },
            },
            startAdornment: (
              <InputAdornment position="start">
                <img src="/bulk/user.svg" />
              </InputAdornment>
            ),
          }}
          required
          fullWidth
        />
      </div>
      <div className="w-[50%] h-[5.5rem] flex flex-col items-start gap-2 ssm:w-[70%] ssm1:w-[80%] xss:w-full 2lg:w-[70%]">
        <span className="text-white text-sm font-semibold tracking-wider">
          Password
        </span>
        <TextField
          placeholder="Enter Password"
          InputProps={{
            sx: {
              "& input": {
                color: "white",
              },
            },
            startAdornment: (
              <InputAdornment position="start">
                <img src="/bulk/key.svg" />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="start">
                <img src="/bulk/frame.svg" />
              </InputAdornment>
            ),
          }}
          required
          fullWidth
        />
      </div>
      <div className="w-[48%] h-[1rem] flex justify-between lMd:w-[70%] ssm:w-[70%] 2lg:w-[70%]">
        <FormControlLabel
          control={
            <Checkbox
              defaultChecked
              sx={{
                "& .MuiSvgIcon-root": {
                  color: "white",
                  fontSize: "1.3rem",
                },
              }}
            />
          }
          label="Remember me"
          sx={{
            color: "white",
          }}
        />
        <Link
          to="resetPassword"
          className="text-white font-bold text-sm whitespace-nowrap"
        >
          Reset password
        </Link>
      </div>
      <button
        className="button hover:buttonOutline ssm:w-[70%] 2lg:w-[70%] 2lg:hover:w-[70%]"
        onClick={() => redirect("localhost:3000/dashboard")}
      >
        Login
      </button>
      <h1 className="w-full flex flex-col items-center relative">
        <hr className="w-[48%] border border-gray-400 ssm:w-[70%] 2lg:w-[70%]" />
        <span className="text-gray-300 absolute bg-primary px-4 -translate-y-3">
          Or login with
        </span>
      </h1>
    </NavWraper>
  );
};

export default Login;
