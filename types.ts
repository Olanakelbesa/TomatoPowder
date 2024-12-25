import { StaticImageData } from "next/image";

export interface Product {
	id: number;
	title: string;
	price: string;
	description: string;
	image: string | StaticImageData; // Allow both string and StaticImageData
}
