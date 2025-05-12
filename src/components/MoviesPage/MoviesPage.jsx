import ProductCard from "../ProductCard/ProductCard"
import style from './ShoppingPage.module.css'
import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../App"
import CheckOutProductCard from "../CheckoutProductPage/CheckoutProductPage"

const ShoppingPage = () => {
    const {cartItems} = useContext(CartContext); 
    const [cartProducts, setCartProducts] = useState([])
    const [totalPrice, setTotalPrice] = useState(0);
    
    useEffect(()=>{
        setCartProducts(cartItems)
    },[cartItems])

    useEffect(()=>{
       const total = cartProducts.reduce((acc, product)=> acc + product.price,0)
       setTotalPrice(total);
    }, [cartProducts])
    
    console.log(cartProducts);
    const checkOut = ()=>{alert("Thankyou for using this test app!")}
    
    const renderCheckOutPage = () => {
        return cartProducts.map((product)=>(
            <CheckOutProductCard imageUrl={product.imageUrl} name={product.name} price={product.price} key={product.id}/>
        ))
    }
   
    return(
        <div className={style.checkOutContainer}>
            <h1>Let's Get You These Items!</h1>
            <div className ={style.cartInformation}>
                <h2>Total Price:${totalPrice}</h2>
                <h2>Total Items: {cartItems.length}</h2>
            </div>
            <div className={style.cartItemContainer}>
               {cartItems.length === 0 ? <h3>Oops! you haven't added anything.</h3>:renderCheckOutPage()}
            </div>
            <button onClick={checkOut} className = {style.checkOutButton}>CHECK OUT</button>
        </div>
    )  
}
export default ShoppingPage