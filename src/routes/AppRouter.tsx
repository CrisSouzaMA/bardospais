import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import { CartProduct } from '../Pages/Cart';

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<CartProduct />} />
    </Routes>
  );
}
