'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState, Suspense } from 'react'
import ButtonPri from '@/components/knapper/ButtonPri'

function PaymentPageContent () {
  const searchParams = useSearchParams()
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    const cartData = searchParams.get('cart')

    if (cartData) {
      try {
        const items = JSON.parse(cartData) // Parse JSON string
        setCartItems(items) // Update `cartItems` state
      } catch (error) {
        console.error('Failed to parse cart data:', error)
      }
    }
  }, [searchParams])

  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
      <div className='w-full max-w-2xl bg-white rounded-lg shadow-lg p-6 m-6'>
        <h1 className='text-2xl font-bold text-center mb-8'>Payment</h1>
        {cartItems.length > 0 ? (
          <div className='space-y-4'>
            {cartItems.map((item, index) => (
              <div
                key={index}
                className='product flex items-center justify-between border-b pb-2'
              >
                <div>
                  <h2 className='text-lg font-semibold'>{item.title}</h2>
                  <img src={item.thumbnail} alt={item.title} width='50' />
                  <p>Quantity: {item.quantity}</p>
                  <p>Price per item: ${item.price}</p>
                </div>
                <p>Subtotal: ${item.price * item.quantity}</p>
              </div>
            ))}
            <div className='flex justify-between'>
              <p className='text-lg font-bold mt-4'>
                Total: $
                {cartItems.reduce(
                  (total, item) => total + item.price * item.quantity,
                  0
                )}
              </p>
              <ButtonPri text='Pay Now' />
            </div>
          </div>
        ) : (
          <p className='text-center'>Ingen varer i kurven.</p>
        )}
      </div>
    </div>
  )
}

export default function PaymentPage () {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PaymentPageContent />
    </Suspense>
  )
}
