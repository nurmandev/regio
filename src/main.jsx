import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./router";
import { AuthProvider } from "./contexts/Auth";
import { APIProvider } from "@vis.gl/react-google-maps";
import { SellersProvider } from "./contexts/Seller";
import { UsersProvider } from "./contexts/User";
import { OrdersProvider } from "./contexts/Order";
import { NotificationsProvider } from "./contexts/Notification";
import { ProductsProvider } from "./contexts/Product";
import { PostsProvider } from "./contexts/Post";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UsersProvider>
      <AuthProvider>
        <APIProvider apiKey={"AIzaSyDKkCXlgRItuMK6eKdJ-X1todgObwINWcc"}>
          <SellersProvider>
            <OrdersProvider>
              <NotificationsProvider>
                <ProductsProvider>
                  <PostsProvider>
                    <RouterProvider router={router} />
                  </PostsProvider>
                </ProductsProvider>
              </NotificationsProvider>
            </OrdersProvider>
          </SellersProvider>
        </APIProvider>
      </AuthProvider>
    </UsersProvider>
  </React.StrictMode>
);
