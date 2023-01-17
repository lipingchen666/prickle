import React from "react";
import { twMerge } from "tailwind-merge";

interface CheckboxInputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    label?: string
    inputClassName?: string
    labelAndInputContainerClassName?: string
}

const CheckboxInput = React.forwardRef<HTMLInputElement, CheckboxInputProps>(({
    label,
    inputClassName="",
    labelAndInputContainerClassName="",
    ...rest
}: CheckboxInputProps, ref) => {
    return (
        <div className={twMerge("mr-auto items-center space-x-2.5", labelAndInputContainerClassName)}>
            <input ref={ref} className={twMerge("", inputClassName)} type="checkbox" {...rest} />
            {label && <label>{label}</label>}
        </div>
    )
});

export default CheckboxInput;