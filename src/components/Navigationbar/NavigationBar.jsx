
import styles from './navbar.module.css';
import { Link } from 'react-router-dom'


const NavigationBar = () => {
    return (
        <nav className = {styles.navigationBar}>
            <h1 className = {styles.logo}>SHOPPED</h1>
            <ul className = {styles.navigationOptions}>
                <li><Link className = {styles.navigationLists} to='/'>HOME</Link></li>
                <li><Link className = {styles.navigationLists} to='/shoppingcart'>Shopping Cart</Link></li>
            </ul>
        </nav>
    )
}

export default NavigationBar