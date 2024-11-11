import Link from 'next/link'
import Image from 'next/image'

export default async function Home () {
  try {
    // Make parallel requests to both categories
    const [beautyResponse, fragrancesResponse] = await Promise.all([
      fetch('https://dummyjson.com/products/category/beauty'),
      fetch('https://dummyjson.com/products/category/fragrances')
    ])

    // Check if both requests were successful
    if (!beautyResponse.ok || !fragrancesResponse.ok) {
      throw new Error('Failed to fetch products')
    }

    // Parse the JSON responses
    const beautyData = await beautyResponse.json()
    const fragrancesData = await fragrancesResponse.json()

    // Combine the products from both categories
    const combinedProducts = [
      ...beautyData.products,
      ...fragrancesData.products
    ]

    return (
      <div>
        {combinedProducts.map(product => (
          <div key={product.id}>
            <Image
              src={product.thumbnail}
              width={250}
              height={250}
              alt={product.title}
            />
            <Link href={`/singleproducts/${product.id}`}>{product.title}</Link>
          </div>
        ))}
      </div>
    )
  } catch (error) {
    console.error(error)
    return <p>Could not load products. Please try again later.</p>
  }
}
