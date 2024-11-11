import Link from 'next/link'
import Image from 'next/image'

export default async function Home () {
  const response = await fetch('https://dummyjson.com/products')
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
          {/* Update the link path to match the dynamic route */}
          <Link href={`/pages/singleproduct/${product.id}`}>
            {product.title}
          </Link>
        </div>
      ))}
    </div>
  )
}
