import clsx from 'clsx';
import get from 'lodash/get';
import React from 'react';
import { twMerge } from 'tailwind-merge';

type variantType = "tab" | "regular";

interface BaseNavigationItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
    variant?: variantType
}

interface TabNavigationItemProps extends  BaseNavigationItemProps {
    selected?: boolean
    selectedClassName?: string
    notSelectedClassName?: string
}

interface RegularNavigationItemProps extends BaseNavigationItemProps {

}

type NavigationItemProps = TabNavigationItemProps & RegularNavigationItemProps

const NavigationItem = ({
    className,
    variant="regular",
    selected,
    children,
    ...rest
}: NavigationItemProps) => {
    if (variant === "tab") {
        return (
            <li className={twMerge("px-5 py-6 relative", className)} {...rest}>
                {selected && <div className="w-full h-1 absolute left-0 top-0 bg-blue-400"></div>}
                {children}
            </li>
        )
    }

    return (
        <li className={twMerge('', className)} {...rest}>
            {children}
        </li>
    )
}

export default NavigationItem