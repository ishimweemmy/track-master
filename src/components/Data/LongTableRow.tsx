import { FC, useState } from "react";
import { truncateString } from "../../functions/truncateString";
import { formatTime } from "../../functions/formatTime";

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
    <div className="w-full grid grid-cols-[5%_28%_8%_15%_10%_10%_10%_10%] text-white text-lg py-4 gap-2 table:grid-cols-[3%_15%_15%_14%_12%_13%_13%_11%]">
      <span className="w-full text-center text-base">{id}</span>
      <span
        className={`w-full relative text-start text-base grid place-items-center justify-start 2xl:text-sm lTable:text-xs cursor-pointer group`}
      >
        <b className="xlt:group-hover:hidden xlt:block">{truncateString(ipAdress, 20)}</b>
        <b className="hidden ">{ipAdress}</b>
        <b className="hidden xlt:group-hover:block absolute -left-2 text-red bg-[black] ">
          {ipAdress}
        </b>
      </span>
      <span className="w-full text-start flex gap-2 text-base 2xl:text-sm items-center table:text-base   ">
        <b>{cflag}</b>
        {country}
      </span>
      <span className="w-full text-center text-base lPhone:text-sm xlt:text-sm flex items-center group relative whitespace-nowrap hover:z-50 ">
        <b className="group-hover:hidden block">{truncateString(isp, 10)}</b>
        <b className="hidden group-hover:block absolute -left-2 text-red bg-[black] ">
          {isp}
        </b>
      </span>
      <span className="w-full text-center text-base lPhone:text-sm xlt:text-sm flex items-center group relative whitespace-nowrap hover:z-50 ">
        <b className="group-hover:hidden block">{truncateString(domain, 15)}</b>
        <b className="hidden group-hover:block absolute -left-2 text-red bg-[black] ">
          {domain}
        </b>
      </span>
      <span className="w-full text-center text-base lPhone:text-sm xlt:text-sm flex items-center group relative whitespace-nowrap hover:z-50 ">
        <b className="group-hover:hidden block">{truncateString(owner, 10)}</b>
        <b className="hidden group-hover:block absolute -left-20 text-red bg-[black] ">
          {owner}
        </b>
      </span>
      <span className="w-full text-center text-base flex items-center ">{ispDomain}</span>
      <span className="w-full text-center text-base lPhone:text-sm xlt:text-sm flex items-center group relative whitespace-nowrap hover:z-50 ">
        <b className="group-hover:hidden block">{truncateString(time, 10)}</b>
        <b className="hidden group-hover:block absolute -left-20 text-red bg-[black] ">
          {formatTime(time)}
        </b>
      </span>
    </div>
  );
};

export default LongTableRow;
