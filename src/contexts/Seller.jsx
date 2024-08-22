import React, { createContext, useState, useContext, useEffect } from "react";
import sellersService from "../services/seller";

const SellersContext = createContext();

export const SellersProvider = ({ children }) => {
  const [sellers, setSellers] = useState([]);
  const [seller, setSeller] = useState(null);
  const [orders, setOrders] = useState([]);
  const [posts, setPosts] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSellers = async () => {
    try {
      const response = await sellersService.getSellersList();
      console.log(response);
      setSellers(response.results);
    } catch (error) {
      throw error;
    }
  };

  const fetchSeller = async (id) => {
    try {
      const response = await sellersService.getSeller(id);
      setSeller(response.data);
    } catch (error) {
      // throw error;
      throw "Unable to get seller details";
    }
  };

  const fetchOrders = async (id) => {
    try {
      const response = await sellersService.getSellerOrdersList(id);
      setOrders(response.data);
    } catch (error) {
      throw error;
    }
  };

  const fetchPosts = async (id) => {
    try {
      const response = await sellersService.getSellerPostsList(id);
      setPosts(response.data);
    } catch (error) {
      throw error;
    }
  };

  const createfavouriteSeller = async (data) => {
    try {
      const response = await sellersService.createFavoriteSeller(data);
      setPosts(response.data);
    } catch (error) {
      throw error;
    }
  };

  const fetchProducts = async (id) => {
    try {
      const response = await sellersService.getSellerProducts(id);
      setProducts(response.data);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    const getInitalSellers = async () => {
      setLoading(true);
      await fetchSellers();
      setLoading(false);
    };
    getInitalSellers();
  }, []);

  return (
    <SellersContext.Provider
      value={{
        sellers,
        seller,
        orders,
        posts,
        products,
        loading,
        fetchSellers,
        fetchSeller,
        fetchOrders,
        fetchPosts,
        fetchProducts,
        createfavouriteSeller,
      }}
    >
      {children}
    </SellersContext.Provider>
  );
};

export const useSellers = () => {
  const context = useContext(SellersContext);
  if (!context) {
    throw new Error("useSellers must be used within a SellersProvider");
  }
  return context;
};
