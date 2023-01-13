import React from 'react';
import { twMerge } from 'tailwind-merge';

export interface NavigationLayoutProps {
    children?: React.ReactNode
    logoComponent?: React.ReactNode
    className?:string
    logoContainerClassName?: string
    itemsContainerClassName?: string
}

const defaultLogoComponent = () => {
    return (
        <span className="font-bold text-3xl">
            _Prickle
        </span>
    )
}

const NavigationLayout = ({
    className,
    logoContainerClassName,
    itemsContainerClassName,
    children,
    logoComponent=defaultLogoComponent()
}: NavigationLayoutProps) => {
    return (
        <div className={twMerge("flex items-center w-full px-8 py-4", className)}>
            <div className={twMerge("mr-auto", logoContainerClassName)}>
                {logoComponent}
            </div>
            <ul className={twMerge("flex items-center space-x-12 ml-auto", itemsContainerClassName)}>
                {children}
            </ul>
        </div>
    )
}

export default NavigationLayout;