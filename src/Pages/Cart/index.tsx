import CartComponent from '../../Components/Cart';
import Footer from '../../Components/Footer/Footer';
import { useCart } from '../../Context/CartContext';

export function CartProduct() {
  const { cart } = useCart();
  return (
    <div className="pt-20">
      <CartComponent />
      <Footer />
    </div>
  );
}
