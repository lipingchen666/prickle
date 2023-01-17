import React from "react";
import { twMerge } from "tailwind-merge";

interface HorizontalDividerProps {
    className?: string
    children?: React.ReactNode
}
const HorizontalDivider = ({
    className,
    children="",
}: HorizontalDividerProps) => {
    return (
        <div className={twMerge("flex items-center w-full justify-between", className)}>
            <hr className={"basis-2/5 border-solid border-gray-400 border-t-2 shrink"}/>
            <div className="basis-1/5 flex justify-center items-center whitespace-nowrap px-4">
                {children}
            </div>
            <hr className={"basis-2/5 border-solid border-gray-400 border-t-2 shrink"}/>
        </div>
    )
}

export default HorizontalDivider;