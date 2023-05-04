import { createContext, useState ,useContext, useEffect} from "react";
import ShoppingCart from "../components/shoppingCart"
const ShoppingCartContext = createContext({});

const intialCartItems = localStorage.getItem("shopping-cart")? JSON.parse(localStorage.getItem("shopping-cart")):[]


const ShoppingCartProvider = ({children}) => {
    const [cartItems,setCartItems] = useState(intialCartItems);
    const [isOpen,setIsOpen] =useState(false);

    useEffect(()=> {
      localStorage.setItem("shopping-cart",JSON.stringify(cartItems))
    },[cartItems])

    const cartQuantity = cartItems.reduce(
      (quantity, item) =>item.quantity + quantity,0)
    const openCart= ()=>{
      setIsOpen(true)
    }
    const closeCart= ()=>{
      setIsOpen(false)
    }
    const getItemsQuantity = (id) => {
        return cartItems.find((item) => item.id === id)?.quantity || 0;
      };
    const increaseCartItems   = (id) => {
        setCartItems((currItems) => {
          if (currItems.find((item) => item.id === id) == null) {
            return [...currItems, { id, quantity: 1 }];
          } else {
            return currItems.map((item) => {
              if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 };
              } else {
                return item;
              }
            });
          }
        });
      };
    const decreaseCartItems = (id) => {
        setCartItems((currItems) => {
          if (currItems.find((item) => item.id === id)?.quantity === 1) {
            return currItems.filter((item) => item.id !== id);
          } else {
            return currItems.map((item) => {
              if (item.id === id) {
                return { ...item, quantity: item.quantity - 1 };
              } else {
                return item;
              }
            });
          }
        });
      };
    const reomoveItemsFromCart =(id)=>{
        setCartItems((currItems) =>currItems.filter((item)=> item.id !== id ))
    }
  return (
    <ShoppingCartContext.Provider 
    value={{cartItems,
    getItemsQuantity,
    increaseCartItems,
    decreaseCartItems,
    cartQuantity,
    reomoveItemsFromCart,
    openCart,
    closeCart
    }}>
        {children}
        <ShoppingCart isOpen={isOpen}/>
    </ShoppingCartContext.Provider>
  )
}

export default ShoppingCartProvider;

export const useShoppingContext = ()=>{
    return useContext(ShoppingCartContext)
}

