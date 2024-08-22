import axiosInstance from "./api";

const authService = {
  changePassword: (data) => axiosInstance.patch("/auth/change-password/", data),
  checkResetOtp: (data) => axiosInstance.post("/auth/check-reset-otp/", data),
  emailVerify: (uidb64, token) =>
    axiosInstance.get(`/auth/email-verify/${uidb64}/${token}/`),
  login: async (data) => {
    try {
      const res = await axiosInstance.post("/auth/login/", data);
      return res;
    } catch (error) {
      throw error;
    }
  },
  refreshLogin: (data) => axiosInstance.post("/auth/login/refresh/", data),
  registerSeller: (data) => axiosInstance.post("/auth/register-seller/", data),
  register: (data) => axiosInstance.post("/auth/register/", data),
  requestResetEmail: (data) =>
    axiosInstance.post("/auth/request-reset-email/", data),
  resetPassword: (data) => axiosInstance.patch("/auth/reset-password/", data),
};

export default authService;
