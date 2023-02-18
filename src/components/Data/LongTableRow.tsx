import type { FC } from "react";

interface LTRowProps {
  id: number;
  ipAdress: string;
  country: string;
  cflag: string;
  domain: string;
  time: string;
  isp: string;
  owner: string;
  ispDomain: string;
}

const LongTableRow: FC<LTRowProps> = (props) => {
  const { id, ipAdress, country, cflag, domain, time, isp, owner, ispDomain } =
    props;

  return (
    <div className="w-full grid grid-cols-[5%_28%_8%_15%_10%_10%_10%_10%] text-white text-lg py-4 gap-2">
      <span className="w-full text-center">{id}</span>
      <span className="w-full text-start ">{ipAdress}</span>
      <span className="w-full text-start flex gap-2">
        <img src={`/flags/${cflag}.svg`} alt="" /> {country}
      </span>
      <span className="w-full text-center ">{isp}</span>
      <span className="w-full text-start ">{domain}</span>
      <span className="w-full text-center ">{owner}</span>
      <span className="w-full text-center ">{ispDomain}</span>
      <span className="w-full text-center ">{time}</span>
    </div>
  );
};

export default LongTableRow;
