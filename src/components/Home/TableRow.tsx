import type { FC } from "react";

interface TRowProps {
  id: number;
  ipAdress: string;
  country: string;
  cflag: string;
  domain: string;
  time: string;
}

const TableRow: FC<TRowProps> = (props) => {
  const { id, ipAdress, country, cflag, domain, time } = props;

  return (
    <div className="w-full grid grid-cols-[5%_40%_15%_15%_15%] text-white text-lg py-4 gap-2">
      <span className="w-full text-center">{id}</span>
      <span className="w-full text-start ">{ipAdress}</span>
      <span className="w-full text-start flex gap-2">
        <img src={`/flags/${cflag}.svg`} alt="" /> {country}
      </span>
      <span className="w-full text-start ">{domain}</span>
      <span className="w-full text-center ">{time}</span>
    </div>
  );
};

export default TableRow;
