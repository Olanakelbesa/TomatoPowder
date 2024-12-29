"use client";

import Link from "next/link";
import React from "react";

const RecipesIdeas = () => {
	return (
		<section className="py-16 bg-white">
			<div className="max-w-6xl mx-auto px-6 lg:px-8">
				{/* Header */}
				<h2 className="text-4xl font-extrabold text-[#d52127]  text-center mb-12">
					Delicious Recipes Featuring Tomato Powder
				</h2>

				{/* Recipe Examples */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{/* Recipe 1 */}
					<div className="flex flex-col items-center bg-[#fef8f8] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
						<div className="text-5xl">🍕</div>
						<h3 className="mt-4 text-2xl font-bold text-[#d52127]  text-center">
							Tomato Powder Pizza Sauce
						</h3>
						<p className="mt-2 text-gray-600 text-center">
							Make your pizzas even better with a flavorful, tangy tomato
							powder-based sauce.
						</p>
					</div>

					{/* Recipe 2 */}
					<div className="flex flex-col items-center bg-[#fef8f8] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
						<div className="text-5xl">🥘</div>
						<h3 className="mt-4 text-2xl font-bold text-[#d52127]  text-center">
							Hearty Tomato Stew
						</h3>
						<p className="mt-2 text-gray-600 text-center">
							A rich and hearty stew infused with the natural flavors of tomato
							powder.
						</p>
					</div>

					{/* Recipe 3 */}
					<div className="flex flex-col items-center bg-[#fef8f8] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
						<div className="text-5xl">🍔</div>
						<h3 className="mt-4 text-2xl font-bold text-[#d52127]  text-center">
							Spicy Tomato Seasoning for Burgers
						</h3>
						<p className="mt-2 text-gray-600 text-center">
							Add a smoky, spicy twist to your burgers with our unique tomato
							seasoning blend.
						</p>
					</div>
				</div>

				{/* CTA Button */}
				<div className="mt-12 text-center">
                    <Link href={'./recipes'}>
					<button className="px-8 py-3 bg-red-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-red-700 transition-transform transform hover:scale-105">
						Get Recipe Inspiration
					</button>
                    </Link>
				</div>
			</div>
		</section>
	);
};

export default RecipesIdeas;
