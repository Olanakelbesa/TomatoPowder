import React from "react";
import Image from "next/image";
import packaging from "@/public/images/about/packaging.jpg"

const AboutPage = () => {
	return (
		<div className="bg-white text-gray-800">
			{/* Header Section */}
			<header className="relative bg-red-500 text-white py-16 text-center">
				{/* <div className="absolute inset-0 z-0">
					<Image
						src="" // Replace with your actual image path
						alt="Fresh tomatoes"
						layout="fill"
						objectFit="cover"
						className="opacity-50"
					/>
				</div> */}
				<div className="relative z-10">
					<h1 className="text-4xl font-bold mb-4">Our Story</h1>
					<p className="max-w-3xl mx-auto text-lg">
						Our mission is to deliver high-quality, natural tomato powder to
						households and businesses worldwide. Sourced from trusted local
						farms, our products are crafted with care and commitment to quality.
						Whether you&apos;re a home cook or a chef, we&apos;re here to make your meals
						healthier and tastier.
					</p>
				</div>
			</header>

			{/* Why Choose Us Section */}
			<section className="py-16 px-4 sm:px-8 md:px-16">
				<h2 className="text-3xl font-bold text-center mb-8">Why Choose Us?</h2>
				<div className="max-w-5xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
					{/* Card 1 */}
					<div className="bg-[#fef8f8] p-6 rounded-lg shadow hover:shadow-lg transition">
						<Image
							src="/images/about/farmer1.jpg" // Replace with your actual image path
							alt="Locally sourced ingredients"
							width={300}
							height={200}
							className="rounded-md mb-4"
						/>
						<h3 className="text-xl font-semibold text-red-500 mb-4">
							Locally Sourced Ingredients
						</h3>
						<p>
							We partner with local farmers who share our passion for quality
							and sustainability. Each tomato is handpicked at peak ripeness to
							ensure you get the freshest and most flavorful product.
						</p>
					</div>

					{/* Card 2 */}
					<div className="bg-[#fef8f8] p-6 rounded-lg shadow hover:shadow-lg transition">
						<Image
							src={packaging} // Replace with your actual image path
							alt="Eco-friendly packaging"
							width={300}
							height={200}
							className="rounded-md mb-4"
						/>
						<h3 className="text-xl font-semibold text-red-500 mb-4">
							Eco-Friendly Packaging
						</h3>
						<p>
							Caring for the environment is at the core of our values. Our
							packaging is designed to be sustainable, biodegradable, and
							recyclable to reduce our carbon footprint while delivering premium
							products.
						</p>
					</div>

					{/* Card 3 */}
					<div className="bg-[#fef8f8] p-6 rounded-lg shadow hover:shadow-lg transition">
						<Image
							src="/images/about/download.jpg" // Replace with your actual image path
							alt="Trusted by thousands of customers"
							width={300}
							height={200}
							className="rounded-md mb-4"
						/>
						<h3 className="text-xl font-semibold text-red-500 mb-4">
							Trusted by Thousands of Customers
						</h3>
						<p>
							With countless satisfied customers worldwide, our tomato powder is
							a staple for those seeking a convenient, natural, and delicious
							ingredient for their meals.
						</p>
					</div>
				</div>
			</section>

			{/* Commitment Section */}
			<section className="bg-gray-50 py-16 px-4 sm:px-8 md:px-16">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-3xl font-bold text-red-500 mb-8">
						Our Commitment
					</h2>
					<p className="text-lg">
						We believe in creating a positive impact through everything we do.
						From maintaining the highest standards of hygiene and quality to
						offering exceptional customer service, we’re committed to exceeding
						your expectations. Thank you for being part of our journey!
					</p>
				</div>
			</section>
		</div>
	);
};

export default AboutPage;
