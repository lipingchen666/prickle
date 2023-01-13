import Button from "../../components/Button";
import LinkButton from "../../components/LinkButton";
import Image from 'next/image';
import HorizontalDivider from "../../components/HorizontalDivider";

export default function Signin() {
    return (
        <div className={"w-full h-screen flex items-center justify-center"}>
            <div className={"h-[768px] w-[661px] m-auto drop-shadow-md bg-white"}>
                <div className="p-4">
                    <div className="flex flex-col space-y-3">
                        <Button color="black" buttonType="outlined">
                            <div className="flex items-center justify-center space-x-3">
                                <Image src="/auth/Google__G__Logo.svg" alt="google_log" height={25} width={25}/>
                                <span>Login with Google</span>
                            </div>
                        </Button>
                        <Button color="black" buttonType="outlined">
                            <div className="flex items-center justify-center space-x-3">
                                <Image src="/auth/github-mark.svg" alt="google_log" height={25} width={25}/>
                                <span>Login with Github</span>
                            </div>
                        </Button>
                    </div>
                    <HorizontalDivider>
                        Or
                    </HorizontalDivider>
                    <div className="flex space-x-6 justify-end items-center">
                        <LinkButton href="/">
                            Create an account now!
                        </LinkButton>
                        <Button>
                            Sign in
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

