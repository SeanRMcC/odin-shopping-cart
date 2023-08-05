import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import Store from "./components/Store";

function Route(){

    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            children: [
                {index: true, element: <Home />},
                {path: "store", element: <Store />}
            ]
        }
    ]);

    return (
        <RouterProvider router={router} />
    );
}

export default Route;