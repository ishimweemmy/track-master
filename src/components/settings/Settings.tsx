import { InputAdornment, TextField } from "@mui/material";
import PasswordField from "./PasswordField";

const Settings = () => {
  return <div className="w-[80%] h-fit flex flex-col items-center gap-8 px-4">
    <div className="w-full flex items-center justify-between py-4 mt-8">
      <span className="text-white text-5xl font-bold">Settings</span>
      <div className="w-fit h-full flex gap-5">
        <div className="w-fit h-14 p-3 rounded-xl gray-400">
          <img
            src={`/bulk/notification.svg`}
            className="w-full h-full "
            alt=""
          />
        </div>
        <div className="w-16 h-14 rounded-xl gray-400 overflow-clip">
          <img src={`/person.jpeg`} className="w-full h-full " alt="" />
        </div>
      </div>
    </div>
    <div className="w-full h-full flex flex-col gap-8 bg-gray p-5 rounded-xl">
      <span className="text-white text-3xl font-bold">
        Visitors: 5630 users
      </span>
      <div className="w-full h-full flex items-center justify-center gap-4">
        <PasswordField label="Current Password" placeholder="Enter your current password" />
        <PasswordField label="New Password" placeholder="Enter New password" />
        <PasswordField label="Repeat Password" placeholder="Enter new password again" />

        <button className="button hover:buttonOutline w-[60%] hover:w-[60%] text-base tracking-wider self-end ">
          Change password
        </button>
      </div>
    </div>
  </div>;
};

export default Settings;
