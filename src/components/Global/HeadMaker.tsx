import type { FC } from "react";

interface HeadMakerProps {
  label: string;
}

const HeadMaker: FC<HeadMakerProps> = (props) => {
  return (
    <>
      <div className="w-full flex items-center justify-between py-4 mt-8">
        <img
          src={`/logo.svg`}
          className="w-[3rem] h-[3rem] hidden lPhone:block "
          alt=""
        />
        <span className="w-full text-white text-5xl font-bold lMd:text-4xl lMd2:text-3xl lPhone:hidden ">
          {props.label}
        </span>

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
      <span className="w-full text-white text-5xl font-bold lMd:text-4xl lMd2:text-3xl hidden lPhone:block ">
        {props.label}
      </span>
    </>
  );
};

export default HeadMaker;
