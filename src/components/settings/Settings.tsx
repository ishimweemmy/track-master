import { ChangeEvent, FormEvent, useState } from "react";
import HeadMaker from "../Global/HeadMaker";
import PasswordField from "./PasswordField";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Settings = () => {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    repeatedPassword: "",
  });
  const [formDataErrors, setFormDataErrors] = useState({
    currentPasswordError: false,
    newPasswordError: false,
    repeatedPasswordError: false,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      return { ...prevFormData, [name]: value };
    });
  };

  const passwordStrength = (password: string): string => {
    const mediumRegex = new RegExp(
      "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"
    );

    const strongRegex = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    );

    if (strongRegex.test(password)) return "strong";
    if (mediumRegex.test(password)) return "medium";
    return "easy";
  };

  const validateStrengthAndToast = () => {
    if (
      formData.currentPassword != "" &&
      formData.newPassword != "" &&
      formData.repeatedPassword != "" &&
      formData.newPassword == formData.repeatedPassword
    ) {
      if (passwordStrength(formData.newPassword) == "strong")
        toast.success("your password is strong!");
      if (passwordStrength(formData.newPassword) == "medium")
        toast.success("your password is medium!");
      if (passwordStrength(formData.newPassword) == "easy")
        toast.error("your password is very weak. Make it stronger!");
    }
  };

  const showErrors = () => {
    if (formData.currentPassword == "") {
      setFormDataErrors((prevFormDataErrors) => {
        return { ...prevFormDataErrors, currentPasswordError: true };
      });
    }

    if (formData.newPassword == "") {
      setFormDataErrors((prevFormDataErrors) => {
        return { ...prevFormDataErrors, newPasswordError: true };
      });
    }

    if (
      formData.repeatedPassword == "" ||
      formData.newPassword != formData.repeatedPassword
    ) {
      setFormDataErrors((prevFormDataErrors) => {
        return { ...prevFormDataErrors, repeatedPasswordError: true };
      });
    }
  };

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();

    setFormDataErrors(() => {
      return {
        currentPasswordError: false,
        newPasswordError: false,
        repeatedPasswordError: false,
      };
    });

    validateStrengthAndToast();

    showErrors();
  };

  return (
    <div className="w-[80%] h-fit flex flex-col items-center gap-8 px-4 lPhone:w-full">
      <HeadMaker label="Settings" />
      <div className="w-full h-full flex flex-col gap-8 bg-gray p-5 rounded-xl">
        <span className="text-white text-3xl font-bold">
          Visitors: 5630 users
        </span>
        <form
          noValidate
          onSubmit={handleSubmit}
          className="w-full h-full flex items-center justify-center gap-4 datar:grid datar:grid-cols-1 "
        >
          <PasswordField
            label="Current Password"
            placeholder="Enter your current password"
            value={formData.currentPassword}
            onChange={handleChange}
            helperText="The current password is required to proceed *"
            error={formDataErrors.currentPasswordError}
            name="currentPassword"
          />
          <PasswordField
            label="New Password"
            placeholder="Enter New password"
            value={formData.newPassword}
            onChange={handleChange}
            helperText="Enter the new password please *"
            error={formDataErrors.newPasswordError}
            name="newPassword"
          />
          <PasswordField
            label="Repeat Password"
            placeholder="Enter new password again"
            value={formData.repeatedPassword}
            onChange={handleChange}
            helperText="passwords do not match *"
            error={formDataErrors.repeatedPasswordError}
            name="repeatedPassword"
          />
          <button className="button hover:buttonOutline w-[60%] hover:w-[60%] text-base tracking-wider self-end 2lg:w-full ">
            Change password
          </button>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
};

export default Settings;
