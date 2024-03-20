import { FaCartPlus } from 'react-icons/fa';
import { useCart } from '../../Context/CartContext';

export const Header = () => {
  const { cart } = useCart();
  return (
    <>
      <header className="sm:px-8 px-4 py-4 z-10 w-full bg-[#D9D9D9] fixed">
        <nav className="flex justify-between items-center max-container">
          <a href="/" className="text-3xl font-bold uppercase">
            Bar dos Pais
          </a>

          <button className="relative flex gap-2 text-lg leading-normal font-medium font-montserrat wide:mr-24">
            <div className="max-lg:block cursor-pointer flex flex-col">
              <div
                className="rounded-full bg-red-500 text-yellow-50 text-[12px] w-5 h-5 flex 
              justify-center items-center absolute right-[-8px] top-[-12px]"
              >
                {cart.reduce((acc, item) => acc + (item.quantity || 0), 0)}
              </div>
              <FaCartPlus className="text-3xl text-gray-700" />
            </div>
          </button>
        </nav>
      </header>
    </>
  );
};
