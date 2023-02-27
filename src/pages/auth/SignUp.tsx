import { InputAdornment, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import NavWraper from "../../components/Global/AuthWraper";
import { useSignupUserMutation } from "../../services/user-api-slice";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { toast } from "react-toastify";

const Signup = () => {
  const [signupUser, mutationResult] = useSignupUserMutation();

  const navigate = useNavigate();

  const formRef = useRef<HTMLFormElement | null>(null);

  const [userCredentials, setUserCredentials] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [userCredentialErrors, setUserCredentialErrors] = useState({
    username: false,
    password: false,
    confirmPassword: false,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserCredentials((prevUserCredentials) => {
      console.log(name);
      return { ...prevUserCredentials, [name]: value };
    });
  };

  useEffect(() => {}, [mutationResult]);

  const handleLogin = async () => {
    try {
      await signupUser({
        email: userCredentials.username,
        password: userCredentials.password,
      }).unwrap();

      navigate("/login");
    } catch (err: any) {
      if (err.status == 422) {
        return toast.error("User already exists.", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
      toast.error("Invalid credentials.", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setUserCredentialErrors(() => {
      return { username: false, password: false, confirmPassword: false };
    });
    if (
      userCredentials.username &&
      userCredentials.password &&
      userCredentials.confirmPassword == userCredentials.password
    ) {
      handleLogin();
    } else {
      if (!userCredentials.password) {
        setUserCredentialErrors((prevCredErrors) => {
          return { ...prevCredErrors, password: true };
        });
      }
      if (!userCredentials.username) {
        setUserCredentialErrors((prevCredErrors) => {
          return { ...prevCredErrors, username: true };
        });
      }
      if (!userCredentials.confirmPassword) {
        setUserCredentialErrors((prevCredErrors) => {
          return { ...prevCredErrors, confirmPassword: true };
        });
      }

      if (userCredentials.password != userCredentials.confirmPassword) {
        setUserCredentialErrors((prevCredErrors) => {
          return { ...prevCredErrors, confirmPassword: true };
        });
      }
    }
  };

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confPassVisible, setConfPassVisible] = useState(false);
  return (
    <NavWraper handleSubmit={handleSubmit} formRef={formRef} page="signup">
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
            userCredentialErrors.username ? "Fill in a correct password" : ""
          }
          error={userCredentialErrors.password}
          type={passwordVisible ? "text" : "password"}
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
              <InputAdornment
                position="start"
                onClick={() => setConfPassVisible((prev) => !prev)}
                className="cursor-pointer"
              >
                <img src="/bulk/frame.svg" />
              </InputAdornment>
            ),
          }}
          required
          fullWidth
          onChange={handleChange}
          name="confirmPassword"
          value={userCredentials.confirmPassword}
          helperText={
            userCredentialErrors.confirmPassword ? "Passwords do not match" : ""
          }
          error={userCredentialErrors.confirmPassword}
          type={confPassVisible ? "text" : "password"}
        />
      </div>
      <button
        className={`button hover:buttonOutline ssm:w-[70%] 2lg:w-[70%] 2lg:hover:w-[70%] ${
          mutationResult.isLoading &&
          "bg-loading hover:bg-loading text-primary hover:text-primary hover:border-0"
        }`}
      >
        {mutationResult.isLoading ? "loading, please wait..." : "Sign up"}
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

export default Signup;
