import ProductList from '@/components/productlist/ProductList'
import Basket from '@/components/basket/Basket'
import ButtonPri from '@/components/knapper/ButtonPri'

export default async function Home () {
  return (
    <div className='main grid grid-cols-[70%_30%] gap-6'>
      <ProductList />
      <div className='basket-wrapper'>
        <Basket />
        <ButtonPri text='Gå til kurv' link='./payment/' />
      </div>
    </div>
  )
}
