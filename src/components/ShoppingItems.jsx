import React from 'react'
import { add } from '../redux/CartSlice'
import { useDispatch } from 'react-redux'

export default function ShoppingItems({item}) {
  const dispatch = useDispatch()
  const {id, image, price, name} = item
  return (
    <div>
      <div className='flex items-center justify-center'>
        <img className='bg-cover w-full' src={image} alt="" />
      </div>
      <div className='mt-6 flex font-salsa justify-between items-center px-4'>
        <div>
          <div className='text-2xl text-gray-500 font-regular mb-3'>{name}</div>
          <div className='text-xl text-slate-700 font-bold mb-3'>{price}$</div>
        </div>
        <button onClick={() => dispatch(add(item))} className='p-3 hover:bg-green-800 duration-500 hover:text-white rounded-md bg-gray-300'>Add to Cart</button>
      </div>
    </div>
  )
}
