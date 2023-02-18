// backdrop-blur-xl
import type { FC } from "react"

interface ArticleProps {
    title: string;
    label: string;
    description: string;
}

const Guide: FC<ArticleProps> = (props) => {
    const { title, label, description } = props;
    return (
        <div className='w-full h-[20rem] rounded-xl flex flex-col items-start justify-center border border-gray-400 p-4 gap-2'>
            <div className="w-full h-[90%] grid place-items-center bg-primary rounded-xl mb-1">
                <img src="/bulk/message-question.svg" className="w-12 h-12" alt="" />
            </div>
            <span className="font-medium text-sm text-white italic">{label}</span>
            <span className="font-bold text-lg text-white">{title}</span>
        </div>
    )
}

export default Guide