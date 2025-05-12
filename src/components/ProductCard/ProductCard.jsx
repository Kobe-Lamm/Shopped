import style from './ProductCard.module.css';
import { useContext, useState } from 'react';
import { CartContext } from '../../App';

const ProductCard = ({name,id,price,imageUrl}) => {

    
    const {addCart} = useContext(CartContext);
    
    const handleAddToCart = () => {
        addCart({name, id, price, imageUrl})
    }

    return(
        <div className = {style.productContainer}>
            <div className={style.imageContainer}>
                <img className={style.productImage} src={imageUrl} alt="product-image"></img>
            </div>
            <div className = {style.productInformation}>
                <div className = {style.productTextContainer}>
                    <h3 className ={style.productTexts}>{name}</h3>
                    <h3 className ={style.productTexts}>Price:${price}</h3>
                    <h3 className ={style.productTexts}>Product-ID:{id}</h3>
                    <button className={style.addCartButton} onClick={handleAddToCart} >Add To Cart</button>
                </div>
            </div>
        </div>
    )
}
export default ProductCard