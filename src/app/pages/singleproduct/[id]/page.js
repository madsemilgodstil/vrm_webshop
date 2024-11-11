import Link from 'next/link'
import { IoIosArrowBack } from 'react-icons/io'

const Page = async ({ params }) => {
  const { id } = params
  let product

  try {
    const response = await fetch(`https://dummyjson.com/products/${id}`)
    if (!response.ok) {
      throw new Error('Failed to fetch product')
    }
    product = await response.json()
  } catch (error) {
    console.error(error)
    return <p>Could not load product details. Please try again later.</p>
  }

  return (
    <div className='flex flex-col gap-10'>
      <Link href='/'>
        <button className='flex gap-2 items-center'>
          <IoIosArrowBack /> Go back
        </button>
      </Link>
      <div>{product.description}</div>
    </div>
  )
}

export default Page
