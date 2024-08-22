// src/contexts/AuthContext.js

import React, { createContext, useState, useEffect } from "react";
import authService from "../services/auth";
import { useUsers } from "./User";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { fetchUser } = useUsers();
  const login = async (data) => {
    try {
      const response = await authService.login(data);
      localStorage.setItem("accesstoken", response.data.tokens.access);
      localStorage.setItem("refreshtoken", response.data.tokens.refresh);
      const decoded = jwtDecode(response.data.tokens.access);
      await fetchUser(decoded.user_id);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const changePassword = async (data) => {
    try {
      return await authService.changePassword(data);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const checkResetOtp = async (data) => {
    try {
      return await authService.checkResetOtp(data);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const emailVerify = async (uidb64, token) => {
    try {
      return await authService.emailVerify(uidb64, token);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const refreshLogin = async (data) => {
    try {
      return await authService.refreshLogin(data);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const registerSeller = async (data) => {
    try {
      return await authService.registerSeller(data);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const register = async (data) => {
    try {
      return await authService.register(data);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const requestResetEmail = async (data) => {
    try {
      return await authService.requestResetEmail(data);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const resetPassword = async (data) => {
    try {
      return await authService.resetPassword(data);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const value = {
    login,
    changePassword,
    checkResetOtp,
    emailVerify,
    refreshLogin,
    registerSeller,
    register,
    requestResetEmail,
    resetPassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
