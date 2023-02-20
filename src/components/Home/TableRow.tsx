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
    <div className="w-full grid grid-cols-[5%_40%_15%_15%_15%] tableSm:grid-cols-[5%_45%_15%_15%_15%] text-white text-lg py-4 gap-2 2xl:py-2 table:py-4 ">
      <span className="w-full text-center">{id}</span>
      <span className="w-full text-start text-sm grid place-items-center justify-start table:text-base ">{ipAdress}</span>
      <span className="w-full text-start flex gap-2 2xl:text-sm items-center table:text-base">
        <img src={`/flags/${cflag}.svg`} alt="" className="2xl:w-5 table:w-6" /> {country}
      </span>
      <span className="w-full text-start 2xl:text-sm 2xl:grid 2xl:place-items-center 2xl:justify-center table:text-base table:justify-start ">{domain}</span>
      <span className="w-full text-center 2xl:text-sm grid place-items-center table:text-base table:justify-start ">{time}</span>
    </div>
  );
};

export default TableRow;
