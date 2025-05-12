import { Outlet } from "react-router-dom";
import NavigationBar from "./Navigationbar/NavigationBar";

const RouterPage = () => { 
    return(
        <div>
            <NavigationBar />
            <Outlet />
        </div>
    )
 }

 export default RouterPage