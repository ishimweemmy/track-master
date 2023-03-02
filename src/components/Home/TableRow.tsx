import type { FC } from "react";
import { truncateString } from "../../functions/truncateString";
import { formatTime } from "../../functions/formatTime";

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
    <div className="w-full grid grid-cols-[5%_35%_15%_15%_20%] tableSm:grid-cols-[5%_45%_15%_15%_15%] text-white text-lg py-4 gap-2 2xl:py-2 table:py-4 dxl:grid-cols-[5%_35%_20%_15%_25%] 3xl:grid-cols-[5%_40%_15%_15%_15%] table:grid-cols-[5%_40%_15%_15%_20%] ">
      <span className="w-full text-center">{id}</span>
      <span
        className={`w-full relative text-start text-base grid place-items-center justify-start 2xl:text-sm lTable:text-xs cursor-pointer group`}
      >
        <b className="table:hidden">{truncateString(ipAdress, 20)}</b>
        <b className="hidden table:block">{ipAdress}</b>
        <b className="hidden xlt:group-hover:block absolute -left-2 text-red bg-[black] ">
          {ipAdress}
        </b>
      </span>
      <span className="w-full text-start flex gap-2 2xl:text-sm items-center table:text-base">
        <span className="2xl:w-5 table:w-6">{cflag}</span> {country}
      </span>
      <span className="w-full text-start 2xl:text-sm 2xl:grid 2xl:place-items-center 2xl:justify-center table:text-base table:justify-start ">{domain}</span>
      <span className="w-full text-center 2xl:text-sm grid place-items-center table:text-base table:justify-start group relative whitespace-nowrap hover:z-50 dxl:pl-6 ">
        <b className="group-hover:hidden block">{truncateString(time, 10)}</b>
        <b className="hidden group-hover:block absolute -left-5 text-red bg-[black] ">
          {formatTime(time)}
        </b>
      </span>
    </div>
  );
};

export default TableRow;
