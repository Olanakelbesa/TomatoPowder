import { StaticImageData } from "next/image";

export interface Product {
	id: string;
	title: string;
	price: string;
	description: string;
	image: string | StaticImageData; 
}
