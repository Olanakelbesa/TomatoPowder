"use client";

import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const ShopPage = () => {
	const cart = useSelector((state: RootState) => state.cart.items);

	return (
		<div className="px-8 py-12">
			<h1 className="text-4xl font-bold text-center mb-8">Your Cart</h1>
			{cart.length === 0 ? (
				<p>Your cart is empty.</p>
			) : (
				<div className="space-y-4">
					{cart.map((product, index) => (
						<div key={index} className="border-b pb-4">
							<h3 className="text-lg font-medium">{product.title}</h3>
							<p className="text-gray-700">{product.price}</p>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default ShopPage;
