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

const truncateString = (word: string, charNumber: number) => {
  if (word.length > charNumber) {
    return `${word.slice(0, charNumber)}...`;
  }
};

const LongTableRow: FC<LTRowProps> = (props) => {
  const { id, ipAdress, country, cflag, domain, time, isp, owner, ispDomain } =
    props;

  return (
    <div className="w-full grid grid-cols-[5%_28%_8%_15%_10%_10%_10%_10%] text-white text-lg py-4 gap-2 xlt:grid-cols-[3%_19%_12%_14%_12%_13%_13%_11%]">
      <span className="w-full text-center text-base">{id}</span>
      <span
        className={`w-full relative text-start text-base grid place-items-center justify-start 2xl:text-sm lTable:text-xs cursor-pointer group`}
      >
        <b className="xlt:group-hover:hidden hidden xlt:block">{truncateString(ipAdress, 20)}</b>
        <b className="xlt:hidden block">{ipAdress}</b>
        <b className="hidden xlt:group-hover:block absolute -left-2 text-checked bg-[black] ">
          {ipAdress}
        </b>
      </span>
      <span className="w-full text-start flex gap-2 text-base 2xl:text-sm items-center table:text-base   ">
        <img src={`/flags/${cflag}.svg`} alt="" className="2xl:w-6 table:w-6" />{" "}
        {country}
      </span>
      <span className="w-full text-center text-base 2xl:text-sm items-center ">
        {isp}
      </span>
      <span className="w-full text-start text-base flex items-center ">{domain}</span>
      <span className="w-full text-center text-base flex items-center ">{owner}</span>
      <span className="w-full text-center text-base flex items-center ">{ispDomain}</span>
      <span className="w-full text-center text-base lPhone:text-sm xlt:text-sm flex items-center ">
        {time}
      </span>
    </div>
  );
};

export default LongTableRow;
