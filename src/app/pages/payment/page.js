import Basket from '@/components/basket/Basket'
import ButtonPri from '@/components/knapper/ButtonPri'

export default function PaymentPage () {
  return (
    <div className='max-w-[700px] mx-auto my-10'>
      <div className='space-y-4 mx-auto'>
        <div className='product flex items-center'>
          <p className='w-16 h-16 bg-gray-200 mr-4 flex items-center justify-center'>
            Images her
          </p>
          <div className='content'>
            <h2>Produktnavn</h2>
            <p>Antal:</p>
            <p>Pri:</p>
          </div>
        </div>
        <p className='text-lg'>I alt at betale: ,-</p>
        <br />
        <ButtonPri text='Betal her' link='/pages/payment/' />
      </div>
    </div>
  )
}
