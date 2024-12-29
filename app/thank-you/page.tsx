"use client";

import React from "react";

const ThankYouPage = () => {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 px-6 py-12">
			{/* Main content container */}
			<div className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-lg text-center">
				<h1 className="text-5xl font-extrabold text-red-700 mb-6">
					Thank You for Your Purchase!
				</h1>
				<p className="text-lg text-gray-600 mb-6">
					Your order has been successfully placed. We will process your payment
					and ship your items shortly.
				</p>

				{/* Call to action */}
				<div className="mt-8">
					<p className="text-lg text-gray-800 mb-4">
						While you wait, check out our latest products!
					</p>
					<a
						href="./products"
						className="inline-block px-8 py-3 text-lg font-semibold text-white bg-red-600 rounded-md shadow-md hover:bg-red-700 transition-colors duration-300"
					>
						Go to Shop
					</a>
				</div>
			</div>

			{/* Footer */}
			<div className="mt-12 text-center text-gray-500">
				<p>
					&copy; {new Date().getFullYear()} Your Company. All rights reserved.
				</p>
			</div>
		</div>
	);
};

export default ThankYouPage;
