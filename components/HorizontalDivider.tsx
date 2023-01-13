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
            <hr className={"w-2/5 border-solid border-gray-400 border-t-2"}/>
                {children}
            <hr className={"w-2/5 border-solid border-gray-400 border-t-2"}/>
        </div>
    )
}

export default HorizontalDivider;