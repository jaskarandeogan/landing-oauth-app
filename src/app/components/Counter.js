import React from "react";
import { HiPlus } from "react-icons/hi";
import { HiMinus } from "react-icons/hi";

function Counter({ size, setQuantity, quantity}) {

  const handleIncrement = () => {
    setQuantity(
      quantity + 1
    );
  };
  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(
        quantity - 1
      );
    }
  };

  return (
    <div className="h-[50px] flex justify-between items-center background">
      <button
        onClick={handleDecrement}
        className="p-4 text-[orange] text-2xl font-semibold hover:text-[darkorange]"
      >
        <HiMinus />
      </button>
      <span>{quantity}</span>
      <button
        onClick={handleIncrement}
        className="p-4 text-[orange] text-2xl font-semibold hover:text-[darkorange]"
      >
        <HiPlus />
      </button>
    </div>
  );
}

export default Counter;