import axiosInstance from "./api";

const ordersService = {
  createOrder: async (data) => {
    return axiosInstance.post(`/orders/`, data);
  },

  getOrder: async (id) => {
    return axiosInstance.get(`/orders/${id}/`);
  },

  updateOrder: async (id, data) => {
    return axiosInstance.put(`/orders/${id}/`, data);
  },

  partialUpdateOrder: async (id, data) => {
    return axiosInstance.patch(`/orders/${id}/`, data);
  },
};

export default ordersService;
