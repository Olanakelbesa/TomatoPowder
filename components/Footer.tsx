import Image from "next/image";
import React from "react";
import logo from "@/public/images/logo1.png";
import Link from "next/link";

function Footer() {
	return (
		<div>
			<div className="bg-[#dfe3e8] flex justify-evenly h-[30vh]">
				<div className="flex flex-col justify-center text-gray-500 text-sm ">
					<Image
						src={logo}
						alt="logo"
						width={100}
						height={100}
						className=""
					/>
					<div className="py-4">
						<p>&copy; 2024 TomatoPowder, Inc.</p>
						<p>All rights reserved.</p>
					</div>
				</div>
				<div className="flex flex-col gap-2 py-7 text-gray-500 text-sm">
					<p className="font-bold text-base">Company</p>
					<Link href={"./"}>About Us</Link>
					<Link href={"./"}>Our Mission</Link>
					<Link href={"./"}>News</Link>
					<Link href={"./"}>Careers</Link>
				</div>
				<div className="flex flex-col gap-2 py-7 text-gray-500 text-sm">
					<p className="font-bold text-base">Resources</p>
					<Link href={"./"}>FAQs</Link>
					<Link href={"./"}>Guides</Link>
					<Link href={"./"}>Recipes</Link>
					<Link href={"./"}>Support</Link>
				</div>
				<div className="flex flex-col gap-2 py-7 text-gray-500 text-sm">
					<p className="font-bold text-base">Connect</p>
					<Link href={"./"}>Instagram</Link>
					<Link href={"./"}>Facebook</Link>
					<Link href={"./"}>Twitter</Link>
					<Link href={"./"}>Pinterest</Link>
				</div>
			</div>
		</div>
	);
}

export default Footer;
