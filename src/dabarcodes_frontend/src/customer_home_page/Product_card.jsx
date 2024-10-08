import React from "react";
import { CiBookmark } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Product_card = ({ data }) => {
  const navigate = useNavigate();

  const redirectToSkuDetails = () => {
    navigate("/sku-details");
  };
  return (
    <>
      {data.map((product) => (
        <div
          onClick={redirectToSkuDetails}
          className="border cursor-pointer p-4 max-w-[270px] min-w-[270px] border-[#FFCDD2] rounded-sm"
        >
          <div>
            <div className="flex ">
              <img
                src={product.image}
                alt={product.name}
                className=" w-24 h-24 "
              />
              {/*  */}

              <div className="">
                <div className="ml-8 text-white rounded-sm mt-2 w-fit bg-[#B42700]">
                  <p className="px-4  text-sm font-medium">
                    {product.discountText}
                  </p>
                </div>
                <p className="ml-8 text-base text-[#646464]">Promoted By</p>
                <p className="text-[#000000] ml-8 text-base font-bold">
                  {product.promotedBy}
                </p>
                <p className="text-base ml-8 text-[#646464]">
                  {product.others}
                </p>
              </div>

              {/*  */}
            </div>
            <p className="text-sm text-[#646464]">Active Promotion:</p>
            <p className="text-sm font-bold text-[#B42700]">
              {product.promotion}
            </p>
            {/*  */}
            <div className="mt-2">
              <p className="text-lg text-black font-bold">{product.name}</p>
              <div className="flex items-center gap-2">
                <p className="text-[#0A6C91] font-normal text-base">
                  {product.price}{" "}
                  <strike className="text-[#949494] text-sm">
                    {product.originalPrice}
                  </strike>
                </p>
                <p className="text-sm my-2 text-[#646464]">{product.weight}</p>
              </div>

              <p className="text-sm text-[#949494]">{product.description}</p>
            </div>
            {/*  */}
            <div className="flex items-center mt-2 justify-between gap-4">
              <div className="w-fit rounded-md mt-1 text-white bg-[#0D90C1]">
                <button className="px-6 py-1">Link SKU</button>
              </div>
              <CiBookmark size={24} className="mt-1 text-[#6B696B]" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Product_card;
