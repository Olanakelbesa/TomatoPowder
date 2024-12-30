"use client";

import React, { useState } from "react";
import { useCart } from "@/context/cartContext";
import { useRouter } from "next/navigation";

const CheckoutPage = () => {
	const { cart } = useCart();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [address, setAddress] = useState("");
	const [paymentMethod, setPaymentMethod] = useState("credit_card");
	const router = useRouter();

	const handleFormSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		// Simulate the checkout process
		console.log("Checkout submitted:", { name, email, address, paymentMethod });

		// After successful checkout, redirect the user
		router.push("/thank-you"); // Redirect to a thank-you page or similar
	};

	return (
		<div className="max-w-3xl mx-auto p-8 bg-[#fef8f8] shadow-lg rounded-lg my-10">
			<h1 className="text-4xl font-bold text-center text-[#d52127] mb-8">
				Checkout
			</h1>

			{/* Cart Review */}
			<div className="space-y-6 mb-8">
				<h2 className="text-2xl font-semibold text-[#d52127]">Cart Review</h2>
				{cart.length === 0 ? (
					<p className="text-gray-600">Your cart is empty.</p>
				) : (
					<div>
						{cart.map((product) => (
							<div
								key={product.id}
								className="flex justify-between items-center border-b py-3"
							>
								<div>
									<h3 className="text-lg font-medium text-[#d52127]">
										{product.title}
									</h3>
									<p className="text-gray-600">{product.price}</p>
								</div>
							</div>
						))}
					</div>
				)}
			</div>

			{/* Shipping & Payment Form */}
			<form onSubmit={handleFormSubmit} className="space-y-6">
				<div>
					<label className="block text-sm font-medium text-gray-700">
						Full Name
					</label>
					<input
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
						required
						className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500"
					/>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700">
						Email Address
					</label>
					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
						className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500"
					/>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700">
						Shipping Address
					</label>
					<textarea
						value={address}
						onChange={(e) => setAddress(e.target.value)}
						required
						className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500"
						rows={4}
					/>
				</div>

				{/* Payment Method Selection */}
				<div>
					<label className="block text-sm font-medium text-gray-700">
						Payment Method
					</label>
					<select
						value={paymentMethod}
						onChange={(e) => setPaymentMethod(e.target.value)}
						className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500"
					>
						<option value="credit_card">Credit Card</option>
						<option value="paypal">PayPal</option>
					</select>
				</div>

				{/* Submit Button */}
				<div className="mt-6">
					<button
						type="submit"
						className="w-full py-3 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition duration-300"
						disabled={cart.length === 0}
					>
						Complete Purchase
					</button>
				</div>
			</form>
		</div>
	);
};

export default CheckoutPage;
