"use client";

import React, { useState } from "react";
import { recipes } from "@/utils/recipes";

// Define the type of a recipe
interface Recipe {
	id: number;
	emoji: string;
	title: string;
	description: string;
	ingredients: string[];
	steps: string[];
}

const RecipeInspiration = () => {
	const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

	return (
		<section className="py-20 bg-gray-50">
			<div className="max-w-7xl mx-auto px-6 lg:px-8">
				{/* Header */}
				<h1 className="text-5xl font-extrabold text-[#d52127] text-center mb-12">
					Get Recipe Inspiration
				</h1>

				{/* Recipe List */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{recipes.map((recipe) => (
						<div
							key={recipe.id}
							className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer p-6"
							onClick={() => setSelectedRecipe(recipe)}
						>
							<div className="text-6xl text-red-600 mb-4">{recipe.emoji}</div>
							<h2 className="text-2xl font-semibold text-[#d52127] mb-2">
								{recipe.title}
							</h2>
							<p className="text-gray-600">{recipe.description}</p>
						</div>
					))}
				</div>

				{/* Recipe Details Modal */}
				{selectedRecipe && (
					<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
						<div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-8 relative">
							{/* Close Button */}
							<button
								className="absolute top-4 right-4 text-gray-600 hover:text-[#d52127] text-2xl"
								onClick={() => setSelectedRecipe(null)}
							>
								&times;
							</button>

							{/* Recipe Details */}
							<h2 className="text-3xl font-bold text-[#d52127] mb-4">
								{selectedRecipe.emoji} {selectedRecipe.title}
							</h2>
							<p className="text-gray-600 mb-6">{selectedRecipe.description}</p>

							{/* Ingredients */}
							<h3 className="text-2xl font-semibold text-[#d52127] mb-2">
								Ingredients
							</h3>
							<ul className="list-disc list-inside mb-6">
								{selectedRecipe.ingredients.map((ingredient, index) => (
									<li key={index} className="text-gray-600">
										{ingredient}
									</li>
								))}
							</ul>

							{/* Steps */}
							<h3 className="text-2xl font-semibold text-[#d52127] mb-2">
								Steps
							</h3>
							<ol className="list-decimal list-inside">
								{selectedRecipe.steps.map((step, index) => (
									<li key={index} className="text-gray-600 mb-2">
										{step}
									</li>
								))}
							</ol>
						</div>
					</div>
				)}
			</div>
		</section>
	);
};

export default RecipeInspiration;
