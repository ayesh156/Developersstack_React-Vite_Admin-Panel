import MainDrawer from "./components/MainDrawer.tsx";
import {createBrowserRouter, redirect, RouterProvider,} from "react-router-dom";
import CustomerTable from "./components/Customer/CustomerTable.tsx";
import ProductPage from "./components/Product/ProductPage.tsx";
import OrderTable from "./components/Order/OrderTable.tsx";
import LoginPage from "./components/LoginPage.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainDrawer />,
        children: [
            {
              index: true,
              loader: async () => redirect('/customer'),
            },
            {
                path: "customer",
                element: <CustomerTable />,
            },
            {
                path: "product",
                element: <ProductPage />,
            },
            {
                path: "order",
                element: <OrderTable />,
            },
        ]
    },
    {
        path: "/login",
        element: <LoginPage />,
    }
]);

function App() {

  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
