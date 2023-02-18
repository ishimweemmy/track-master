import type { FC } from "react";

interface CcardProps {
    imgSrc: string;
    label: string;
    value: number;
}

const Ccard: FC<CcardProps> = (props) => {
    const { imgSrc, label, value } = props;

    return (
        <div className="w-full h-fit flex flex-col justify-start items-start  gap-4 bg-gray rounded-xl py-4 pl-8">
            <img src={`/bulk/${imgSrc}.svg`} className="w-16 h-16" alt="" />
            <div className="w-full h-fit flex flex-col justify-start gap-4 font-bold text-white">
                <span className="w-full text-lg text-white tracking-wide">
                    {label}
                </span>
                <span className="text-3xl">${value}</span>
            </div>
        </div>
    );
};

export default Ccard;
