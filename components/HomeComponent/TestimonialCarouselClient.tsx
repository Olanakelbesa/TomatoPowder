// components/TestimonialCarouselClient.tsx

"use client"; // Mark this file as a client-side component

import React from "react";
import dynamic from "next/dynamic";
import { testimonials } from "@/utils/testimonials";
import Image from "next/image";

// Dynamically import Slider to disable SSR
const Slider = dynamic(() => import("react-slick"), { ssr: false });

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialCarouselClient = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: false,
	};

	return (
		<div className="bg-gray-100 py-16">
			<h2 className="text-3xl md:text-4xl font-bold text-center text-[#d52127] mb-8">
				What Our Customers Say
			</h2>
			<div className="max-w-4xl mx-auto px-4">
				<Slider {...settings}>
					{testimonials.map((testimonial, index) => (
						<div
							key={index}
							className="flex flex-col gap-4 items-center bg-[#fef8f8]  rounded-xl p-8"
						>
							<div className="mx-auto flex flex-col justify-center items-center  ">
								<Image
									src={testimonial.image}
									alt={testimonial.author}
									width={150}
									height={150}
									className=" object-cover rounded-full"
								/>
								<p className="text-red-600 font-semibold py-2">
									– {testimonial.author}
								</p>
							</div>
							<p className="text-gray-700 italic mb-4 text-center">
								{testimonial.quote}
							</p>
						</div>
					))}
				</Slider>
			</div>
		</div>
	);
};

export default TestimonialCarouselClient;
