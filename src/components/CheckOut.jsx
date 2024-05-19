import React from 'react'
import {HiChevronLeft} from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux'
import { open } from '../redux/CheckOutSlice'
import CheckOutItems from './CheckOutItems'

export default function CheckOut() {
  const dispatch = useDispatch()
  const {cartItems, amount} = useSelector((state) => state.cart)
  return (
    <div className='bg-black/50 font-salsa fixed z-30 top-0 left-0 w-full h-screen'>
      <div className="h-full bg-gray-200 sm:w-[40rem] min-w-[15rem] overflow-y-auto">
      <div className="p-6">
        <div className='flex items-center justify-between'>
          <div onClick={() => dispatch(open())} className='flex items-center cursor-pointer'>
            <HiChevronLeft size={30}/>
        </div>
          <div className='text-lg'>Shopping Bag ({amount})</div>
        </div>
        <div className="mt-8">
          {cartItems.length === 0 ? (
            <div className='uppercase text-center text-3xl'>Your Cart is empty</div>
          ) : (
            <>
            {cartItems.map(cartItems => {
              return (
                <CheckOutItems key={cartItems.id} cartItem={cartItems}/>
              )
            })}
            </>
          )}
        </div>
      </div>
    </div>
  </div>
  )
}
