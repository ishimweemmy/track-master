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
    <div className="w-screen h-screen bg-primary flex overflow-hidden">
      <div
        className="w-full h-full bg-cover relative flex flex-col justify-center items-start gap-[15rem] py-[2rem] "
        style={{
          backgroundImage: `url("/loginBg.png")`,
          backgroundPosition: "center",
        }}
      >
        <div className="w-full h-full backdrop-blur-xl bg-[#000000b5] absolute"></div>
        <img
          src="logo.svg"
          className="z-10 ml-[2rem]"
          height={10}
          width={80}
          alt=""
        />
        <div className="relative w-[80%] h-fit flex flex-col justify-start px-[2rem] gap-[4rem]">
          <h1 className=" text-7xl text-white font-bold flex flex-col gap-2">
            <span>This is a test </span>
            <span>piece that helps </span>
            <span>designers and devs</span>
          </h1>
          <div className="w-[15rem] h-2 rounded-full flex gap-2">
            <div className="w-[40%] rounded-full bg-white"></div>
            <div className="w-[40%] rounded-full bg-white"></div>
            <div className="w-full rounded-full bg-red"></div>
          </div>
        </div>
        <div className="w-full h-fit flex z-10 justify-start gap-[5rem] pl-[5rem]">
          {["Home", "About", "Contact Us", "Terms & Conditions"].map((item) => {
            return (
              <Link
                to={item}
                className="text-white font-bold text-sm uppercase"
              >
                {item}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="w-full h-full flex flex-col items-center justify-center gap-[2rem]">
        <span className="text-white text-4xl font-bold tracking-wider">
          Login to TrackMaster
        </span>
        <div className="w-[50%] h-[5.5rem] flex flex-col items-start gap-2">
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
        <div className="w-[50%] h-[5.5rem] flex flex-col items-start gap-2">
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
        <div className="w-[48%] h-[1rem] flex justify-between">
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
        <button className="button hover:buttonOutline">Login</button>
        <h1 className="w-full flex flex-col items-center relative">
          <hr className="w-[48%] border border-gray-400" />
          <span className="text-gray-300 absolute bg-primary px-4 -translate-y-3">
            Or login with
          </span>
        </h1>
        <div className="w-full h-fit flex items-center justify-center gap-4">
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
        <Link to="/signup" className="text-gray-400 tracking-wider">Haven't sign up yet? <b className="text-white">Sign Up</b></Link>
      </div>
    </div>
  );
};

export default Login;
