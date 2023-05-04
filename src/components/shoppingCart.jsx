import React from 'react';
import { Offcanvas,Stack } from 'react-bootstrap';
import { useShoppingContext } from '../Context/ShoppingCartContext';
import CartItems from "../components/CartItems";
import formatCurrency from './formatCurrency';
import storeItems from "../data/sroteItems.json"
const ShoppingCart = ({isOpen}) => {
    const {cartItems,closeCart} = useShoppingContext()
    
    
    return (
        <Offcanvas show={isOpen} onHide={closeCart} placement='end'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Your Product's Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body gap={3}>
                <Stack gap={3}>

                    {cartItems.map((item)=>{return <CartItems key={item.id} {...item}/>
                    })}
                    <div className="ms-auto fw-bold fs-5">
                        Total{" "}
                    {formatCurrency(
                        cartItems.reduce((total, cartItem) => {
                            const item = storeItems.find((i) => i.id === cartItem.id);
                            return total + (item?.price || 0) * cartItem.quantity;
                    }, 0)
                    )}
                    </div>
                </Stack>
                </Offcanvas.Body>

        </Offcanvas>
    )
}

export default ShoppingCart
