
import style from './CheckOutProductPage.module.css'

const CheckOutProductCard = ({name, id, price, imageUrl, count}) => {
    return(
         <div className={style.productCardContainer}>
         <div className={style.imageContainer}>
            <img className={style.imageCheckout} src={imageUrl} alt="image-text"></img>
         </div>
         <div className={style.productTextContainer}>
            <h3>{name}</h3>
            <h3>Price: ${price}</h3>
            <h3>{id}</h3>
            <div className={style.quantityControl}>
                <h3>{count}</h3>
                <button className={style.quantityButton}>+</button>
                <button className={style.quantityButton}>-</button>
            </div>
         </div>
    </div>
    )
}

export default CheckOutProductCard