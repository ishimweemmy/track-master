import type { FC } from "react";

interface LCardSmProps {
  id: number;
  country: string;
  cflag: string;
  domain: string;
  time: string;
  ipAdress: string;
  isp: string;
  owner: string;
  ispDomain: string;
}

const LCardSm: FC<LCardSmProps> = (props) => {
  const { id, ipAdress, country, cflag, domain, time, isp, ispDomain, owner } =
    props;

  return (
    <div
      className={`w-[100%] pr-[1rem] h-full flex flex-col justify-center items-center gap-4 py-8 ${id != 1 && "border-t border-t-gray-300"
        }`}
    >
      <p className="w-full h-fit flex justify-between items-center text-xl font-medium text-white ipr:justify-start">
        <span className="text-[#eaeaea] whitespace-nowrap ipr:hidden">
          Ip Adress:{" "}
        </span>
        <span className="text-checked font-bold text-lg tracking-widest">
          {ipAdress}
        </span>
      </p>
      <p className="w-full h-fit flex justify-between items-center text-xl font-medium text-white">
        <span className="text-[#eaeaea]">country: </span>
        <span className="flex gap-2">
          <b className="2xl:w-5 table:w-6">{cflag}</b>
          {country}
        </span>
      </p>
      <p className="w-full h-fit flex justify-between items-center text-xl font-medium text-white">
        <span className="text-[#eaeaea]">ISP: </span>
        <span className="flex gap-2">{isp}</span>
      </p>
      <p className="w-full h-fit flex justify-between items-center text-xl font-medium text-white">
        <span className="text-[#dadada]">Domain Used: </span>
        <span className="flex gap-2">{domain}</span>
      </p>
      <p className="w-full h-fit flex justify-between items-center text-xl font-medium text-white">
        <span className="text-[#eaeaea]">Owner: </span>
        <span className="flex gap-2">{owner}</span>
      </p>
      <p className="w-full h-fit flex justify-between items-center text-xl font-medium text-white">
        <span className="text-[#eaeaea]">ISP Domain: </span>
        <span className="flex gap-2">{ispDomain}</span>
      </p>
      <p className="w-full h-fit flex justify-between items-center text-xl font-medium text-white">
        <span className="text-[#eaeaea]">Time: </span>
        <span className="flex gap-2">{time}</span>
      </p>
    </div>
  );
};

export default LCardSm;
