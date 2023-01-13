import React from 'react';
import { signIn } from "next-auth/react"
import Button from '../Button';
import LinkButton from '../LinkButton';
import NavigationItem from './NavigationItem';
import NavigationLayout, { NavigationLayoutProps } from './NavigationLayout';


interface NavBarVistorProps {
    NavigationLayoutProps?: NavigationLayoutProps

}
const NavBarVistor = ({
    NavigationLayoutProps={},
}: NavBarVistorProps) => {
    return (
        <NavigationLayout {...NavigationLayoutProps}>
            <NavigationItem
                variant='regular'
            >
                <LinkButton href="/">
                    Hire Talents
                </LinkButton>
            </NavigationItem>
            <NavigationItem
                variant='regular'
            >
                <LinkButton href="/">
                    Find Jobs for us
                </LinkButton>
            </NavigationItem>
            <NavigationItem
                variant='regular'
            >
                <LinkButton href="/">
                    Sign in
                </LinkButton>
            </NavigationItem>
            <NavigationItem
                variant='regular'
            >
                <Button
                    onClick={() => signIn()}
                >
                    Get Started
                </Button>
            </NavigationItem>

        </NavigationLayout>
    )
}

export default NavBarVistor;