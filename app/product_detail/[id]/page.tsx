'use client'

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/cartContext";
import { products } from "@/utils/products";
import Image from "next/image";
import { Product } from "@/types";

interface ProductDetailProps {
	params: Promise<{
		id: string;
	}>;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ params }) => {
	const { addToCart } = useCart();
	const router = useRouter();

	const [product, setProduct] = useState<Product | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchProduct = async () => {
			const { id } = await params; // Await the params Promise
			const foundProduct = products.find((prod) => prod.id.toString() === id);
			setProduct(foundProduct || null);
			setLoading(false);
		};

		fetchProduct();
	}, [params]);

	if (loading) {
		return <p>Loading...</p>;
	}

	if (!product) {
		return <p>Product not found</p>;
	}

	const handleAddToCart = () => {
		addToCart(product);
		router.push("/shop");
	};

	return (
		<div className="px-8 py-12">
			<div className="flex flex-col md:flex-row">
				<div className="w-full md:w-1/2 mb-6 md:mb-0">
					<Image
						src={product.image}
						alt={product.title}
						className="w-full h-96 object-cover rounded-md"
						width={400}
						height={400}
					/>
				</div>
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
