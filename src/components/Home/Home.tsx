import { generalData, totalVisitsData } from "../../data";
import CardSm from "./CardSm";
import GeneralCard from "./GeneralCard";
import DispersionMap from "./Map/DispersionMap";
import TableRow from "./TableRow";

const Home = () => {
  return (
    <div className="resources w-[80%] h-fit flex flex-col items-center gap-8 px-4 table:overflow-auto table:max-h-full lPhone:w-full">
      <div className="w-full flex items-center justify-between py-4 mt-8">
        <span className="text-white text-5xl font-bold lMd:text-4xl lMd2:text-3xl">
          Dashboard
        </span>
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
      <div className="w-full h-fit flex justify-between gap-8">
        {generalData.map((item, index) => {
          const { imgSrc, label, value, statusValue } = item;
          return (
            <GeneralCard
              imgSrc={imgSrc}
              value={value}
              label={label}
              statusValue={statusValue}
              key={index}
            />
          );
        })}
      </div>
      <div className="w-full h-full flex gap-4  table:flex-col lMd2:grid lMd2:mb-[2rem] ">
        <div className="w-[66%] h-full rounded-2xl p-5 flex flex-col justify-center items-start gap-4 bg-gray table:w-full lMd2:row-start-2 lMd2:items-center">
          <span className="text-3xl font-bold text-white tracking-wider lMd2:hidden">
            Today Visits
          </span>
          <div className="w-full grid grid-cols-[5%_40%_15%_15%_15%] tableSm:grid-cols-[5%_45%_15%_15%_15%] bg-primary text-white text-lg py-4 gap-2 rounded-lg 2xl:py-3 2xl:text-base table:py-4 table:text-lg lMd2:hidden">
            <span className="w-full text-center">#</span>
            <span className="w-full text-start ">Ip Adress</span>
            <span className="w-full text-start">Country</span>
            <span className="w-full text-start 2xl:whitespace-nowrap ">
              Domain Used
            </span>
            <span className="w-full text-start pl-[1.5rem] tableSm:pl-0 ">
              Time
            </span>
          </div>
          <div className="Mytable w-full h-full overflow-x-hidden overflow-y-auto max-h-[26rem] text-white font-[Poppins] lMd2:hidden">
            {totalVisitsData.map((data, index) => {
              const { id, ipAdress, country, cflag, domain, time } = data;
              return (
                <TableRow
                  id={id}
                  country={country}
                  cflag={cflag}
                  domain={domain}
                  time={time}
                  ipAdress={ipAdress}
                  key={index}
                />
              );
            })}
          </div>
          <div className="w-full h-full hidden lMd2:grid lMd2:place-items-center ">
            <span className="text-3xl hidden font-bold text-white tracking-wider lMd2:block lMd2:justify-self-start lMd2:pl-[2rem]">
              Today Visits
            </span>
            {totalVisitsData.map((data, index) => {
              const { id, ipAdress, country, cflag, domain, time } = data;
              return (
                <CardSm
                  id={id}
                  country={country}
                  cflag={cflag}
                  domain={domain}
                  time={time}
                  ipAdress={ipAdress}
                  key={index}
                />
              );
            })}
          </div>
        </div>
        <div className="h-full w-[33%] rounded-2xl p-5 flex flex-col justify-center items-start gap-4 bg-gray table:w-full table:gap-8 table:mb-8 lMd2:h-fit">
          <span className="text-3xl font-bold text-white tracking-wider lMd2:text-2xl">
            Users dispersion
          </span>
          <div className="w-full h-full table:mb-6">
            <DispersionMap />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
