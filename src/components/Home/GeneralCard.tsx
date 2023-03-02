import type { FC } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";

export interface GeneralCardsProps {
  imgSrc: string;
  label: string;
  value: number;
  statusValue: number;
}

const GeneralCard: FC<GeneralCardsProps> = (props) => {
  const { imgSrc, label, value, statusValue } = props;

  return (
    <div className="w-full h-fit flex flex-col justify-start items-start  gap-4 bg-gray rounded-xl py-4 pl-8">
      <img src={`/bulk/${imgSrc}.svg`} className="w-16 h-16" alt="" />
      <div className="w-full h-fit grid grid-cols-2 place-items-center lMd2:grid-cols-1">
        <span className="w-full  text-lg text-white tracking-wide">
          {label}
        </span>
        <h1 className="w-full  text-white text-xl font-bold tracking-wide flex items-center justify-start gap-2">
          <span className="text-3xl">{value}</span>
          <span
            className={`flex font-medium text-sm items-center justify-center gap-2 lPhone:hidden ${
              statusValue < 0 ? "text-red" : "text-green-500"
            }`}
          >
            <AiOutlineArrowDown />
            <b>{statusValue}</b>
          </span>
        </h1>
        <img
          src={`/bulk/${statusValue < 0 ? "dropdown" : "rise"}.svg`}
          className="w-[50%] col-start-2 row-start-1 row-span-2 lMd2:hidden "
          alt=""
        />
      </div>
    </div>
  );
};

export default GeneralCard;
