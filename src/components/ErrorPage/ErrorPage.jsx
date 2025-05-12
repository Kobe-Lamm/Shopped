import { Link } from "react-router-dom"
const ErrorPage = () => {
    return(
        <div>
            <h1>Error 404! Page not found...</h1>
            <button><Link to= "/" >GO BACK</Link></button>
        </div>
    )
}

export default ErrorPage