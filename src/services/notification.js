import axiosInstance from "./api";

const notificationsService = {
  getNotifications: async () => {
    return axiosInstance.get(`/notifications/`);
  },

  updateNotification: async (id, data) => {
    return axiosInstance.put(`/notifications/${id}`, data);
  },

  partialUpdateNotification: async (id, data) => {
    return axiosInstance.patch(`/notifications/${id}`, data);
  },
};

export default notificationsService;
