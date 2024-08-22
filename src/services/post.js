import axiosInstance from "./api";

const postsService = {
  getPostsList: async () => {
    return axiosInstance.get(`/posts/`);
  },

  createPost: async (data) => {
    return axiosInstance.post(`/posts/`, data);
  },

  createFavoritePost: async (data) => {
    return axiosInstance.post(`/posts/favorite/create`, data);
  },

  deleteFavoritePost: async (id) => {
    return axiosInstance.delete(`/posts/favorite/delete/${id}/`);
  },

  getPost: async (id) => {
    return axiosInstance.get(`/posts/${id}`);
  },

  updatePost: async (id, data) => {
    return axiosInstance.put(`/posts/${id}`, data);
  },

  partialUpdatePost: async (id, data) => {
    return axiosInstance.patch(`/posts/${id}`, data);
  },

  deletePost: async (id) => {
    return axiosInstance.delete(`/posts/${id}`);
  },
};

export default postsService;
