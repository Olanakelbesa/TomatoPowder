import Image from "next/image";
import React from "react";
import logo from "@/public/images/logo1.png";
import Link from "next/link";

function Footer() {
	return (
		<div>
			<div className="bg-[#fef8f8] flex justify-evenly h-[30vh] flex-wrap">
				{/* Logo and copyright section */}
				<div className="flex flex-col justify-center text-gray-500 text-xs sm:text-sm md:text-base">
					<Image src={logo} alt="logo" width={100} height={100} className="" />
					<div className="py-4">
						<p>&copy; 2024 TomatoPowder, Inc.</p>
						<p>All rights reserved.</p>
					</div>
				</div>

				{/* Company section */}
				<div className="flex flex-col gap-2 py-7 text-gray-500 text-xs sm:text-sm md:text-base">
					<p className="font-bold text-xs sm:text-sm md:text-base">Company</p>
					<Link href={"./"} className="text-xs sm:text-sm md:text-base">
						About Us
					</Link>
					<Link href={"./"} className="text-xs sm:text-sm md:text-base">
						Our Mission
					</Link>
					<Link href={"./"} className="text-xs sm:text-sm md:text-base">
						News
					</Link>
					<Link href={"./"} className="text-xs sm:text-sm md:text-base">
						Careers
					</Link>
				</div>

				{/* Resources section */}
				<div className="flex flex-col gap-2 py-7 text-gray-500 text-xs sm:text-sm md:text-base">
					<p className="font-bold text-xs sm:text-sm md:text-base">Resources</p>
					<Link href={"./"} className="text-xs sm:text-sm md:text-base">
						FAQs
					</Link>
					<Link href={"./"} className="text-xs sm:text-sm md:text-base">
						Guides
					</Link>
					<Link href={"./"} className="text-xs sm:text-sm md:text-base">
						Recipes
					</Link>
					<Link href={"./"} className="text-xs sm:text-sm md:text-base">
						Support
					</Link>
				</div>

				{/* Connect section */}
				<div className="flex flex-col gap-2 py-7 text-gray-500 text-xs sm:text-sm md:text-base">
					<p className="font-bold text-xs sm:text-sm md:text-base">Connect</p>
					<Link href={"./"} className="text-xs sm:text-sm md:text-base">
						Instagram
					</Link>
					<Link href={"./"} className="text-xs sm:text-sm md:text-base">
						Facebook
					</Link>
					<Link href={"./"} className="text-xs sm:text-sm md:text-base">
						Twitter
					</Link>
					<Link href={"./"} className="text-xs sm:text-sm md:text-base">
						Pinterest
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Footer;
