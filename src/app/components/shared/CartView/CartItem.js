import React from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'
import { formatCurrency } from '../../../commonjs/common'
import Image from 'next/image'

const CartItem = ({product}) => {
    return (
        <div className="flex justify-between items-center p-6 gap-3">
            <div className="">
                <Image
                    src={product?.image}
                    alt="product"
                    className="w-full h-auto max-w-20 object-cover rounded-md"
                    width={80}
                    height={80}
                />
            </div>
            <div className="flex flex-col gap-2">
                <span className="text-sm text-[#69707D] font-medium">{product?.name}</span>
                <div>
                    <span className="text-sm text-[#69707D]">
                        {formatCurrency(product?.price)} x{" "}
                    </span>
                    <span className="text-sm text-[#69707D]">{product?.quantity}</span>
                    <span className="text-sm font-semibold ml-2">
                        {formatCurrency(product?.price * product?.quantity)}
                    </span>
                </div>
            </div>
            <button className=" text-center text-lg py-3 text-[#69707D] font-semibold " onClick={() => handleDelete(product?.id)}>
                <FaRegTrashAlt className="h-5 w-5" aria-hidden="true" />
            </button>
        </div>
    )
}

export default CartItem