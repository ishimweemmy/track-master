// backdrop-blur-xl
import type { FC } from "react"

interface ArticleProps {
    imgSrc: string;
    title: string;
    publish_date: string;
    description: string;
}

const Article: FC<ArticleProps> = (props) => {
    const { imgSrc, title, publish_date, description } = props;
    return (
        <div className='w-full h-[16rem] rounded-xl bg-cover bg-center relative grid place-items-center items-end' style={{ backgroundImage: `url("/${imgSrc}")` }}>
            <div className="w-[90%] h-[40%] rounded-xl backdrop-blur-md flex flex-col items-start justify-center gap-2 text-white mb-5 py-4 pl-4">
                <span className="font-medium">{publish_date}</span>
                <span className="font-bold text-lg">{title}</span>
            </div>
        </div>
    )
}

export default Article