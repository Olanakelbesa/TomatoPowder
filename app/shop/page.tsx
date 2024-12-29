"use client";

import React, { useState } from "react";
import { useCart } from "@/context/cartContext"; // Assuming you have a cart context to manage the cart state
import Link from "next/link";

const ShopPage = () => {
	const { cart, removeFromCart } = useCart(); // Add removeFromCart function
	const [isConfirming, setIsConfirming] = useState<string | null>(null); // Track which product is being confirmed

	const handleDeleteClick = (id: string) => {
		setIsConfirming(id); // Show confirmation dialog for this item
	};

	const confirmDelete = (id: string) => {
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
				<p className="text-center text-lg text-gray-500">Your cart is empty.</p>
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

			{/* Checkout Button */}
			<div className="mt-8 text-center">
				<Link href={"./checkout"}>
					<button
						className="px-8 py-3 bg-red-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-red-700 transition-transform transform hover:scale-105"
						disabled={cart.length === 0} // Disable button if cart is empty
					>
						Proceed to Checkout
					</button>
				</Link>
			</div>
		</div>
	);
};

export default ShopPage;
