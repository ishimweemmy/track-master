import HeadMaker from "../Global/HeadMaker";
import PasswordField from "./PasswordField";

const Settings = () => {
  return (
    <div className="w-[80%] h-fit flex flex-col items-center gap-8 px-4 lPhone:w-full">
      <HeadMaker label="Settings" />
      <div className="w-full h-full flex flex-col gap-8 bg-gray p-5 rounded-xl">
        <span className="text-white text-3xl font-bold">
          Visitors: 5630 users
        </span>
        <div className="w-full h-full flex items-center justify-center gap-4 datar:grid datar:grid-cols-1 ">
          <PasswordField
            label="Current Password"
            placeholder="Enter your current password"
          />
          <PasswordField
            label="New Password"
            placeholder="Enter New password"
          />
          <PasswordField
            label="Repeat Password"
            placeholder="Enter new password again"
          />
          <button className="button hover:buttonOutline w-[60%] hover:w-[60%] text-base tracking-wider self-end 2lg:w-full ">
            Change password
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
