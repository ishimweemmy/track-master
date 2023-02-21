import type { FC } from "react";
import { GoCheck } from "react-icons/go";
import { BsExclamationLg } from "react-icons/bs";

interface CTableProps {
  id: number;
  date: string;
  invoiceNo: string;
  paid: boolean;
  amount: number;
}

const CTableRow: FC<CTableProps> = (props) => {
  const { id, date, invoiceNo, paid, amount } = props;

  return (
    <div className="w-full grid grid-cols-[5%_25%_15%_15%_15%_15%] text-white text-lg py-4 gap-2 lgXl:grid-cols-[5%_23%_20%_15%_15%_15%] lTable:grid-cols-[5%_23%_20%_18%_15%_12%] ">
      <span className="w-full text-center">{id}</span>
      <span className="w-full text-start whitespace-nowrap ">{date}</span>
      <span className="w-full text-start whitespace-nowrap ">{invoiceNo}</span>
      <span className="w-full text-start pl-[2rem] ">$ {amount}</span>
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
      <span className="w-full text-start flex gap-2">
        <img src="/bulk/document-download.svg" className="w-8 h-8" alt="" />
        <img src="/bulk/more.svg" className="w-8 h-8 rotate-90" alt="" />
      </span>
    </div>
  );
};

export default CTableRow;
