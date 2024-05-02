import React from "react";
import { data } from "../data/data.js"
import Counter from "./Counter.js";
import { CartContext } from "../context/CartContext.js";
import { formatCurrency } from "../commonjs/common.js";
import Image from 'next/image'

const ProductCard = () => {
  const { addToCart } = React.useContext(CartContext);

  const [image, setImage] = React.useState(data.images[0].src);
  const [quantity, setQuantity] = React.useState(0);

  const handleAddCart = () => {
    if (quantity === 0) {
      alert("Please select quantity");
      return;
    }
    addToCart({
      product: {
        id: data.productId,
        name: data.slogan,
        price: data.price,
        image: data.images[0].src,
        quantity: quantity,
      },
    });
    alert("Added to cart");
    setQuantity(0);
  };



  const handleImageChange = (e) => {
    setImage(e.target.src);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-20">
      <div className="image-section w-full lg:max-w-[550px]">
        <div className="main-image rounded">
          <Image src={image} alt="main" className="rounded w-full shadow-xl" width={400} height={400} />
        </div>
        <div className="thumbnails flex-wrap justify-between mt-[32px] flex">
          {data.images.map((item) => {
            return (
              <Image
                src={item.src}
                alt={item.alt}
                key={item.id}
                onClick={(e) => handleImageChange(e)}
                width={400}
                height={400}
                className="w-[20%] h-[20%] rounded hover:opacity-70 cursor-pointer shadow-sm"
              />
            );
          })}
        </div>
      </div>
      <div className="info-section lg:max-w-[550px] lg:p-6 md:p-0  justify-center md:justify-between items-center">
        <div className="company">
          <h3 className="text-[orange] text-[14px] font-semibold">
            {data.company}
          </h3>
        </div>
        <h1 className="text-[#000000] text-[32px] lg:text-[44px] leading-tight font-bold">
          {data.slogan}
        </h1>
        <div className="description">
          <p className="text-[gray] text-[14px] font-medium mt-6">
            {data.description}
          </p>
        </div>
        <div className="price flex md:flex-col items-center md:items-start justify-between mt-12">
          <div className="flex items-center gap-3">
            <p className="text-[#000000] text-[32px] font-bold">{formatCurrency(data.price)}</p>
            <p className="bg-lightorange text-orange font-medium  rounded text-center px-2 py-1">{data.discount}%</p>
          </div>
          <p className="text-[gray] line-through">{formatCurrency(data.totalPrice)}</p>
        </div>
        <div className="add-cart flex flex-row justify-between items-center gap-4 my-4">
          <div className="counter bg-[#F6F8FD] border-slate-200 border-[2px] w-[200px] rounded">
            <Counter setQuantity={setQuantity} quantity={quantity} size="sm" />
          </div>
          <div className="add-to-cart">
            <button
              className="bg-[orange] text-[#FFFFFF] font-medium w-[150px] h-[50px] rounded hover:bg-[#ff8c00] transition-all"
              onClick={handleAddCart}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;