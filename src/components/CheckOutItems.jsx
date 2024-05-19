import React from 'react'
import {HiX} from 'react-icons/hi'
import { increase, decrease, remove } from '../redux/CartSlice'
import { useDispatch } from 'react-redux'

export default function CheckOutItems({cartItem}) {
  const dispatch = useDispatch()
  const {id, price, amount, name, image} = cartItem
  return (
    <div className='flex justify-between items-center border-2 border-solid border-white p-4 mb-6'>
      <div className="flex items-center gap-4">
        <img src={image} className='w-40 h-40 object-cover' alt="" />
      </div>
      <div className="flex flex-col items-start max-w-[6.8rem]">
        <div>{name}</div>
        <div className='flex items-center gap-4 mt-2'>
          <button onClick={() => dispatch(decrease(cartItem))} className='w-8 h-8 text-white text-lg  bg-slate-700 rounded-full'>-</button>
          <div>{amount}</div>
          <button onClick={() => dispatch(increase(cartItem))} className='w-8 h-8 text-lg text-white bg-slate-700 rounded-full'>+</button>
        </div>
      </div>
      <div className='flex flex-col items-center gap-3'>
        <HiX onClick={() => dispatch(remove(cartItem))} className='cursor-pointer text-xl'/>
      <div>{(price * amount).toFixed(2)}$</div>
      </div>
    </div>
  )
}
