import Home from "./src/pages/home/Home"
import Users from "./src/pages/users/Users"
import NewUser from "./src/pages/newUser/NewUser"
import Products from "./src/pages/products/Products"

let routes = [
    { path: "/", element: <Home />},
    { path: "/Users", element: <Users />},
    { path: "/NewUser", element: <NewUser />},
    { path: "/Products", element: <Products />},
]

export default routes