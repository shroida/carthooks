import React from 'react'
import { Button, Stack } from 'react-bootstrap'
import storeItems from "../data/sroteItems.json"
import formatCurrency from './formatCurrency'
import { useShoppingContext } from '../Context/ShoppingCartContext'
const CartItems = ({id,quantity}) => {
    const item = storeItems.find((i) => i.id === id)
    // check if item in data file the item i pass to you
    const {reomoveItemsFromCart} = useShoppingContext()
  return (
    <Stack direction='horizontal' className='d-flex align-items-center' gap={2}>

        <img src={item.image} alt='img-item'  style={{width:"125px",height:"75px",objectFit:"cover"}}/>
        <div className="me-auto" >
            <div>
                {item.name}{"   "}
                </div>
                <div>
                {quantity > 1 && (<span className='text-muted' style={{fontSize:"1rem"}}> ({quantity}) {item.name}</span>)}
            </div>
            <div className="text-muted" style={{fontSize:"0.80rem"}}>
            {formatCurrency(item.price)}
            </div>
        </div>
            <div>
                {formatCurrency(item.price  * quantity)}
            </div>
        <Button variant='outline-danger' size='sm' onClick={()=> reomoveItemsFromCart(id)} >&times;</Button>
        
    </Stack>
  )
}

export default CartItems
