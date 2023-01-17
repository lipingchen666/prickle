import React from "react";
import { twMerge } from "tailwind-merge";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    label?: string
    required?: boolean
    labelClassName?: string 
    inputClassName?: string
    errorMessageClassName?: string
    errorMessage?: string
    labelAndInputContainerClassName?: string
    containerClassName?: string
    error?: boolean
}

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(({ 
    label,
    required=false,
    labelClassName="",
    inputClassName="",
    type="text",
    error=false,
    errorMessage="This field is required",
    labelAndInputContainerClassName="",
    containerClassName="",
    ...rest
}: TextInputProps, ref) => {
    return (
        <div className={twMerge("flex flex-col", containerClassName)}>
            <div className={twMerge("flex items-center", labelAndInputContainerClassName)}>
                {label && required && <label className={twMerge("", labelClassName)}>{label}&#42;</label>}
                {label && !required && <label className={twMerge("", labelClassName)}>{label}</label>}
                <input ref={ref} type={type} className={twMerge(`p-2 h-9 border-1 border-gray-500 ${label ? "w-9/12": "w-full"} ml-auto`, inputClassName)} {...rest} />
            </div>
            {error && <span className={`${label ? "w-9/12": "w-full"} ml-auto text-red-600 text-sm`}>{errorMessage}</span>}
        </div>
    )
});
// const TextInput = () => {
//     return (
//         <div className="flex flex-col">
//             <div className={"flex items-center"}>
//                 <label>Email&#42;</label>
//                 <input type="email" className="p-2 h-9 border-1 border-gray-500 w-9/12 ml-auto" {...register("email", { required: true })} />
//             </div>
//             <span className="w-9/12 ml-auto text-red-600 text-sm">This field is required</span>
//         </div>
//     )
// }

export default TextInput;