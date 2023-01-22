import { signIn } from "next-auth/react";
import Button from "../../components/Button";
import LinkButton from "../../components/LinkButton";
import Image from 'next/image';
import HorizontalDivider from "../../components/HorizontalDivider";
import SigninForm from "../../components/form/SigninForm";
import NavBarCandidates from "../../components/navigation/NavBarCandidates";
import NavBarVistor from "../../components/navigation/NavBarVistor";

export default function Signin() {
    return (
        <div className={"flex flex-col bg-slate-50"}>
            <NavBarVistor NavigationLayoutProps={{ className: "absolute top-0 left-0 bg-white"}}/>
            <div className={"w-full h-screen flex items-center justify-center"}>
                <div className={"w-[661px] m-auto drop-shadow-md bg-white px-16"}>
                    <div className="flex flex-col items-center space-y-8 py-10">
                        <div className="flex flex-col items-center space-y-5">
                            <h3 className="font-bold text-2xl">
                                log in
                            </h3>
                            <h5 className="font text-lg">
                                Please select one of the following
                            </h5>
                        </div>
                        <div className="flex flex-col space-y-3 w-full">
                            <Button color="gray" buttonType="outlined" onClick={()=> signIn("google")}>
                                <div className="flex items-center justify-center space-x-3">
                                    <Image src="/auth/Google__G__Logo.svg" alt="google_log" height={25} width={25}/>
                                    <span>Login with Google</span>
                                </div>
                            </Button>
                            <Button color="gray" buttonType="outlined" onClick={()=> signIn("github")}>
                                <div className="flex items-center justify-center space-x-3">
                                    <Image src="/auth/github-mark.svg" alt="google_log" height={25} width={25}/>
                                    <span>Login with Github</span>
                                </div>
                            </Button>
                        </div>
                        <HorizontalDivider>
                            Or
                        </HorizontalDivider>
                        {/* <div className="flex space-x-6 justify-end items-center">
                            <LinkButton href="/">
                                Create an account now!
                            </LinkButton>
                            <Button>
                                Sign in
                            </Button>
                        </div> */}
                        <SigninForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

