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
                            className="flex flex-col items-center bg-white shadow-lg rounded-lg p-8"
                        >
                            <div className="w-20 h-20 mb-4">
                                <Image
                                    src={testimonial.image}
                                    alt={testimonial.author}
                                    width={80}
                                    height={80}
                                    className="rounded-full object-cover"
                                />
                            </div>
                            <p className="text-gray-700 italic mb-4 text-center">
                                {testimonial.quote}
                            </p>
                            <p className="text-red-600 font-semibold">
                                – {testimonial.author}
                            </p>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default TestimonialCarouselClient;
