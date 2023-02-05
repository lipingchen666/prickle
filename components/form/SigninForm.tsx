import { signIn } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import Button from "../Button";
import LinkButton from "../LinkButton";
import CheckboxInput from "./input/CheckboxInput";
import TextInput from "./input/TextInput";

interface SigninFormProps {
    className?: string
}
const SigninForm = ({
    className=""
}: SigninFormProps) => {
    const { register, handleSubmit, watch, formState: { errors }, setError } = useForm({
        mode: "onBlur"
    });

    console.log("error", errors);
    const onSubmit = async data => { 
        console.log(data);
        const res = await signIn('credentials', { email: data.email, password: data.password, redirect: false });
        if (res?.status === 401) {
            if (res.error === "wrong email") {
                setError("email", {
                    type: "server",
                    message: 'wrong email',
                })
            }
            else if (res.error === "wrong password") {
                setError("password", {
                    type: "server",
                    message: 'wrong password',
                })
            }
        }
        console.log("res", res);
    } ;

    return (
        <form className={twMerge("w-full", className)} onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col space-y-7">
                <TextInput type="email" label={"Email"} required {...register("email", { required: "This field is required" })} error={!!errors.email} errorMessage={typeof errors.email?.message === "string" ? errors.email?.message : "" } />
                <TextInput type="password" label={"Password"} required {...register("password", { required: "This field is required" })} error={!!errors.password} errorMessage={typeof errors.password?.message === "string" ? errors.password?.message : "" } />
            </div>
            <div className="flex mt-7">
                <CheckboxInput {...register("rememberMe")} label={"Remember Me"}/>
                <LinkButton href="/" className="ml-auto font-normal">
                    <span className="hover:underline">Forgot your password?</span>
                </LinkButton>
            </div>
            <div className="flex space-x-6 justify-end items-center mt-10">
                <LinkButton href="/">
                    Create an account now!
                </LinkButton>
                <Button type="submit">
                    Sign in
                </Button>
            </div>
        </form>
    )
}

export default SigninForm;