import {
  Button,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  TextField,
} from "@mui/material";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-screen h-screen bg-primary flex overflow-hidden lMd:flex-col lMd:items-center lMd:justify-center">
      <img
        src="logo.svg"
        className="z-10 mt-8 hidden lMd:block"
        height={10}
        width={80}
        alt=""
      />
      <div
        className="w-full h-full bg-cover relative flex flex-col justify-between items-start lMd:hidden"
        style={{
          backgroundImage: `url("/loginBg.png")`,
          backgroundPosition: "center",
        }}
      >
        <div className="w-full h-full backdrop-blur-xl bg-[#000000b5] absolute"></div>
        <img
          src="logo.svg"
          className="z-10 ml-[2rem] mt-8 w-[6rem] h-[6rem] 2lg:w-[4rem] 2lg:h-[4rem] 2lg:mt-[4rem]"
          alt=""
        />
        <div className="relative w-[80%] h-fit flex flex-col justify-start pl-[2rem] gap-[4rem]">
          <h1 className="w-full text-7xl text-white font-bold flex flex-col gap-2 2lg:text-5xl">
            <span>This is a test </span>
            <span className="whitespace-nowrap">piece that helps </span>
            <span className="whitespace-nowrap">designers and devs</span>
          </h1>
          <div className="w-[15rem] h-2 rounded-full flex gap-2">
            <div className="w-[40%] rounded-full bg-white"></div>
            <div className="w-[40%] rounded-full bg-white"></div>
            <div className="w-full rounded-full bg-red"></div>
          </div>
        </div>
        <div className="w-full h-fit flex z-10 justify-start gap-[5rem] pl-[5rem] mb-8 2lg:pl-[2rem] 2lg:mb-[3rem] 2mlg:gap-[2rem]">
          {["Home", "About", "Contact Us", "Terms & Conditions"].map((item) => {
            return (
              <Link
                to={item}
                className="text-white font-bold text-sm uppercase 2mlg:text-xs 2mlg:whitespace-nowrap"
              >
                {item}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="w-full h-full flex flex-col items-center justify-center gap-[2rem]">
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
            Or login with
          </span>
        </h1>
        <div className="w-full h-fit flex items-center justify-center gap-4 ssm:gap-8">
          {["facebook", "google", "apple"].map((item) => {
            return (
              <div className="w-fit h-14 p-3 border rounded-xl border-gray-400">
                <img
                  src={`/bulk/${item}.svg`}
                  className="w-full h-full "
                  alt=""
                />
              </div>
            );
          })}
        </div>
        <Link to="/login" className="text-gray-400 tracking-wider">
          Haven't sign up yet? <b className="text-white">Login</b>
        </Link>
      </div>
    </div>
  );
};

export default Login;
