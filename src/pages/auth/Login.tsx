import {
  Checkbox,
  FormControlLabel,
  InputAdornment,
  TextField,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import AuthWraper from "../../components/Global/AuthWraper";
import { useLoginUserMutation } from "../../services/user-api-slice";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { setUserState } from "../../features/user/userReducer";
import { useAppDispatch } from "../../app/hooks";

const Login = () => {
  const [loginUser, mutationResult] = useLoginUserMutation();

  const navigate = useNavigate();

  const formRef = useRef<HTMLFormElement | null>(null);
  const dispatch = useAppDispatch();

  const [userCredentials, setUserCredentials] = useState({
    username: "",
    password: "",
  });

  const [userCredentialErrors, setUserCredentialErrors] = useState({
    username: false,
    password: false,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserCredentials((prevUserCredentials) => {
      return { ...prevUserCredentials, [name]: value };
    });
  };

  useEffect(() => {}, [mutationResult]);

  const handleLogin = async () => {
    try {
      const result = await loginUser({
        email: userCredentials.username,
        password: userCredentials.password,
      }).unwrap();

      const { email, token, userId } = result;
      dispatch(setUserState({ username: email, token: token, userId: userId }));
      toast.success("logged in successfully!");
      navigate("/dashboard");
    } catch (err: any) {
      toast.error("Invalid credentials.", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setUserCredentialErrors(() => {
      return { username: false, password: false };
    });
    if (userCredentials.username && userCredentials.password) {
      handleLogin();
    } else {
      if (!userCredentials.username) {
        setUserCredentialErrors((prevCredErrors) => {
          return { ...prevCredErrors, username: true };
        });
      }
      if (!userCredentials.password) {
        setUserCredentialErrors((prevCredErrors) => {
          return { ...prevCredErrors, password: true };
        });
      }
    }
  };

  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <AuthWraper handleSubmit={handleSubmit} formRef={formRef} page="login">
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
          onChange={handleChange}
          name="username"
          value={userCredentials.username}
          helperText={
            userCredentialErrors.username ? "Fill in a correct username" : ""
          }
          error={userCredentialErrors.username}
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
              <InputAdornment
                position="start"
                onClick={() => setPasswordVisible((prev) => !prev)}
                className="cursor-pointer"
              >
                <img src="/bulk/frame.svg" />
              </InputAdornment>
            ),
          }}
          required
          fullWidth
          onChange={handleChange}
          name="password"
          value={userCredentials.password}
          helperText={
            userCredentialErrors.password ? "Fill in a correct password" : ""
          }
          error={userCredentialErrors.password}
          type={passwordVisible ? "text" : "password"}
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
        className={`button hover:buttonOutline ssm:w-[70%] 2lg:w-[70%] 2lg:hover:w-[70%] ${
          mutationResult.isLoading &&
          "bg-loading hover:bg-loading text-primary hover:text-primary hover:border-0"
        }`}
        onClick={() => formRef.current?.click()}
        disabled={mutationResult.isLoading}
      >
        {mutationResult.isLoading ? "loading, please wait..." : "Login"}
      </button>
      <h1 className="w-full flex flex-col items-center relative">
        <hr className="w-[48%] border border-gray-400 ssm:w-[70%] 2lg:w-[70%]" />
        <span className="text-gray-300 absolute bg-primary px-4 -translate-y-3">
          Or login with
        </span>
      </h1>
    </AuthWraper>
  );
};

export default Login;
