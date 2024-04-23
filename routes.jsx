import Home from "./src/pages/Home/Home"
import Users from "./src/pages/Users/Users"
import NewUser from "./src/pages/NewUser/NewUser"
import Products from "./src/pages/Products/Products"

let routes = [
    { path: "/", element: <Home />},
    { path: "/Users", element: <Users />},
    { path: "/NewUser", element: <NewUser />},
    { path: "/Products", element: <Products />},
]

export default routes