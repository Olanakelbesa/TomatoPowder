"use client";

import Link from "next/link";
import React from "react";

const HowItWorks = () => {
	return (
		<section className="py-16 bg-[#fef8f8]">
			<div className="max-w-6xl mx-auto px-6 lg:px-8">
				{/* Header */}
				<h2 className="text-4xl font-extrabold text-[#d52127] 0 text-center mb-12">
					How to Order
				</h2>

				{/* Steps */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
					{/* Step 1 */}
					<div className="flex flex-col items-center text-center">
						<div className="relative w-20 h-20 flex items-center justify-center rounded-full bg-red-500 text-white text-3xl font-bold shadow-lg">
							1
							<div className="absolute  rounded-full bg-red-500 opacity-50"></div>
						</div>
						<h3 className="mt-6 text-xl font-semibold text-red-600">
							Choose Your Product
						</h3>
						<p className="mt-2 text-gray-600">
							Browse our curated collection of premium tomato powder.
						</p>
					</div>

					{/* Step 2 */}
					<div className="flex flex-col items-center text-center">
						<div className="relative w-20 h-20 flex items-center justify-center rounded-full bg-red-500 text-white text-3xl font-bold shadow-lg">
							2
							<div className="absolute rounded-full bg-red-500 opacity-50"></div>
						</div>
						<h3 className="mt-6 text-xl font-semibold text-red-600">
							Place Your Order
						</h3>
						<p className="mt-2 text-gray-600">
							Select your desired quantity and checkout securely.
						</p>
					</div>

					{/* Step 3 */}
					<div className="flex flex-col items-center text-center">
						<div className="relative w-20 h-20 flex items-center justify-center rounded-full bg-red-500 text-white text-3xl font-bold shadow-lg">
							3
							<div className="absolute  rounded-full bg-red-500 opacity-50"></div>
						</div>
						<h3 className="mt-6 text-xl font-semibold text-red-600">
							Enjoy Your Meals
						</h3>
						<p className="mt-2 text-gray-600">
							Receive your order at your doorstep and start cooking delicious
							meals.
						</p>
					</div>
				</div>

				{/* CTA Button */}
				<div className="mt-12 text-center">
					<Link href={"./products"}>
						<button className="px-8 py-3 bg-red-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-red-700 transition-transform transform hover:scale-105">
							Start Shopping Now
						</button>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default HowItWorks;
