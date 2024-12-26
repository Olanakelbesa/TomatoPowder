"use client";

import React, { useState } from "react";
import { useCart } from "@/context/cartContext";

const ShopPage = () => {
	const { cart, removeFromCart } = useCart(); // Add removeFromCart function
	const [isConfirming, setIsConfirming] = useState<string | null>(null); // Track which product is being confirmed (use string if index is string)

	const handleDeleteClick = (id: string) => {
		// Pass the id as string
		setIsConfirming(id); // Show confirmation dialog for this item
	};

	const confirmDelete = (id: string) => {
		// Use the id as string
		removeFromCart(id); // Remove the item from the cart
		setIsConfirming(null); // Reset confirmation state
	};

	const cancelDelete = () => {
		setIsConfirming(null); // Reset confirmation state
	};

	return (
		<div className="px-8 py-12">
			<h1 className="text-4xl font-bold text-center mb-8">Your Cart</h1>
			{cart.length === 0 ? (
				<p>Your cart is empty.</p>
			) : (
				<div className="space-y-4">
					{cart.map((product) => (
						<div
							key={product.id} // Use product id as the key
							className="border-b pb-4 flex justify-between items-center"
						>
							<div>
								<h3 className="text-lg font-medium">{product.title}</h3>
								<p className="text-gray-700">{product.price}</p>
							</div>
							<div>
								{isConfirming === product.id ? ( // Compare using the product id
									<div className="flex space-x-4">
										<button
											className="px-4 py-2 bg-red-600 text-white rounded-md"
											onClick={() => confirmDelete(product.id)} // Pass the product id
										>
											Confirm
										</button>
										<button
											className="px-4 py-2 bg-gray-300 rounded-md"
											onClick={cancelDelete}
										>
											Cancel
										</button>
									</div>
								) : (
									<button
										className="px-4 py-2 bg-red-500 text-white rounded-md"
										onClick={() => handleDeleteClick(product.id)} // Pass the product id
									>
										Delete
									</button>
								)}
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default ShopPage;
