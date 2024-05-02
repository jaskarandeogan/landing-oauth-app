import React from "react";

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
        -
      </button>
      <span>{quantity}</span>
      <button
        onClick={handleIncrement}
        className="p-4 text-[orange] text-2xl font-semibold hover:text-[darkorange]"
      >
        +
      </button>
    </div>
  );
}

export default Counter;