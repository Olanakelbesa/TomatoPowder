"use client"; // Mark this file as a Client Component

import React, { createContext, useContext, useState, ReactNode } from "react";
import { Product } from "@/types"; // Assuming you already have a Product type

interface CartContextType {
	cart: Product[];
	addToCart: (product: Product) => void;
	removeFromCart: (id: string) => void; // Remove function
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
	const [cart, setCart] = useState<Product[]>([]);

	// Add a product to the cart
	const addToCart = (product: Product) => {
		setCart((prevCart) => {
			const existingItem = prevCart.find((item) => item.id === product.id);
			if (existingItem) {
				return prevCart; // Avoid duplicates
			}
			return [...prevCart, product];
		});
	};

	// Remove a product from the cart by ID
	const removeFromCart = (id: string) => {
		setCart((prevCart) => prevCart.filter((item) => item.id.toString() !== id));
	};

	return (
		<CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
			{children}
		</CartContext.Provider>
	);
};

// Custom hook to use CartContext
export const useCart = () => {
	const context = useContext(CartContext);
	if (!context) {
		throw new Error("useCart must be used within a CartProvider");
	}
	return context;
};
