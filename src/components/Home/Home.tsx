import { generalData, totalVisitsData } from "../../data";
import GeneralCard from "./GeneralCard";
import TableRow from "./TableRow";

const Home = () => {
  return (
    <div className="w-[80%] h-fit flex flex-col items-center gap-8 px-4">
      <div className="w-full flex items-center justify-between py-4 mt-8">
        <span className="text-white text-5xl font-bold">Dashboard</span>
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
      <div className="w-full h-fit flex justify-between gap-6">
        {generalData.map((item) => {
          const { imgSrc, label, value, statusValue } = item;
          return (
            <GeneralCard
              imgSrc={imgSrc}
              value={value}
              label={label}
              statusValue={statusValue}
            />
          );
        })}
      </div>
      <div className="w-full h-full flex gap-4">
        <div className="w-[66%] h-full rounded-2xl p-5 flex flex-col justify-center items-start gap-4 bg-gray">
          <span className="text-3xl font-bold text-white tracking-wider">
            Today Visits
          </span>
          <div className="w-full grid grid-cols-[5%_40%_15%_15%_15%] bg-primary text-white text-lg py-4 gap-2 rounded-lg">
            <span className="w-full text-center">#</span>
            <span className="w-full text-start ">Ip Adress</span>
            <span className="w-full text-start">Country</span>
            <span className="w-full text-start ">Domain Used</span>
            <span className="w-full text-start pl-[1.5rem] ">Time</span>
          </div>
          <div className="Mytable w-full h-full overflow-x-hidden overflow-y-auto max-h-[26rem] text-white font-[Poppins]">
            {totalVisitsData.map((data) => {
              const { id, ipAdress, country, cflag, domain, time } = data;
              return (
                <TableRow
                  id={id}
                  country={country}
                  cflag={cflag}
                  domain={domain}
                  time={time}
                  ipAdress={ipAdress}
                />
              );
            })}
          </div>
        </div>
        <div className="h-full w-[33%] max-h-[26rem] rounded-2xl p-5 flex flex-col justify-center items-start gap-4 bg-gray"></div>
      </div>
    </div>
  );
};

export default Home;
