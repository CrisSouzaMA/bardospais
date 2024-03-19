/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react';
import { productList } from '../listProducts';

type Product = {
    id: number;
    category: string;
    name: string;
    description: string;
    image: string;
    price: string;
    available: boolean;
};

type ProductList = {
  [category: string]: Product[];
};

interface CardContentProps {
    category: string;
}

const CardContent = ({ category }: CardContentProps) => {

    const products: Product[] = productList.filter((product: any) => product.category === category);

    useEffect(() => {
        console.log({ products });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <div>
       Oi
        </div>
    );
}

export default CardContent;