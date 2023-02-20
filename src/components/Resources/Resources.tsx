import { useState } from "react";
import { articlesData, guidesData } from "../../data";
import Article from "./Article";
import FacAccordion from "./FaAccordion";
import Guide from "./Guide";
import HeadMaker from "../Global/HeadMaker";

const Resources = () => {
  const accordionData = [
    {
      question:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique ligula vitae lectus commodo pretium. Mauris tincidunt ex vel justo porttitor suscipit. Sed pharetra purus ",
      answer:
        "yes it is possible that you can change the shipping address anytime before 3 days but notice that if you do so it will the delay in the arrival of your order",
      panel: "panel1",
    },
    {
      question:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique ligula vitae lectus commodo pretium. Mauris tincidunt ex vel justo porttitor suscipit. Sed pharetra purus ",
      answer:
        "yes it is possible that you can change the shipping address anytime before 3 days but notice that if you do so it will the delay in the arrival of your order",
      panel: "panel2",
    },
    {
      question:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique ligula vitae lectus commodo pretium. Mauris tincidunt ex vel justo porttitor suscipit. Sed pharetra purus ",
      answer:
        "yes it is possible that you can change the shipping address anytime before 3 days but notice that if you do so it will the delay in the arrival of your order",
      panel: "panel3",
    },
    {
      question:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique ligula vitae lectus commodo pretium. Mauris tincidunt ex vel justo porttitor suscipit. Sed pharetra purus ",
      answer:
        "yes it is possible that you can change the shipping address anytime before 3 days but notice that if you do so it will the delay in the arrival of your order",
      panel: "panel4",
    },
  ];
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <div className="resources w-[80%] h-fit flex flex-col items-center gap-8 px-4 max-h-screen overflow-y-auto lPhone:w-full ">
      <HeadMaker label="Resources" />

      <div className="w-full h-full flex flex-col justify-start gap-8 bg-gray rounded-xl p-8  ">
        <span className="text-white text-3xl font-bold xss:text-2xl">
          Articles
        </span>
        <div className="w-full grid grid-cols-4 gap-8 lTable:grid-cols-2 xsPhone:grid-cols-1 lPhone:grid-cols-2 ssm1:grid-cols-1 ">
          {articlesData.map((data) => {
            const { title, description, publish_date, imgSrc } = data;
            return (
              <Article
                title={title}
                description={description}
                publish_date={publish_date}
                imgSrc={imgSrc}
              />
            );
          })}
        </div>
      </div>

      <div className="w-full h-full flex flex-col justify-start gap-8 bg-gray rounded-xl p-8  ">
        <span className="text-white text-3xl font-bold">Guide</span>
        <div className="w-full grid grid-cols-4 gap-8 lTable:grid-cols-2 xsPhone:grid-cols-1 lPhone:grid-cols-2 ssm1:grid-cols-1">
          {guidesData.map((data) => {
            const { title, description, label } = data;
            return (
              <Guide title={title} description={description} label={label} />
            );
          })}
        </div>
      </div>
      <div className="w-full h-fit flex flex-col bg-gray mb-[5rem]">
        <span className="text-white font-bold m-4 text-2xl">FAQ</span>
        {accordionData.map((data) => {
          return (
            <FacAccordion
              expanded={expanded === data.panel}
              handleChange={handleChange}
              question={data.question}
              panel={data.panel}
              answer={data.answer}
              page="product"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Resources;
