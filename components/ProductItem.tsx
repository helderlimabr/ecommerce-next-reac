import Link from "next/link";
import React from "react";

export default function ProductItem({ product }) {
  return (
    <div className='card'>
      <Link legacyBehavior href={`/product/${product.slug}`}>
        <a>
          <img
            className='rounded shadow'
            src={product.image}
            alt={product.name}
          />
        </a>
      </Link>
      <div className='flex flex-col items-center justify-center p-5'>
        <Link href={`/product/${product.slug}`}>
          <h2 className='text-lg'>${product.name}</h2>
        </Link>
        <p className='mb-2'>{product.brand}</p>
        <p>{product.price}</p>
        <button className='primary-button'>Add to card</button>
      </div>
    </div>
  );
}
