import { useCart } from '../../Context/CartContext';

export function CartProduct() {
  const { cart } = useCart();
  return (
    <div className="py-20">
      <h1>Cart</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.price}</p>
            <p>{item.quantity}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
