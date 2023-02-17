import { useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [sidebarIconsData, setSideBarIconsData] = useState([
    {
      icon: "home-2",
      label: "Home",
      active: true,
      url: "",
    },
    {
      icon: "folder-2",
      label: "Data",
      active: false,
      url: "data",
    },
    {
      icon: "note-2",
      label: "Resources",
      active: false,
      url: "resources",
    },
    {
      icon: "card",
      label: "Credits",
      active: false,
      url: "credits",
    },
    {
      icon: "setting-2",
      label: "Settings",
      active: false,
      url: "settings",
    },
  ]);

  const handleLableActiveness = (label: string) => {
    setSideBarIconsData((prevData) => {
      return prevData.map((data) => {
        if (data.active) {
          data.active = false;
        }
        return data.label === label ? { ...data, active: !data.active } : data;
      });
    });
  };

  return (
    <div className="w-screen h-full overflow-hidden bg-primary">
      <div className="w-[18%] h-full flex flex-col items-center justify-between py-8 border-r border-r-gray-400">
        <img src="/logo.svg" className="z-10" height={10} width={70} alt="" />
        <div className="w-full h-fit flex flex-col gap-8 items-center justify-center">
          {sidebarIconsData.map((item) => {
            return (
              <Link
                to={`/dashboard/${item.url}`}
                className={`w-full grid place-items-center relative after:w-1 after:h-[99%] after:rounded-r-lg after:absolute after:-right-1 after:transition-all after:duration-1000 ${
                  item.active && " after:bg-red "
                }`}
                onClick={() => handleLableActiveness(item.label)}
              >
                <div className="w-[80%] h-full py-4 flex items-center justify-start gap-3 hover:bg-gray-400 transition-all duration-500 text-lg text-white font-bold rounded-lg pl-14 ">
                  <img
                    src={`/bulk/${item.icon}.svg`}
                    className="w-8 h-8"
                    alt=""
                  />
                  <span>{item.label}</span>
                </div>
                <div
                  className={`h-[97%] w-2 transition-all duration-1000 ${
                    item.active && "bg-red"
                  } absolute right-0`}
                  style={{ WebkitFilter: `blur(20px)` }}
                ></div>
              </Link>
            );
          })}
        </div>
        <div className="w-full grid place-items-center relative after:w-1 after:h-[99%]">
          <div className="w-[80%] h-full py-4 flex items-center justify-start gap-3 hover:bg-gray-400 transition-all duration-500 text-lg text-white font-bold rounded-lg pl-14 ">
            <img src={`/bulk/logout.svg`} alt="" />
            <span>Logout</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
