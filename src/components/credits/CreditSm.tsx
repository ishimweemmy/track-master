import type { FC } from "react";
import { BsExclamationLg } from "react-icons/bs";
import { GoCheck } from "react-icons/go";

interface CreditSm {
  id: number;
  date: string;
  invoiceNo: string;
  amount: number;
  paid: boolean;
}

const CreditSm: FC<CreditSm> = (props) => {
  const { id, date, invoiceNo, amount, paid } = props;
  return (
    <div className="w-full h-fit py-4 gap-4 flex flex-col justify-start">
      <span className="font-bold text-base text-white">{amount}</span>
      <p className="w-full font-bold text-base text-white">
        <span className="text-white text-base">Date: </span>
        <span className="text-white text-base">{date}</span>
      </p>
      <p className="w-full font-bold text-base text-white">
        <span className="text-white text-base">Invoice No: </span>
        <span className="text-white text-base">{invoiceNo}</span>
      </p>
      <p className="w-full font-bold text-base text-white">
        <span className="text-white text-base">Status: </span>
        {paid ? (
          <h1 className="w-full text-start text-checked flex items-center justify-start gap-2  ">
            <GoCheck className="text-checked p-2 w-8 h-8 rounded-full bg-[#0080003d]" />
            <span>paid</span>
          </h1>
        ) : (
          <h1 className="w-full text-start text-red flex items-center justify-start gap-2">
            <BsExclamationLg className="text-red w-8 h-8 p-2 rounded-full bg-[#8000003d]" />
            <span>Unpaid</span>
          </h1>
        )}
      </p>
      <span className="w-full text-start flex justify-end gap-2">
        <img src="/bulk/document-download.svg" className="w-8 h-8" alt="" />
        <img src="/bulk/more.svg" className="w-8 h-8 rotate-90" alt="" />
      </span>
    </div>
  );
};

export default CreditSm;
