import { signIn } from 'next-auth/react';
import React from 'react';
import { useBoundStore } from '../../lib/store';
import Button from '../Button';
import LinkButton from '../LinkButton';
import NavigationItem from './NavigationItem';
import NavigationLayout, { NavigationLayoutProps } from './NavigationLayout';

interface NavBarCandidatesProps {
    NavigationLayoutProps?: NavigationLayoutProps
}

const NavBarCandidates = ({
    NavigationLayoutProps={}
}: NavBarCandidatesProps) => {
    const tabSelected = useBoundStore((state) => state.tabSelected);
    const switchTab = useBoundStore((state) => state.switchTab);

    return (
        <NavigationLayout logoContainerClassName={"py-4"} className={"py-0"} itemsContainerClassName={"space-x-0"} {...NavigationLayoutProps}>
            <NavigationItem
                variant='tab'
                selected={tabSelected === 0}
            >
                <LinkButton href="/" onClick={() => switchTab(0)}>
                    Applicants
                </LinkButton>
            </NavigationItem>
            <NavigationItem
                variant='tab'
                selected={tabSelected === 1}
            >
                <LinkButton href="/" onClick={() => switchTab(1)}>
                    Interviews
                </LinkButton>
            </NavigationItem>
            <NavigationItem
                variant='tab'
                selected={tabSelected === 2}
            >
                <LinkButton href="/" onClick={() => switchTab(2)}>
                    Calendar
                </LinkButton>
            </NavigationItem>
            <NavigationItem
                variant='tab'
                selected={tabSelected === 3}
            >
                <LinkButton
                    href="/"
                    onClick={() => switchTab(3)}
                >
                    Invite
                </LinkButton>
            </NavigationItem>
            <NavigationItem
                variant='tab'
                selected={tabSelected === 4}
            >
                <LinkButton
                    href="/"
                    onClick={() => switchTab(4)}
                >
                    Profile
                </LinkButton>
            </NavigationItem>

        </NavigationLayout>
    )
}

export default NavBarCandidates