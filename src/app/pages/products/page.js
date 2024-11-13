// Product/page.js

'use client' // This makes the component a client component

import { useState } from 'react'
import ProductList from '@/components/productlist/ProductList'
import Basket from '@/components/basket/Basket'

export default function Home () {
  const [basketItems, setBasketItems] = useState([])

  const handleAddToBasket = product => {
    setBasketItems([...basketItems, product])
  }

  return (
    <div className='main grid grid-cols-[70%_30%] gap-6'>
      <ProductList onAddToBasket={handleAddToBasket} />
      <div className='basket-wrapper'>
        <Basket basketItems={basketItems} />
      </div>
    </div>
  )
}
