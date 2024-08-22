import React, { createContext, useState, useContext, useEffect } from "react";
import notificationsService from "../services/notification";
import { useUsers } from "./User";

const NotificationsContext = createContext();

export const NotificationsProvider = ({ children }) => {
  const { user } = useUsers();
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchNotifications = async () => {
    setError(null);
    try {
      const response = await notificationsService.getNotifications();
      setNotifications(response.data);
    } catch (error) {
      setError(error.message);
    }
  };

  const updateNotification = async (id, data) => {
    setError(null);
    try {
      const response = await notificationsService.updateNotification(id, data);
      setNotifications((prevNotifications) =>
        prevNotifications.map((notification) =>
          notification.id === id ? response.data : notification
        )
      );
    } catch (error) {
      setError(error.message);
    }
  };

  const partialUpdateNotification = async (id, data) => {
    setError(null);
    try {
      const response = await notificationsService.partialUpdateNotification(
        id,
        data
      );
      setNotifications((prevNotifications) =>
        prevNotifications.map((notification) =>
          notification.id === id ? response.data : notification
        )
      );
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    const getNotification = async () => {
      if (!user) return;
      setLoading(true);
      await fetchNotifications();
      setLoading(false);
    };
    getNotification();
  }, [user]);

  return (
    <NotificationsContext.Provider
      value={{
        notifications,
        loading,
        error,
        fetchNotifications,
        updateNotification,
        partialUpdateNotification,
      }}
    >
      {children}
    </NotificationsContext.Provider>
  );
};

export const useNotifications = () => {
  const context = useContext(NotificationsContext);
  if (!context) {
    throw new Error(
      "useNotifications must be used within a NotificationsProvider"
    );
  }
  return context;
};
