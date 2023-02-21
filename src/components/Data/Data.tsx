import {
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { overallVisits } from "../../data";
import LongTableRow from "./LongTableRow";
import { useEffect, useState } from "react";
import CustomizedPagination from "./CustomPagination";
import LCardSm from "./LCardSm";
import HeadMaker from "../Global/HeadMaker";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const Data = () => {
  const [countries, setCountries] = useState([]);

  const getAllCountries = async () => {
    const data = await fetch(
      "https://restcountries.com/v3.1/all?fields=flag,name"
    ).then((data) => data.json());
    setCountries(data);
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  const [country, setCountry] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof country>) => {
    const {
      target: { value },
    } = event;
    setCountry(typeof value === "string" ? value.split(",") : value);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const pageCount = 10;

  const handlePrevClick = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextClick = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const [lgScroll, setLgScroll] = useState(window.innerWidth <= 1350);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setLgScroll(window.innerWidth <= 1350);
    });
  }, [lgScroll]);

  return (
    <div className="resources w-[80%] h-fit flex flex-col items-center gap-8 px-3 lTable:pr-0 lTable:w-full datar:overflow-auto datar:max-h-full">
      <HeadMaker label="Data" />

      <div className="w-full h-full flex flex-col gap-8 bg-gray p-5 rounded-xl lTable:pr-2 datar:w-[95%] datar:mr-4">
        <span className="text-white text-3xl font-bold lMd2:text-2xl">
          Visitors: 5630 users
        </span>
        <div className="w-full h-full flex flex-col justify-start gap-2 ">
          <span className="text-white font-bold text-sm">Search</span>
          <div className="w-full flex items-center justify-center gap-4 2mlg:grid 2mlg:grid-cols-2">
            <TextField
              label="Search IP adress, ISP..."
              InputLabelProps={{
                style: { color: "white" },
              }}
              fullWidth
              className="tableLr:col-span-2"
            />
            <FormControl fullWidth className="tableLr:col-span-2">
              <InputLabel className="bg-gray">
                <span className="text-white mx-2">All Countries</span>
              </InputLabel>
              <Select
                multiple
                value={country}
                onChange={handleChange}
                input={<OutlinedInput />}
                renderValue={(selected) => selected.join(", ")}
                MenuProps={MenuProps}
              >
                {countries?.map((cname: any) => (
                  <MenuItem
                    key={cname.name.official}
                    value={cname.name.official}
                    className="w-full flex justify-center"
                  >
                    <span className="w-fit text-white">{cname.flag}</span>
                    <span className="w-fit text-black">
                      {cname.name.official}
                    </span>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth className="tableLr:col-span-2">
              <InputLabel className="bg-gray">
                <span className="text-white mx-2">All Times</span>
              </InputLabel>
              <Select
                multiple
                value={country}
                onChange={handleChange}
                input={<OutlinedInput />}
                renderValue={(selected) => selected.join(", ")}
                MenuProps={MenuProps}
              >
                {countries?.map((cname: any) => (
                  <MenuItem
                    key={cname.name.official}
                    value={cname.name.official}
                  >
                    <ListItemText primary={cname.name.official} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl className="w-[50%] 2mlg:w-full">
              <button className="buttonOutline border-white text-white gap-2 w-full hover:w-full flex items-center justify-center text-base tracking-wider 2mlg:w-full 2mlg:hover:w-full ">
                <img src="/bulk/trash.svg" />
                Filter
              </button>
            </FormControl>
            <button className="button hover:buttonOutline w-[60%] hover:w-[60%] flex items-center justify-center text-base tracking-wider tableLr:w-full tableLr:hover:w-full ">
              <img src="/bulk/filter.svg" alt="" />
              Filter
            </button>
          </div>
        </div>
        <div className="w-full h-full rounded-2xl flex flex-col justify-center items-start gap-4 bg-gray datar:hidden">
          <div className="w-full grid grid-cols-[5%_28%_8%_15%_10%_10%_10%_10%] bg-primary text-white text-lg py-4 gap-2 rounded-lg xlt:grid-cols-[3%_20%_10%_14%_12%_13%_13%_11%]">
            <span className="w-full text-center">#</span>
            <span className="w-full text-start lTable:text-base  ">
              Ip Adress
            </span>
            <span className="w-full text-start lTable:text-base">Country</span>
            <span className="w-full text-start pl-[3rem] lTable:text-base ">
              ISP
            </span>
            <span className="w-full text-start whitespace-nowrap lTable:text-base ">
              Domain Used
            </span>
            <span className="w-full text-start lTable:text-base ">Owner</span>
            <span className="w-full text-start 2xl:whitespace-nowrap lTable:text-base ">
              ISP Domain
            </span>
            <span className="w-full text-start pl-[1.5rem] lTable:text-base xlt:pl-0 ">
              Time
            </span>
          </div>
          <div
            className={`Mytable w-full h-full overflow-x-hidden overflow-y-auto max-h-[26rem] text-white font-[Poppins] ${
              lgScroll && "resources"
            } `}
          >
            {overallVisits.map((data) => {
              const {
                id,
                ipAdress,
                country,
                cflag,
                domain,
                time,
                isp,
                owner,
                ispDomain,
              } = data;
              return (
                <LongTableRow
                  id={id}
                  country={country}
                  cflag={cflag}
                  domain={domain}
                  time={time}
                  ipAdress={ipAdress}
                  isp={isp}
                  owner={owner}
                  ispDomain={ispDomain}
                />
              );
            })}
          </div>
        </div>
        <hr className="w-full h-1 bg-gray-400" />
        <div className="w-full h-full hidden datar:grid datar:place-items-center ">
          <span className="text-3xl hidden font-bold text-white tracking-wider lMd2:block lMd2:justify-self-start datar:hidden">
            Today Visits
          </span>
          {overallVisits.map((data, index) => {
            const {
              id,
              ipAdress,
              country,
              cflag,
              domain,
              time,
              isp,
              ispDomain,
              owner,
            } = data;
            return (
              <LCardSm
                id={id}
                country={country}
                cflag={cflag}
                domain={domain}
                time={time}
                ipAdress={ipAdress}
                key={index}
                isp={isp}
                ispDomain={ispDomain}
                owner={owner}
              />
            );
          })}
        </div>
        <div className="w-full flex justify-end">
          <CustomizedPagination
            count={pageCount}
            onNextClick={handleNextClick}
            onPrevClick={handlePrevClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Data;
