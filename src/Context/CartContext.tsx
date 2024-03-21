import React, { ReactNode, createContext, useContext, useState } from 'react';
import { DataCardProps } from '../services/interface/card';

interface CartContextData {
  cart: DataCardProps[];
  addToCart: (product: DataCardProps) => void;
  removeFromCart: (productId: string) => void;
  cancelProductFromCart: (productId: string) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<DataCardProps[]>([]);

  const addToCart = (product: DataCardProps) => {
    const productIndex = cart.findIndex((item) => item.id === product.id);
    if (productIndex !== -1) {
      const newCart = [...cart];
      newCart[productIndex].quantity = (newCart[productIndex].quantity || 0) + 1;
      setCart(newCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId: string) => {
    const productIndex = cart.findIndex((item) => item.id === productId);

    if (productIndex !== -1) {
      const newCart = [...cart];
      if ((newCart[productIndex].quantity ?? 0) > 1) {
        newCart[productIndex].quantity = (newCart[productIndex].quantity ?? 0) - 1;
      } else {
        newCart.splice(productIndex, 1);
      }
      setCart(newCart);
    }
  };

  const cancelProductFromCart = (productId: string) => {
    const products = cart.filter((item) => item.id !== productId);
    setCart(products);
  };
  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, cancelProductFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export function useCart(): CartContextData {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
