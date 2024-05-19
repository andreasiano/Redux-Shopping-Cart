import React,  {useState, useEffect} from 'react'
import {BiShoppingBag} from 'react-icons/bi'
import { open } from '../redux/CheckOutSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function Navbar() {
  const {amount} = useSelector((state => state.cart))
  const dispatch = useDispatch()
  const [scroll, setScroll] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 20)
    })
  }, [])
  return (
    <div className={`fixed px-8 ${scroll ? 'bg-gray-200 duration-500 shadow-lg' : ''} font-salsa top-0 left-0 w-full z-20`}>
      <div className='flex items-center justify-between relative container py-4 px-2 mx-auto'>
        <div className='text-slate-700 text-3xl'><span className='font-bold'>Cloth</span><span className='text-green-800'>ify</span></div>
        <div onClick={() => dispatch(open())} className='relative cursor-pointer'>
          <BiShoppingBag size={35} className='text-slate-500'/>
          <div className='absolute w-5 h-5 rounded-full z-10 right-[-3px] bottom-[-3px] flex items-center justify-center text-[10px] bg-slate-700 text-white'>{amount}</div>
        </div>
      </div>
    </div>
  )
}
