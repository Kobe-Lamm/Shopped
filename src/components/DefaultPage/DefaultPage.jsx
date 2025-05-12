import NavigationBar from "../Navigationbar/NavigationBar"
import styles from './DefaultPage.module.css'
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import ProductCard from "../ProductCard/ProductCard"
import LoadingPage from "../LoadingPage/LoadingPage"

const DefaultPage = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [products, setProducts] = useState([]);
    
    const fetchingData = () => {
        fetch('https://fakestoreapi.com/products')
        .then(response=>{
            if (response.status >= 404) {throw new Error("error-server")}
            return response.json();
        })
        .then((data) => {
            setProducts(data);
        })
        .catch(error => setError(error))
        .finally(setLoading(false))
    }

    useEffect(()=>{
        fetchingData()
    }, []);
    console.log(products);
    if (loading) {return <p>loading...</p>}
    if (error) {return <p>A Network Error has occurred...</p>}

    function renderProducts () {
        return products.map((product)=>(
            <ProductCard id={product.id} name={product.title} key={product.id} price={product.price} imageUrl={product.image} />
        ))
    }

    return (
        <div>
            <h1>Welcome! Here are our products:</h1>
            <div className = {styles.productContainer}>{renderProducts()}</div>
        </div>
    )
}

export default DefaultPage