import React from 'react'
import { Button, Card } from 'react-bootstrap'
import formatCurrency from "./formatCurrency"
import { useShoppingContext } from "../Context/ShoppingCartContext"

const StoreItem = ({id,name,price,image}) => {
  const {getItemsQuantity,increaseCartItems,decreaseCartItems,reomoveItemsFromCart} = useShoppingContext()
  const quantity = getItemsQuantity(id)
  return (
    <Card className='h-250'> 
        <Card.Img src={image} variant='top' style={{height:"200px",objectFit:"cover"}}/>
        <Card.Body className="d-flex flex-column">
            <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                <span className='fs-2'>{name}</span>
                <span className='text-muted me-2'>{formatCurrency(price)}</span>
            </Card.Title>
            {quantity === 0? <Button className='bg-success' onClick={()=>increaseCartItems(id)}>Add To Cart</Button>:
            <div >
              <div  className="d-flex justify-content-between align-items-baseline mb-4">
                <Button onClick={()=>increaseCartItems(id)}>+</Button>
                <span>{quantity}       product in your cart</span>
                <Button onClick={()=>decreaseCartItems(id)} >-</Button>
              </div>
              <div>
                <Button className='bg-danger '  onClick={()=> reomoveItemsFromCart(id)} style={{width:"100%"}}>reomove</Button>
              </div>
            </div>
            }
        </Card.Body>
    </Card>
  )
}

export default StoreItem
