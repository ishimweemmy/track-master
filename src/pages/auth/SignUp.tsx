import {
  InputAdornment,
  TextField,
} from "@mui/material";
import { Link } from "react-router-dom";
import NavWraper from "../../components/Global/AuthWraper";

const Login = () => {
  return (
    <NavWraper>
      <span className="text-white text-4xl font-bold tracking-wider lMd2:text-3xl lMd:text-5xl xsPhone:text-4xl ssm2:text-3xl">
          Sign up to TrackMaster
        </span>
        <div className="w-[50%] h-[5.5rem] flex flex-col items-start gap-2 ssm:w-[70%] ssm1:w-[80%] xss:w-full 2lg:w-[70%]">
          <span className="text-white text-sm font-semibold tracking-wider">
            Email
          </span>
          <TextField
            placeholder="Enter Email"
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
        <div className="w-[50%] h-[5.5rem] flex flex-col items-start gap-2 ssm:w-[70%] ssm1:w-[80%] xss:w-full 2lg:w-[70%]">
          <span className="text-white text-sm font-semibold tracking-wider">
            Repeat Password
          </span>
          <TextField
            placeholder="Enter Password again"
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
        <button className="button hover:buttonOutline ssm:w-[70%] 2lg:w-[70%] 2lg:hover:w-[70%]">
          Sign up
        </button>
        <h1 className="w-full flex flex-col items-center relative">
          <hr className="w-[48%] border border-gray-400 ssm:w-[70%] 2lg:w-[70%]" />
          <span className="text-gray-300 absolute bg-primary px-4 -translate-y-3">
            Or Sign up with
          </span>
        </h1>
    </NavWraper>
  );
};

export default Login;
