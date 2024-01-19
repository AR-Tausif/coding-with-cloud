import { createBrowserRouter } from "react-router-dom";
import Home from "../components/layout/Home";
import App from "../App";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Home/>,
        children:[
            {
                path:"/",
                element:<App/>
            }
        ]
    }
])

export default router;