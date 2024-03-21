import { FaMinus, FaPlus } from 'react-icons/fa';
import { formatNumber } from '../../util/formatNumber';
import { FaRegTrashCan } from 'react-icons/fa6';
import { CardProps } from '../../services/interface/card';
import { useCart } from '../../Context/CartContext';

export default function CartCardItem({ data }: CardProps) {
  const { cart, addToCart, removeFromCart, cancelProductFromCart } = useCart();

  const handleAddProduct = () => {
    addToCart(data);
  };

  const handleRemoveProduct = (id: string) => {
    removeFromCart(id);
  };

  const handleCancelProduct = (id: string) => {
    cancelProductFromCart(id);
  };
  return (
    <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
      <img
        src={data.image}
        alt={data.name}
        className="w-full h-[106px] rounded-lg sm:w-40"
      />
      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
        <div className="mt-5 sm:mt-0">
          <h2 className="text-lg font-bold text-gray-900">{data.name}</h2>
          <p className="mt-1 text-xs text-gray-700">{formatNumber(data.price)}</p>
          <p className="mt-1 text-xs text-gray-700">{data.description}</p>
        </div>
        <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
          <div className="flex items-center border-gray-100">
            <button
              onClick={() => handleRemoveProduct(data.id)}
              className="cursor-pointer rounded-l bg-transparent py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
            >
              <FaMinus className="text-red-500" />
            </button>
            <span className="py-1 px-3.5 bg-transparent">
              {cart.find((item) => item.id === data.id ?? 0)?.quantity ?? 0}{' '}
            </span>
            <button
              onClick={handleAddProduct}
              className="cursor-pointer rounded-r bg-transparent
            py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
            >
              <FaPlus className="text-green-500" />
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <p className="text-sm">
              {formatNumber(
                (cart?.find((item) => item.id === data.id)?.quantity ?? 0) * data.price,
              )}
            </p>

            <FaRegTrashCan
              onClick={() => handleCancelProduct(data.id)}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
