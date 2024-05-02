import React from "react";
import { CartContext } from "../../../context/CartContext";
import { FaRegTrashAlt } from "react-icons/fa";
import { formatCurrency } from "../../../commonjs/common.js";
import Image from "next/image";
import CartItem from "./CartItem";

const CartView = ({ addCart }) => {
    const { cart, removeFromCart } = React.useContext(CartContext);

    function handleDelete(id) {
        removeFromCart(id);
    }

    const CartBody = () => {
        return (
            <>
                {
                    cart.map((item, index) => {
                        return (
                            <CartItem key={index} product={item.product} />
                        );
                    })
                }
                <div className="py-3 px-6">
                    <button className="bg-orange text-center text-lg py-3 text-white font-semibold rounded-md w-full hover:bg-darkorange">
                        Checkout
                    </button>
                </div>
            </>
        );
    };

    const EmptyCart = () => {
        return (
            <div className="flex flex-col justify-center items-center py-10">
                <span className="text-[#69707D] text-sm font-semibold py-3">
                    Your cart is empty
                </span>
            </div>
        );

    }


    return (
        <div className="flex flex-col min-w-[22.5rem] ">
            <h4 className="border-b-[1px]  px-6 py-3 border-[#E4E9F2]">
                <span className="text-sm font-semibold  ">Cart</span>
            </h4>
            {
                cart.length !== 0 ? <CartBody /> : <EmptyCart />
            }

        </div>
    );
};

export default CartView;