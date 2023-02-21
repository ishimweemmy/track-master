import type { FC } from "react";

interface TRowProps {
  id: number;
  ipAdress: string;
  country: string;
  cflag: string;
  domain: string;
  time: string;
}

const CardSm: FC<TRowProps> = (props) => {
  const { id, ipAdress, country, cflag, domain, time } = props;

  return (
    <div
      className={`w-[85%] h-full flex flex-col justify-center items-center gap-4 py-8 lPhone:w-[90%] ${
        id != 1 && "border-t border-t-gray-300"
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
          <img
            src={`/flags/${cflag}.svg`}
            alt=""
            className="2xl:w-5 table:w-6"
          />{" "}
          {country}
        </span>
      </p>
      <p className="w-full h-fit flex justify-between items-center text-xl font-medium text-white">
        <span className="text-[#dadada]">Domain Used: </span>
        <span className="flex gap-2">{domain}</span>
      </p>
      <p className="w-full h-fit flex justify-between items-center text-xl font-medium text-white">
        <span className="text-[#eaeaea]">Time: </span>
        <span className="flex gap-2">{time}</span>
      </p>
    </div>
  );
};

export default CardSm;
