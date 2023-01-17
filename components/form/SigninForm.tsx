import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import Button from "../Button";
import LinkButton from "../LinkButton";
import CheckboxInput from "./input/ChekboxInput";
import TextInput from "./input/TextInput";

interface SigninFormProps {
    className?: string
}
const SigninForm = ({
    className=""
}: SigninFormProps) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        mode: "onBlur"
    });
    const onSubmit = data => console.log(data);

    return (
        <form className={twMerge("w-full", className)} onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col space-y-7">
                <TextInput type="email" label={"Email"} required {...register("email", { required: true })} error={!!errors.email} />
                <TextInput type="password" label={"Password"} required {...register("password", { required: true })} error={!!errors.password} />
                {/* <div className="flex flex-col">
                    <div className={"flex items-center"}>
                        <label>Email&#42;</label>
                        <input type="email" className="p-2 h-9 border-1 border-gray-500 w-9/12 ml-auto" {...register("email", { required: true })} />
                    </div>
                    <span className="w-9/12 ml-auto text-red-600 text-sm">This field is required</span>
                </div>
                {errors.email && <span>This field is required</span>}
                <div className={"flex items-center"}>
                    <label>Password&#42;</label>
                    <input className={"h-9 p-2 border-1 border-gray-500 w-9/12 ml-auto"} type="password" {...register("password", { required: true })} />
                </div>
                {errors.password && <span>This field is required</span>} */}
            </div>
            <div className="flex mt-7">
                <CheckboxInput {...register("rememberMe")} label={"Remember Me"}/>
                {/* <div className="mr-auto items-center space-x-2.5">
                    <input {...register("checkbox")} type="checkbox" value="A" />
                    <label>Remember Me</label>
                </div> */}
                {/* <Link href="/">
                    Forgot your password?
                </Link> */}
            
                <LinkButton href="/" className="ml-auto font-normal">
                    <span className="hover:underline">Forgot your password?</span>
                </LinkButton>
            </div>
            <div className="flex space-x-6 justify-end items-center mt-10">
                <LinkButton href="/">
                    Create an account now!
                </LinkButton>
                <Button>
                    Sign in
                </Button>
            </div>
        </form>
    )
}

export default SigninForm;