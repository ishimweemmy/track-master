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
    <div
      className={`w-full h-fit py-4 gap-6 flex flex-col justify-start  ${
        id != 1 && "border-t border-t-gray-300"
      }`}
    >
      <span className="font-bold text-xl i4:text-base text-white">${amount}</span>
      <p className="w-full font-medium text-xl i4:text-base text-white flex items-center justify-between">
        <span className="text-white text-xl i4:text-base">Date: </span>
        <span className="text-white text-xl i4:text-base">{date}</span>
      </p>
      <p className="w-full font-medium text-xl i4:text-base text-white flex items-center justify-between">
        <span className="text-white text-xl i4:text-base">Invoice No: </span>
        <span className="text-white text-xl i4:text-base">{invoiceNo}</span>
      </p>
      <h1 className="w-full font-medium text-xl i4:text-base text-white flex justify-between items-center">
        <span className="text-white text-xl i4:text-base">Status: </span>
        {paid ? (
          <p className="text-start text-checked flex items-center justify-start gap-2  ">
            <GoCheck className="text-checked p-2 w-8 h-8 rounded-full bg-[#0080003d]" />
            <span>paid</span>
          </p>
        ) : (
          <p className="text-start text-red flex items-center justify-start gap-2">
            <BsExclamationLg className="text-red w-8 h-8 p-2 rounded-full bg-[#8000003d]" />
            <span>Unpaid</span>
          </p>
        )}
      </h1>
      <span className="w-full text-start flex justify-end gap-3 items-center">
        <img src="/bulk/document-download.svg" className="w-10 h-10 i4:h-8 i4:w-8" alt="" />
        <img src="/bulk/more.svg" className="w-10 h-10 i4:h-8 i4:w-8 rotate-90" alt="" />
      </span>
    </div>
  );
};

export default CreditSm;
