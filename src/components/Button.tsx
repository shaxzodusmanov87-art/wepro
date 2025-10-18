import type { ButtonProps } from "../types/types"
import { BsFillLightningChargeFill } from "react-icons/bs"

const Button = ({ title, background, scrolled }: ButtonProps) => {
    return (
        <button className={`px-3 pb-2 pt-1 rounded-[7px] mr-2 mt-2 font-semibold text-gray-800 hover:bg-black/50 hover:text-gray-400 transition-all duration-300 ${background}`}>
            <span className="flex items-center">
                <div className="h-[15px]">
                    {scrolled && <BsFillLightningChargeFill className="bg-yellow-400 rounded-full w-5 h-5 p-[1px] align-middle mr-2" />}
                </div>
                {title}
            </span>
        </button>

    )
}

export default Button