import React from "react";
import { features } from "@/utils/features";
import Image from "next/image";

function Feature() {
	return (
		<section className="py-12 px-6 md:px-20 bg-gray-100">
			<h2 className="text-3xl md:text-4xl font-bold text-center text-[#d52127] mb-8">
				Why Choose Our Tomato Powder?
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{features.map((feature, index) => (
					<div
						key={index}
						className="flex flex-col items-center text-center bg-white shadow-md rounded-lg p-6"
					>
						<Image
							src={feature.image}
							alt={feature.title}
							width={100}
							height={100}
							className="rounded-full mb-4"
						/>
						<h3 className="text-xl font-semibold mb-2 text-[#d52127]">
							{feature.title}
						</h3>
						<p className="text-gray-600">{feature.description}</p>
					</div>
				))}
			</div>
		</section>
	);
}

export default Feature;
