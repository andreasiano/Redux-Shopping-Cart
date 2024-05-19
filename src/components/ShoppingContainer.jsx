import React from 'react'
import { items } from '../CartItems'
import ShoppingItems from './ShoppingItems'

export default function ShoppingContainer() {
  return (
    <div className='pt-[100px] grid lg:grid-cols-3 md:grid-cols-2 gap-4'>
      {items.map(item => {
        return <ShoppingItems key={item.id} item={item}/>
      })}
    </div>
  )
}
