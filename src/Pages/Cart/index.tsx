import CartComponent from '../../Components/Cart';
import { useCart } from '../../Context/CartContext';

export function CartProduct() {
  const { cart } = useCart();
  return (
    <div className="py-20">
      <CartComponent />
    </div>
  );
}
