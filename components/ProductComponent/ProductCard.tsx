import React from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/utils/products";

function Products() {
  return (
    <div className="px-8 py-12">
      <h1 className="text-4xl font-bold text-red-700 text-center mb-8">
        Explore Our Tomato Powder Collection
      </h1>

      {/* Filter Section */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <label className="mr-2 text-gray-700 font-medium">Sort by:</label>
          <select className="border border-gray-300 rounded-md p-2">
            <option value="price">Price</option>
            <option value="popularity">Popularity</option>
            <option value="new-arrivals">New Arrivals</option>
          </select>
        </div>
        <div>
          <label className="mr-2 text-gray-700 font-medium">Filter:</label>
          <select className="border border-gray-300 rounded-md p-2">
            <option value="organic">Organic</option>
            <option value="bulk">Bulk</option>
            <option value="flavored">Flavored</option>
          </select>
        </div>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link key={product.id} href={`/product_detail/${product.id}`} passHref>
            <div className="border border-gray-300 rounded-lg p-4 shadow-lg cursor-pointer hover:shadow-xl">
              <Image
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover rounded-md"
                width={200}
                height={200}
              />
              <h2 className="text-xl font-semibold text-red-700 mt-4">
                {product.title}
              </h2>
              <p className="text-gray-700">{product.price}</p>
              <p className="text-gray-500 text-sm mt-2">{product.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Products;
