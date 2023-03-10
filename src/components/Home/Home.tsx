import { useEffect, useState } from "react";
import HeadMaker from "../Global/HeadMaker";
import CardSm from "./CardSm";
import GeneralCard from "./GeneralCard";
import DispersionMap from "./Map/DispersionMap";
import TableRow from "./TableRow";
import {
  useFetchAllVisitorsDataQuery,
} from "../../services/data-api-slice";

const Home = () => {
  const { data: generalData, isLoading, isError, isSuccess } = useFetchAllVisitorsDataQuery()

  return (
    <div className="resources w-[80%] h-fit flex flex-col items-center gap-8 px-4 table:overflow-auto table:max-h-full lPhone:w-full">
      <HeadMaker label="Dashboard" />
      <div className="w-full h-fit flex justify-between gap-8">
        <GeneralCard imgSrc="monitor-mobbile"
          value={isSuccess ? generalData?.users.length : isLoading ? "Loading..." : "Failed to fetch the data..."}
          label="Devices"
          statusValue={0}
        />
        <GeneralCard imgSrc="global-search"
          value={isSuccess ? generalData?.nbrCountries : isLoading ? "Loading..." : "Failed to fetch the data..."}
          label="Countries"
          statusValue={0}
        />
        <GeneralCard imgSrc="mouse-circle"
          value={isSuccess ? generalData?.users.length : isLoading ? "Loading..." : "Failed to fetch the data..."}
          label="Clicks"
          statusValue={0}
        />
      </div>
      <div className="w-full h-full flex gap-4  table:flex-col lMd2:grid lMd2:mb-[2rem] ">
        <div className="w-[66%] h-full rounded-2xl p-5 flex flex-col justify-center items-start gap-4 bg-gray table:w-full lMd2:row-start-2 lMd2:items-center">
          <span className="text-3xl font-bold text-white tracking-wider lMd2:hidden">
            Today Visits
          </span>
          <div className="w-full grid grid-cols-[5%_40%_15%_15%_15%] tableSm:grid-cols-[5%_45%_15%_15%_15%] bg-primary text-white text-lg py-4 gap-2 rounded-lg 2xl:py-3 2xl:text-base table:py-4 table:text-lg lMd2:hidden">
            <span className="w-full text-center">#</span>
            <span className="w-full text-start ">Ip Adress</span>
            <span className="w-full text-start">Country</span>
            <span className="w-full text-start 2xl:whitespace-nowrap ">
              Domain Used
            </span>
            <span className="w-full text-start pl-[1.5rem] tableSm:pl-0 ">
              Time
            </span>
          </div>
          <div className="Mytable w-full h-full overflow-x-hidden overflow-y-auto max-h-[26rem] text-white font-[Poppins] lMd2:hidden">
            {isError && <h1 className="text-red">There was an error fetching data. Check your network connection and try again </h1>}
            {isLoading && !isError ? <h1 className="text-white">Loading new data...</h1> : generalData?.data.map((data: { ID: any; IP: any; Country: any; CountryFlag: any; Domain: any; createdAt: any; ISPDomain: any; Owner: any; ISP: any; }) => {
              const {
                ID,
                IP,
                Country,
                CountryFlag,
                Domain,
                createdAt,
              } = data;
              return (
                <TableRow
                  id={ID}
                  country={Country}
                  cflag={CountryFlag}
                  domain={Domain}
                  time={createdAt}
                  ipAdress={IP}
                  key={ID}
                />
              );
            })}
          </div>
          <div className="w-full h-full hidden lMd2:grid lMd2:place-items-center ">
            <span className="text-3xl hidden font-bold text-white tracking-wider lMd2:block lMd2:justify-self-start lMd2:pl-[2rem]">
              Today Visits
            </span>
            {isLoading ? <h1 className="text-white">Loading new data...</h1> : generalData?.data.map((data: { ID: any; IP: any; Country: any; CountryFlag: any; Domain: any; createdAt: any; ISPDomain: any; Owner: any; ISP: any; }) => {
              const {
                ID,
                IP,
                Country,
                CountryFlag,
                Domain,
                createdAt,
              } = data;
              return (
                <CardSm
                  id={ID}
                  country={Country}
                  cflag={CountryFlag}
                  domain={Domain}
                  time={createdAt}
                  ipAdress={IP}
                  key={ID}
                />
              );
            })}
          </div>
        </div>
        <div className="h-full w-[33%] rounded-2xl p-5 flex flex-col justify-center items-start gap-4 bg-gray table:w-full table:gap-8 table:mb-8 lMd2:h-fit">
          <span className="text-3xl font-bold text-white tracking-wider lMd2:text-2xl">
            Users dispersion
          </span>
          <div className="w-full h-full table:mb-6">
            <DispersionMap />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
