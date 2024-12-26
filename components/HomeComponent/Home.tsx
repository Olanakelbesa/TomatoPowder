import React from "react";
import banner from "@/public/images/banner3.png";
import TestimonialCarousel from "./Testimonials";
import Feature from "./Feature";
import Link from "next/link";

function Home() {
	return (
		<div>
			<div
				className="flex flex-col md:flex-row h-screen bg-cover bg-center bg-no-repeat"
				style={{ backgroundImage: `url(${banner.src})` }}
			>
				{/* Text Section */}
				<div className="flex flex-col justify-center items-start px-8 md:px-16 lg:px-24 w-full md:w-1/2  ">
					<h1 className="text-4xl md:text-6xl font-bold text-red-700 mb-4">
						Fresh, Pure, and Versatile Tomato Powder Delivered to Your Door!
					</h1>
					<p className="text-lg md:text-xl text-gray-700 mb-6">
						Transform your meals with the rich flavor of 100% natural tomato
						powder. Perfect for cooking, seasoning, and more!
					</p>
					<div className="flex space-x-4">
						<Link href={"./products"}>
							<button className="px-6 py-3 bg-red-600 text-white rounded-md shadow-md hover:bg-red-700">
								Shop Now
							</button>
						</Link>
						<Link href={"./about_us"}>
							<button className="px-6 py-3 bg-gray-200 text-gray-700 rounded-md shadow-md hover:bg-gray-300">
								Learn More
							</button>
						</Link>
					</div>
				</div>
			</div>
			<Feature />
			<TestimonialCarousel />
		</div>
	);
}

export default Home;
