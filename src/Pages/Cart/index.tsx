import CartComponent from '../../Components/Cart';
import Footer from '../../Components/Footer/Footer';
import { useCart } from '../../Context/CartContext';

export function CartProduct() {
  const { cart } = useCart();
  return (
    <div>
      <div className="pt-20">
        <CartComponent />
      </div>

      <Footer />
    </div>
  );
}
