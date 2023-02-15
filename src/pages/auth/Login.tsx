const Login = () => {
  return (
    <div className="w-screen h-screen bg-primary flex overflow-hidden">
      <div
        className="w-full h-full bg-cover relative flex flex-col justify-center items-start gap-[3rem] "
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
          width={90}
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
      </div>
      <div className="w-full h-full bg-"></div>
    </div>
  );
};

export default Login;
