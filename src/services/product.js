import axiosInstance from "./api";

const productsService = {
  getProductsList: async () => {
    return axiosInstance.get(`/products/`);
  },

  createProduct: async (data) => {
    return axiosInstance.post(`/products/`, data);
  },

  createFavoriteProduct: async (data) => {
    return axiosInstance.post(`/products/favorite/create`, data);
  },

  deleteFavoriteProduct: async (id) => {
    return axiosInstance.delete(`/products/favorite/delete/${id}/`);
  },

  getProduct: async (id) => {
    return axiosInstance.get(`/products/${id}/`);
  },

  updateProduct: async (id, data) => {
    return axiosInstance.put(`/products/${id}/`, data);
  },

  partialUpdateProduct: async (id, data) => {
    return axiosInstance.patch(`/products/${id}/`, data);
  },

  deleteProduct: async (id) => {
    return axiosInstance.delete(`/products/${id}/`);
  },

  createProductImage: async (id, data) => {
    return axiosInstance.post(`/products/${id}/image/`, data);
  },

  deleteProductImage: async (id, image_pk) => {
    return axiosInstance.delete(`/products/${id}/image/${image_pk}`);
  },
};

export default productsService;
