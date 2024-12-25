import React from "react";
import ProductDetail from "@/components/ProductComponent/ProductDetails";

const Page = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <ProductDetail params={params} />
    </div>
  );
};

export default Page;
