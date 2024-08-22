import React, { createContext, useState, useContext, useEffect } from "react";
import ordersService from "../services/order";

const OrdersContext = createContext();

export const OrdersProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createOrder = async (data) => {
    setLoading(true);
    setError(null);
    try {
      const response = await ordersService.createOrder(data);
      setOrders((prevOrders) => [...prevOrders, response.data]);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchOrder = async (id) => {
    setLoading(true);
    setError(null);
    try {
      const response = await ordersService.getOrder(id);
      setOrder(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const updateOrder = async (id, data) => {
    setLoading(true);
    setError(null);
    try {
      const response = await ordersService.updateOrder(id, data);
      setOrders((prevOrders) =>
        prevOrders.map((order) => (order.id === id ? response.data : order))
      );
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const partialUpdateOrder = async (id, data) => {
    setLoading(true);
    setError(null);
    try {
      const response = await ordersService.partialUpdateOrder(id, data);
      setOrders((prevOrders) =>
        prevOrders.map((order) => (order.id === id ? response.data : order))
      );
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <OrdersContext.Provider
      value={{
        orders,
        order,
        loading,
        error,
        createOrder,
        fetchOrder,
        updateOrder,
        partialUpdateOrder,
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
};

export const useOrders = () => {
  const context = useContext(OrdersContext);
  if (!context) {
    throw new Error("useOrders must be used within an OrdersProvider");
  }
  return context;
};
