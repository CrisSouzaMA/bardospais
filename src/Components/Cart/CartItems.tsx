import { useCart } from '../../Context/CartContext';
import CartCardItem from './CartCardItem';

export default function CartItems() {
  const { cart } = useCart();
  return (
    <div className="rounded-lg md:w-2/3">
      {cart?.map((product) => (
        <CartCardItem key={product.id} data={product} />
      ))}
    </div>
  );
}
