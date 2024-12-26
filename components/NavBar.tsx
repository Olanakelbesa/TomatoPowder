"use client";

import React, { useState } from "react";
import Image from "next/image";
import logo from "@/public/images/logo1.png";
import Link from "next/link";

function NavBar() {
	// State to manage mobile menu visibility
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

	return (
		<div className="flex flex-wrap items-center justify-between py-3 px-6 md:px-20 bg-[#fef8f8] shadow-md">
			{/* Logo Section */}
			<Link href={"/"} className="flex gap-2 items-center">
				<Image src={logo} alt="logo" width={40} height={40} />
				<p className="text-lg md:text-xl font-bold">
					Tomato<span className="text-[#d52127]">Powder</span>
				</p>
			</Link>

			{/* Hamburger Icon */}
			<div className="md:hidden">
				<button
					className="text-gray-500 hover:text-[#d52127] focus:outline-none"
					onClick={toggleMenu}
				>
					{/* Hamburger Menu Icon */}
					<svg
						className="w-6 h-6"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
			</div>

			{/* Navigation Links */}
			<div
				className={`${
					isMenuOpen ? "block" : "hidden"
				} w-full md:flex md:items-center md:w-auto`}
			>
				<nav className="flex flex-col md:flex-row gap-4 md:gap-6 items-center mt-4 md:mt-0 text-gray-500 font-semibold">
					<Link href={"/"} className="hover:text-[#d52127]">
						Home
					</Link>
					<Link href={"/about_us"} className="hover:text-[#d52127]">
						About
					</Link>
					<Link href={"/products"} className="hover:text-[#d52127]">
						Products
					</Link>
					<Link href={"/contact"} className="hover:text-[#d52127]">
						Contact
					</Link>
					<div className="flex gap-2 md:gap-4 mt-2 md:mt-0">
						<Link href={"/shop"}>
							<button className="border-2 border-solid border-[#d52127] rounded-3xl py-1 px-4 text-[#d52127] hover:text-red-800 hover:border-red-800 flex items-center font-semibold text-sm md:text-base">
								Shop
							</button>
						</Link>
					</div>
				</nav>
			</div>
		</div>
	);
}

export default NavBar;
