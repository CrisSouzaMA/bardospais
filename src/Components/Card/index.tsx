import { useState } from 'react';
import { formatNumber } from '../../util/formatNumber';
import { CardProps, DataCardProps } from '../../services/interface/card';
import { useCart } from '../../Context/CartContext';

export const Card = ({ data }: CardProps) => {
  const { addToCart, removeFromCart } = useCart();

  const handleAddProduct = () => {
    addToCart(data);
  };

  const handleRemoveProduct = (id: number) => {
    removeFromCart(id);
  };

  return (
    <div
      className="mx-auto mt-11 w-80 transform overflow-hidden
     rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300
      hover:scale-105 hover:shadow-lg"
    >
      <img
        className="h-48 w-full object-cover object-center"
        src={data.image}
        alt="Product Image"
      />
      <div className="p-4">
        <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">
          {data.name}
        </h2>
        <p className="mb-2 text-base dark:text-gray-300 text-gray-700">
          {data.description}
        </p>
        <div>
          <div className="">
            <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
              {formatNumber(data.price)}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-300 text-center">
        <button
          className="ml-auto text-2xl font-bold text-green-500 mr-4"
          onClick={handleAddProduct}
        >
          +
        </button>
        0
        <button
          className="text-2xl font-bold text-red-500 ml-4"
          onClick={() => handleRemoveProduct(data.id)}
        >
          -
        </button>
      </div>
    </div>
  );
};
