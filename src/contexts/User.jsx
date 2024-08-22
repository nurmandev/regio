import React, { createContext, useState, useContext, useEffect } from "react";
import usersService from "../services/user";
import { jwtDecode } from "jwt-decode";

const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check user authentication status on mount
    const checkAuthStatus = async () => {
      try {
        const token = localStorage.getItem("accesstoken");
        const decoded = jwtDecode(token);
        if (token) {
          await fetchUser(decoded.user_id);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    checkAuthStatus();
  }, []);

  const fetchUserFavorites = async () => {
    try {
      const response = await usersService.getUserFavorites();
      setFavorites(response);
    } catch (error) {
      throw error;
    }
  };

  const fetchUserOrders = async () => {
    try {
      const response = await usersService.getUserOrders();
      setOrders(response);
    } catch (error) {
      throw error;
    }
  };

  const fetchUser = async (id) => {
    try {
      const response = await usersService.getUser(id);
      console.log(response);
      setUser(response.data);
    } catch (error) {
      throw error;
    }
  };

  const updateUser = async (id, data) => {
    try {
      const response = await usersService.updateUser(id, data);
      setUser(response.data);
    } catch (error) {
      throw error;
    }
  };

  const partialUpdateUser = async (id, data) => {
    try {
      const response = await usersService.partialUpdateUser(id, data);
      setUser(response.data);
    } catch (error) {
      throw error;
    }
  };

  const deleteUser = async (id) => {
    try {
      await usersService.deleteUser(id);
      // setUser(null);
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem("regiotoken");
    setUser(null);
  };

  return (
    <UsersContext.Provider
      value={{
        user,
        favorites,
        orders,
        loading,
        logout,
        fetchUserFavorites,
        fetchUserOrders,
        fetchUser,
        updateUser,
        partialUpdateUser,
        deleteUser,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export const useUsers = () => {
  const context = useContext(UsersContext);
  if (!context) {
    throw new Error("useUsers must be used within a UsersProvider");
  }
  return context;
};
