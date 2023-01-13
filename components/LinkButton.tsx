import Link, { LinkProps } from 'next/link';
import { twMerge } from 'tailwind-merge';

interface LinkButtonProps extends LinkProps {
    className?: string
    children: React.ReactNode
}

const LinkButton = ({
    children,
    className,
    ...rest
}: LinkButtonProps) => {
    return (
        <Link className={twMerge("font-semibold", className)} {...rest}>
            {children}
        </Link>
    )

}

export default LinkButton;