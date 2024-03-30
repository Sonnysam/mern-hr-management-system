"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const logo = require("../../public/logo.png");
const Login = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<any>("");

    const handleSignin = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        if (!email || !password) {
            return;
        }
    }

    return (
        <div className="flex min-h-full bg-slate-800  flex-1 flex-col justify-center px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <div className="my-2 flex justify-center">
                    <Link href="/">
                        <Image src={logo} alt="logo" width={100} height={100} />
                    </Link>
                </div>
                <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-white">
                    Sign in to your HR <span className='text-blue-600'>Portal</span>
                </h2>
            </div>

            <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm ">
                <form className="space-y-6" action="#" method="POST">
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium leading-6 text-white"
                        >
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                placeholder="Enter email address"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                autoComplete="email"
                                required
                                className="block w-full rounded-md border-0 py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium leading-6 text-white"
                            >
                                Password
                            </label>
                            <div className="text-sm">
                                <a
                                    href="#"
                                    className="font-semibold text-blue-600 hover:text-blue-500"
                                >
                                    Forgot password?
                                </a>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                autoComplete="current-password"
                                required
                                className="block w-full rounded-md border-0 py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            onClick={handleSignin}
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                        >
                            Sign in
                        </button>
                    </div>
                </form>

                <p className="mt-5 text-center text-sm text-white">
                    Go back{" "}
                    <a
                        href="/"
                        className="font-semibold leading-6 text-blue-600 hover:text-blue-500"
                    >
                        Home
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Login;
