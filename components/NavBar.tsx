import Image from "next/image";
import React from "react";
import logo from "@/public/images/logo1.png";
import Link from "next/link";

function NavBar() {
	return (
		<div className="flex flex-wrap items-center justify-between py-2 px-6 md:px-20 bg-[#dfe3e8] shadow-md ">
			{/* Logo Section */}
			<Link href={"/"} className="flex gap-2 items-center">
				<Image src={logo} alt="logo" width={40} height={40} />
				<p className="text-lg md:text-xl font-bold">
					Tomato<span className="text-[#d52127]">Powder</span>
				</p>
			</Link>

			{/* Navigation Links */}
			<div className="hidden md:flex gap-6 items-center text-gray-500 font-semibold">
				<Link href={"/"} className="hover:text-[#d52127]">
					Home
				</Link>
				<Link href={"/about"} className="hover:text-[#d52127]">
					About
				</Link>
				<Link href={"/products"} className="hover:text-[#d52127]">
					Products
				</Link>
				<Link href={"/contact"} className="hover:text-[#d52127]">
					Contact
				</Link>
			</div>

			{/* Buttons */}
			<div className="flex gap-2 md:gap-4 mt-2 md:mt-0">
				<button className="bg-[#d52127] text-white px-3 py-1 rounded-xl flex items-center font-semibold text-sm md:text-base">
					Login
				</button>
				<button className="border-2 border-solid border-[#d52127] rounded-xl py-1 px-3 text-[#d52127] flex items-center font-semibold text-sm md:text-base">
					SignUp
				</button>
			</div>
		</div>
	);
}

export default NavBar;
