import type { CoursesProps } from "../types/types"
import Button from "./Button"

const Courses = ({ type, title, time, link, color, btntext, textcolor, position }: CoursesProps) => {
    return (
        <div
            className={`group text-black w-[400px] h-[400px] border-2 border-transparent hover:border-black ${color} hover:bg-white hover:pb-10 hover:pt-5 transition-all duration-500 rounded-[10px] p-7 flex flex-col items-start ${position}`}
            style={{
                backgroundImage: `url(${link})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"
            }}>
            
            
            <div className="bg-white w-fit px-1 rounded-[5px]">
                <p className="text-[12px] uppercase">{type}</p>
            </div>
            <h1 className={`text-3xl font-semibold group-hover:text-black ${textcolor}`}>{title}</h1>
            <p className={`group-hover:text-black ${textcolor}`}>{time}</p>
            <Button
                title={btntext || ""}
                background="bg-yellow-400"
                scrolled = {true}
            />
        </div>
    )
}

export default Courses