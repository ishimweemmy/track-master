import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import type { FC } from "react";

export interface AccordionProps {
    question: string;
    answer: string;
    expanded: boolean;
    panel: string;
    handleChange: (question: string) => any;
    page?: string;
}

const FacAccordion: FC<AccordionProps> = (props) => {
    const { question, answer, handleChange, panel, expanded, page } = props;

    return (
        <div className="w-full h-full flex flex-col items-start justify-center gap-4 transition-all duration-1000 miniTablet:w-full rounded-xl">
            <Accordion
                expanded={expanded}
                onChange={handleChange(panel)}
                style={{
                    cursor: `none`,
                    boxShadow: `none`,
                    borderRadius: 0,
                    backgroundColor: "#1F1F1F"
                }}
                className={`w-full pb-1 shadow-none border-none miniTablet:pb-[2rem] miniTablet:pt-[2rem] rounded-2xl bg-gray-300 ${panel == "panel1" && "border-t"}`}
            >
                <AccordionSummary
                    expandIcon={
                        expanded ? (
                            <img src="/bulk/arrow-up.svg" />
                        ) : (
                            <img src="/bulk/arrow-bottom.svg" />
                        )
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <span className="w-full text-base font-bold text-white  transition-all duration-700 flex justify-between items-center">
                        {question}
                    </span>
                </AccordionSummary>
                <AccordionDetails>
                    <span className="text-xs font-semibold lg:text-sm mini2xl:text-base md:pr-[65%] text-gray-600">
                        {answer}
                    </span>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default FacAccordion;