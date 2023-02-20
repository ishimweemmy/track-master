import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";

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

  const location = useLocation();
  useEffect(() => {}, [location]);

  return (
    <div className="w-screen h-full overflow-hidden bg-primary flex">
      <div className="w-[18%] h-full flex flex-col items-center justify-between py-8 border-r border-r-gray-400 lMd2:w-[28%] lPhone:hidden">
        <img src="/logo.svg" className="z-10" height={10} width={70} alt="" />
        <div className="w-full h-fit flex flex-col gap-8 items-center justify-center">
          {sidebarIconsData.map((item, index) => {
            return (
              <Link
                to={`/dashboard/${item.url}`}
                className={`w-full grid place-items-center relative after:w-1 after:h-[99%] after:rounded-r-lg after:absolute after:-right-1 after:transition-all after:duration-1000 ${
                  item.active && " after:bg-red "
                }`}
                onClick={() => handleLableActiveness(item.label)}
                key={index}
              >
                <div className={`w-[80%] h-full py-4 flex items-center justify-start gap-3 hover:bg-gray-400 transition-all duration-500 text-lg text-white font-bold rounded-lg pl-14 sidebar:pl-4 lgXl:text-base lgXl:py-3 ${location.pathname =="/dashboard/data" && "w-[90%] tableLr:text-sm"}`}>
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
          <div className="w-[80%] h-full py-4 flex items-center justify-start gap-3 hover:bg-gray-400 transition-all duration-500 text-lg text-white font-bold rounded-lg pl-14 sidebar:pl-4 lgXl:text-base lgXl:py-3 ">
            <img src={`/bulk/logout.svg`} alt="" />
            <span>Logout</span>
          </div>
        </div>
      </div>
      <div className="hidden w-full h-[7rem] lPhone:flex items-center justify-between fixed bottom-0 z-10 rounded-tr-3xl rounded-tl-3xl backdrop-blur-lg border-t border-t-gray-400">
        <div className="w-full h-full backdrop-blur-xl bg-[#0000004e] absolute"></div>
        {sidebarIconsData.map((item, index) => {
          return (
            <Link
              to={`/dashboard/${item.url}`}
              className={`w-full grid place-items-center relative before:w-[78%] before:h-[4%] before:rounded-t-full before:absolute before:top-0 before:left-3 before:transition-all before:duration-1000 ${
                item.active && " before:bg-red "
              }`}
              onClick={() => handleLableActiveness(item.label)}
              key={index}
            >
              <div className="w-[80%] h-full py-4 flex flex-col items-center justify-start gap-3 hover:bg-gray-400 transition-all duration-500 text-lg text-white font-bold rounded-lg lgXl:text-base lgXl:py-3 ">
                <img
                  src={`/bulk/${item.icon}.svg`}
                  className="w-8 h-8"
                  alt=""
                />
                <span>{item.label}</span>
              </div>
              <div
                className={`h-[97%] w-2 transition-all duration-1000 rotate-90 ${
                  item.active && "bg-red"
                } absolute right-5 top-0`}
                style={{ WebkitFilter: `blur(20px)` }}
              ></div>
            </Link>
          );
        })}
      </div>
      <Outlet />
    </div>
  );
};

export default Dashboard;
