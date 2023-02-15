import { Input } from "antd";
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
      <div className="w-full h-full flex flex-col items-center justify-center gap-[1rem]">
        <span className="text-white text-4xl font-bold tracking-wider">
          Login to TrackMaster
        </span>
        <div className="w-[50%] h-[5.5rem] flex flex-col items-start gap-2">
          <span className="text-white text-sm font-semibold tracking-wider">Username</span>
          <Input size="large" placeholder="Enter Username" prefix={<img src="/bulk/user.svg" />} className="text-[#ffffff4b]" style={{border: `1px solid #ffffff4b`, backgroundColor: `black`, height: `100%`}} />
        </div>
        <div className="w-[50%] h-[5.5rem] flex flex-col items-start gap-2">
          <span className="text-white text-sm font-semibold tracking-wider">Password</span>
          <Input size="large" placeholder="Enter Password" prefix={<img src="/bulk/key.svg" />} suffix={<img src="/bulk/frame.svg" />} className="text-white" style={{border: `1px solid #ffffff4b`, backgroundColor: `black`, height: `100%`}} />
        </div>
        <div className="w-[50%] h-[1rem] flex justify-between bg-[blue]">
          <Input type="checkbox" style={{border: `none`, outline: `none`}} />
          <Link to="resetPassword" className="text-white font-bold text-sm uppercase whitespace-nowrap">Reset password</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
