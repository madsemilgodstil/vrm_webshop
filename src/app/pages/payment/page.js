import Basket from '@/components/basket/Basket'
import ButtonPri from '@/components/knapper/ButtonPri'

export default function PaymentPage () {
  return (
    <div className='max-w-[700px] mx-auto my-10'>
      <Basket />
      <ButtonPri text='Betal her' />
    </div>
  )
}
