import { creditsData, generalData, totalVisitsData, transactionsData } from "../../data";
import TableRow from "../Home/TableRow";
import Calendar from "./Calendar";
import Ccard from "./Ccard";
import CTableRow from "./CTableRow";
import TransactionsInput from "./TransactionsInput";

const Credits = () => {
  return <div className="w-[80%] h-fit flex flex-col items-center gap-8 px-4">
    <div className="w-full flex items-center justify-between py-4 mt-8">
      <span className="text-white text-5xl font-bold">Credits</span>
      <div className="w-fit h-full flex gap-5">
        <div className="w-fit h-14 p-3 rounded-xl gray-400">
          <img
            src={`/bulk/notification.svg`}
            className="w-full h-full "
            alt=""
          />
        </div>
        <div className="w-16 h-14 rounded-xl gray-400 overflow-clip">
          <img src={`/person.jpeg`} className="w-full h-full " alt="" />
        </div>
      </div>
    </div>
    <div className="w-full h-full flex gap-4">
      <div className="w-[75%] h-full flex flex-col items-center justify-center gap-6">
        <div className="w-full h-fit flex justify-between gap-6">
          {creditsData.map((item) => {
            const { imgSrc, label, value } = item;
            return (
              <Ccard
                imgSrc={imgSrc}
                value={value}
                label={label}
              />
            );
          })}
        </div>
        <div className="w-full h-full rounded-2xl p-5 flex flex-col justify-center items-start gap-4 bg-gray">
          <span className="text-3xl font-bold text-white tracking-wider">
            Invoices
          </span>
          <div className="w-full grid grid-cols-[5%_25%_15%_15%_15%_15%] bg-primary text-white text-lg py-4 gap-2 rounded-lg">
            <span className="w-full text-center">#</span>
            <span className="w-full text-start ">Date</span>
            <span className="w-full text-start">Invoice NO</span>
            <span className="w-full text-start pl-[1.3rem] ">Amount</span>
            <span className="w-full text-start pl-[1.5rem] ">Status</span>
            <span className="w-full text-start pl-[1.5rem] ">_______</span>
          </div>
          <div className="Mytable w-full h-full overflow-x-hidden overflow-y-auto max-h-[26rem] text-white font-[Poppins]">
            {transactionsData.map((data) => {
              const { id, date, invoiceNo, amount, paid } = data;
              return (
                <CTableRow
                  key={id}
                  id={id}
                  invoiceNo={invoiceNo}
                  date={date}
                  amount={amount}
                  paid={paid}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-[30%] h-full rounded-xl flex flex-col items-start justify-center gap-8 p-6 bg-gray">
        <span className="text-3xl font-bold text-white tracking-wider">
          Deposit
        </span>
        <span className="text-white text-base">Enter your card information</span>
        <div className="w-[50%] h-fit flex items-center justify-center gap-4">
          <div className="w-full h-14 p-3 border rounded-xl border-gray-400">
            <img
              src="/cards/mastercard.svg"
              className="w-full h-full "
              alt=""
            />
          </div>
          <div className="w-full h-14 p-3 border rounded-xl border-gray-400">
            <img
              src="/cards/visa.svg"
              className="w-full h-full "
              alt=""
            />
          </div>
        </div>
        <TransactionsInput label="Holder Name" placeholder="Write card holder name" />
        <TransactionsInput label="Card Number" placeholder="Write card Number" />
        <div className="w-full h-full grid grid-cols-2 place-items-center gap-x-6 gap-y-8">
          <Calendar label="EXP date" />
          <TransactionsInput label="CVC" placeholder="Write CVC code " />
          <TransactionsInput label="Amount ($)" placeholder="Write amount" />
          <button className="button hover:buttonOutline w-full hover:w-full text-base tracking-wider self-end ">
            Deposit
          </button>
        </div>
      </div>
    </div>
  </div>
};

export default Credits;
