'use client'
import React, { useState } from "react";
import {navigate} from "@/app/actions";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const body = await response.json();

        if (body.token) {
            await navigate("dashboard");
        } else {
            console.log(body.error);
        }
    }

    return (
        <form onSubmit={onSubmit} className="flex space-y-8 flex-col justify-center items-center w-[20rem]">
            <input
                className="rounded-xl h-12 w-[20rem] border-2 border-[#DBDADA] bg-gradient-to-r from-[#5C93FA] from-[3%] to-white to-[3%] shadow-all-sides pl-8 placeholder:font-[400] placeholder:text-[#DBDADA] focus:outline-[#5C93FA]"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <input
                className="rounded-xl h-12 w-[20rem] border-2 border-[#DBDADA] bg-gradient-to-r from-[#5C93FA] from-[3%] to-white to-[3%] shadow-all-sides pl-8 placeholder:font-[400] placeholder:text-[#DBDADA] focus:outline-[#5C93FA]"
                placeholder="Password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <button
                className="rounded-xl h-12 w-2/6 bg-[#5C92F7] shadow-all-sides font-medium text-white transition-all hover:bg-[#4367B7] active:bg-[#314F8E]">Login
            </button>
        </form>
    )
}