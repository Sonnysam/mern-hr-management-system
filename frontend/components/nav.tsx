import React from "react";
import Image from "next/image";
import Link from "next/link";

const logo = require("../public/logo.png");
const Nav = () => {
    return (
        <div className="relative font-mono">
            <nav className="flex justify-between items-center w-full px-4 sm:px-8">
                <Link href="/">
                    <Image src={logo} alt="logo" width={100} height={100} />
                </Link>

                <div>
                    <ul className="flex items-center space-x-4">
                        <li>

                            <a href="/about" className="text-black text-2xl hover:text-blue-400">About</a>

                        </li>
                        <li
                            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:text-white"
                        >
                            <a href="/login" className="text-white text-2xl hover:text-white">Login</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Nav;
