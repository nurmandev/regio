import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./pages/Error";
import Auth from "./pages/auth";
import Map from "./pages/protected";
import ForgotPassword from "./pages/auth/login/ForgotPassword";
import Register from "./pages/auth/register";
import Seller from "./pages/auth/register/Seller";
import Favourite from "./pages/protected/Favourite";
import SellersList from "./pages/protected/SellersList";
import SellerProfile from "./pages/protected/SellersList/Seller";
import Profile from "./pages/protected/Profile";
import Cart from "./pages/protected/Cart";
import Posts from "./pages/protected/Posts";
import Detail from "./pages/protected/Posts/Detail";
import Settings from "./pages/protected/Profile/Settings";
import Order from "./pages/protected/Profile/Order";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App element={<Map />} />,
    children: [
      { path: "favourites", element: <Favourite /> },
      {
        path: "sellers",
        element: <SellersList />,
      },
      { path: "sellers/:id", element: <SellerProfile /> },
      {
        path: "profile",
        element: <Profile />,
        children: [
          { path: "settings", element: <Settings /> },
          { path: "order", element: <Order /> },
        ],
      },
      {
        path: "posts",
        element: <Posts />,
        children: [{ path: ":id", element: <Detail /> }],
      },
      { path: "cart", element: <Cart /> },
    ],
  },
  {
    path: "auth",
    element: <Auth />,
    children: [
      { path: "forgot-password", element: <ForgotPassword /> },
      { path: "register", element: <Register /> },
      { path: "register-seller", element: <Seller /> },
    ],
  },
]);

export default router;
