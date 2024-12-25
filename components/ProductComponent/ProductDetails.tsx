"use client"; // Marks this file as a Client Component

import React from "react";
import { useRouter } from "next/navigation"; // Client-side navigation
import { useDispatch } from "react-redux"; // Redux dispatch
import { addToCart } from "@/redux/features/cartSlice";
import { products } from "@/utils/products";
import Image from "next/image";
import { Product } from "@/types";

const ProductDetail = ({ params }: { params: { id: string } }) => {
	const { id } = params; // Extract product ID from route params
	const dispatch = useDispatch();
	const router = useRouter();

	// Find the product matching the ID
	const product: Product | undefined = products.find(
		(prod) => prod.id.toString() === id
	);

	if (!product) {
		return <p>Product not found</p>;
	}

	// Add product to cart and navigate to shop page
	const handleAddToCart = () => {
		dispatch(addToCart(product));
		router.push("/shop"); // Navigate to the shop page
	};

	return (
		<div className="px-8 py-12">
			<div className="flex flex-col md:flex-row">
				{/* Product Image */}
				<div className="w-full md:w-1/2 mb-6 md:mb-0">
					<Image
						src={product.image}
						alt={product.title}
						className="w-full h-96 object-cover rounded-md"
						width={400}
						height={400}
					/>
				</div>

				{/* Product Details */}
				<div className="w-full md:w-1/2 md:pl-8">
					<h1 className="text-4xl font-bold text-red-700 mb-4">
						{product.title}
					</h1>
					<p className="text-lg text-gray-700">{product.price}</p>
					<p className="text-gray-500 text-sm mt-4">{product.description}</p>
					<button
						className="mt-6 px-6 py-2 bg-red-600 text-white rounded-md shadow-md hover:bg-red-700"
						onClick={handleAddToCart}
					>
						Add to Cart
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductDetail;
