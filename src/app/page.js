import Link from 'next/link'
import Image from 'next/image'

export default async function Home () {
  try {
    const response = await fetch('https://dummyjson.com/products')
    if (!response.ok) {
      throw new Error('Failed to fetch products')
    }
    const data = await response.json()

    return (
      <div>
        {data.products.map(product => (
          <div key={product.id}>
            <Image
              src={product.thumbnail}
              width={250}
              height={250}
              alt={product.title}
            />
            <Link href={`/pages/singleproduct/${product.id}`}>
              {product.title}
            </Link>
          </div>
        ))}
      </div>
    )
  } catch (error) {
    console.error(error)
    return <p>Could not load products. Please try again later.</p>
  }
}
