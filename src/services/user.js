import axiosInstance from "./api";

const usersService = {
  getUserFavorites: async () => {
    return axiosInstance.get(`/users/favorites`);
  },

  getUserOrders: async () => {
    return axiosInstance.get(`/users/orders`);
  },

  getUser: async (id) => {
    return axiosInstance.get(`/users/${id}`);
  },

  updateUser: async (id, data) => {
    return axiosInstance.put(`/users/${id}`, data);
  },

  partialUpdateUser: async (id, data) => {
    return axiosInstance.patch(`/users/${id}`, data);
  },

  deleteUser: async (id) => {
    return axiosInstance.delete(`/users/${id}`);
  },
};

export default usersService;
