import { formatNumber } from '../../util/formatNumber';

interface CardProps {
  image: string;
  name: string;
  description: string;
  price: number;
}

export const Card = ({ image, name, description, price }: CardProps) => {
  return (
    <div
      className="mx-auto mt-11 w-80 transform overflow-hidden
     rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300
      hover:scale-105 hover:shadow-lg"
    >
      <img
        className="h-48 w-full object-cover object-center"
        src={image}
        alt="Product Image"
      />
      <div className="p-4">
        <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">{name}</h2>
        <p className="mb-2 text-base dark:text-gray-300 text-gray-700">{description}</p>
        <div>
          <div className="">
            <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
              {formatNumber(price)}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-300 text-center">
        <button className="ml-auto text-2xl font-bold text-green-500 mr-4">+</button>0
        <button className="text-2xl font-bold text-red-500 ml-4">-</button>
      </div>
    </div>
  );
};
