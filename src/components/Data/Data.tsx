import {
  Checkbox,
  FormControl,
  InputAdornment,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Pagination,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { overallVisits } from "../../data";
import LongTableRow from "./LongTableRow";
import { ChangeEvent, useEffect, useState } from "react";
import CustomizedPagination from "./CustomPagination";

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


  return (
    <div className="w-[80%] h-fit flex flex-col items-center gap-8 px-3">
      <div className="w-full flex items-center justify-between py-4 mt-8">
        <span className="text-white text-5xl font-bold">Data</span>
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
      <div className="w-full h-full flex flex-col gap-8 bg-gray p-5 rounded-xl">
        <span className="text-white text-3xl font-bold">
          Visitors: 5630 users
        </span>
        <div className="w-full h-full flex flex-col justify-start gap-2">
          <span className="text-white font-bold text-sm">Search</span>
          <div className="w-full flex items-center justify-center gap-4">
            <TextField label="Search IP adress, ISP..." InputLabelProps={{
              style: { color: 'white' }
            }} fullWidth />
            <FormControl fullWidth>
              <InputLabel>All Countries</InputLabel>
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
                    <Checkbox
                      checked={country.indexOf(cname.name.official) > -1}
                    />
                    <ListItemText primary={cname.name.official} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel>All Times</InputLabel>
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
            <FormControl className="w-[50%]">
              <OutlinedInput
                startAdornment={
                  <InputAdornment position="start">
                    <img src="/bulk/trash.svg" />
                  </InputAdornment>
                }
                placeholder="Clear"
              />
            </FormControl>
            <button className="button hover:buttonOutline w-[60%] hover:w-[60%] flex items-center justify-center text-base tracking-wider ">
              <img src="/bulk/filter.svg" alt="" />
              Filter
            </button>
          </div>
        </div>
        <div className="w-full h-full rounded-2xl flex flex-col justify-center items-start gap-4 bg-gray">
          <div className="w-full grid grid-cols-[5%_28%_8%_15%_10%_10%_10%_10%] bg-primary text-white text-lg py-4 gap-2 rounded-lg">
            <span className="w-full text-center">#</span>
            <span className="w-full text-start ">Ip Adress</span>
            <span className="w-full text-start">Country</span>
            <span className="w-full text-start pl-[3rem] ">ISP</span>
            <span className="w-full text-start ">Domain Used</span>
            <span className="w-full text-start ">Owner</span>
            <span className="w-full text-start ">ISP Domain</span>
            <span className="w-full text-start pl-[1.5rem] ">Time</span>
          </div>
          <div className="Mytable w-full h-full overflow-x-hidden overflow-y-auto max-h-[26rem] text-white font-[Poppins]">
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
