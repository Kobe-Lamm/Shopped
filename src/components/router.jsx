
import ShoppingPage from "./MoviesPage/MoviesPage"
import RouterPage from "./RouterPage"
import DefaultPage from "./DefaultPage/DefaultPage"
import ErrorPage from "./ErrorPage/ErrorPage"

const routes = [
    {
        path: '/',
        element: <RouterPage />,
        children: [
            { index: true, element: <DefaultPage/>},
            { path: "shoppingcart", element: <ShoppingPage />},
        ],
        errorElement: <ErrorPage />
    }
    ]

export default routes