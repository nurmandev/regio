import axiosInstance from "./api";

const sellersService = {
  getSellersList: async () => {
    return axiosInstance.get(`/sellers/`);
  },

  createFavoriteSeller: async (data) => {
    console.log(data);
    return axiosInstance.post(`/sellers/favorite/create`, data);
  },

  deleteFavoriteSeller: async (id) => {
    return axiosInstance.delete(`/sellers/favorite/delete/${id}/`);
  },

  getSeller: async (id) => {
    return axiosInstance.get(`/sellers/${id}/`);
  },

  updateSeller: async (id, data) => {
    return axiosInstance.put(`/sellers/${id}/`, data);
  },

  partialUpdateSeller: async (id, data) => {
    return axiosInstance.patch(`/sellers/${id}/`, data);
  },

  deleteSeller: async (id) => {
    return axiosInstance.delete(`/sellers/${id}/`);
  },

  getSellerOrdersList: async (id) => {
    return axiosInstance.get(`/sellers/${id}/orders`);
  },

  getSellerOrder: async (id, orderId) => {
    return axiosInstance.get(`/sellers/${id}/orders/${orderId}`);
  },

  updateSellerOrder: async (id, orderId, data) => {
    return axiosInstance.put(`/sellers/${id}/orders/${orderId}`, data);
  },

  partialUpdateSellerOrder: async (id, orderId, data) => {
    return axiosInstance.patch(`/sellers/${id}/orders/${orderId}`, data);
  },

  getSellerPostsList: async (id) => {
    return axiosInstance.get(`/sellers/${id}/posts`);
  },

  getSellerProducts: async (id) => {
    return axiosInstance.get(`/sellers/${id}/products`);
  },
};

export default sellersService;
