import Image from 'next/image'

export default async function SingleProductPage ({ params }) {
  const { id } = params

  try {
    const response = await fetch(`https://dummyjson.com/products/${id}`)
    if (!response.ok) {
      throw new Error('Failed to fetch product')
    }
    const product = await response.json()

    return (
      <div>
        <h1>{product.title}</h1>
        <Image
          src={product.thumbnail}
          width={250}
          height={250}
          alt={product.title}
        />
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
      </div>
    )
  } catch (error) {
    console.error(error)
    return <p>Could not load product. Please try again later.</p>
  }
}
