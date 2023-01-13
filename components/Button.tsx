import React from 'react';
import { twMerge } from 'tailwind-merge';
import get from 'lodash/get';
import clsx from 'clsx';

export type ButtonType = "outlined" | "contained" | "link";
export type Color = "teal" | "amber" | "black"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    buttonType?: ButtonType
    color?: Color
    // className?: string
    // onClick?: React.MouseEventHandler<HTMLButtonElement>
    // children?: React.ReactNode;
}


const LinkButton = ({
    className,
    children
}: Omit<ButtonProps, "type">): JSX.Element => {
    return (
        <a className={twMerge("px-4", className)}>
            {children}
        </a>
    )
}

const ContainedButton = ({
    className,
    children
}: Omit<ButtonProps, "type">): JSX.Element => {
    return (
        <button className={twMerge("px-10 py-2.5 bg-teal-400", className)}>
            {children}
        </button>
    )
}

const OutlinedButton = ({
    className,
    children
}: Omit<ButtonProps, "type">): JSX.Element => {
    return (
        <button className={twMerge("px-10 py-2.5 bg-teal-400", className)}>
            {children}
        </button>
    )
}

const typeToButtonMap = {
    "contained": ContainedButton,
    "outlined": OutlinedButton,
    "link": LinkButton
}

const getButtonStyle = (buttonType: ButtonType, color: Color): string => {
    // const buttonTypeToDefaultStyleMap = {
    //     "contained": {
    //         'teal': 'px-10 py-2.5 bg-teal-400',
    //         'black': 'px-10 py-2.5 bg-black',
    //         'mud': 'px-10 py-2.5 bg-amber-900'
    //     },
    //     "outlined": {
    //         'teal': 'px-10 py-2.5 bg-teal-400',
    //         'black': 'px-10 py-2.5 bg-black',
    //         'mud': 'px-10 py-2.5 bg-amber-900'
    //     }
    // }
    const buttonTypeStyleMap = {
        "contained": "font-semibold px-10 py-2.5 rounded-2xl",
        "outlined": "font-semibold px-10 py-2.5 border-2 border-solid rounded-2xl"
    }
    const buttonColorMap = {
        "contained": {
            "teal": "bg-teal-400",
            "black": "bg-black",
            "amber": "bg-amber-900"
        },
        "outlined": {
            "teal": "border-amber-900",
            "black": "border-black",
            "amber": "border-amber-900"
        }
    }

    const classNames = clsx([get(buttonTypeStyleMap, buttonType), get(buttonColorMap, `${buttonType}.${color}`)]);
    
    return classNames;
}
// export default React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(props, ref) {
//     const {
//         buttonType="contained",
//         color="teal",
//         children,
//         className,
//         onClick=() => {}
//     } = props;

//     const buttonDefaulStyle = getButtonStyle(buttonType, color);
    
//     return (
//         <button
//             ref={ref}
//             onClick={onClick} className={twMerge(buttonDefaulStyle, className)}
//         >
//             {children}
//         </button>
//     )   
// });

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ 
    buttonType="contained",
    color="teal",
    children,
    className,
    onClick=() => {} 
}, ref) => {
    const buttonDefaulStyle = getButtonStyle(buttonType, color);
    
    return (
        <button
            ref={ref}
            onClick={onClick} className={twMerge(buttonDefaulStyle, className)}
        >
            {children}
        </button>
    )   
})

export default Button