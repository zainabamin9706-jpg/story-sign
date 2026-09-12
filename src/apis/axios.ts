import { notifications } from "@mantine/notifications";
import axiosInstance from "./axiosInstance";
import axios from "axios";
interface ApiOptions {
  successMessage?: string;
  showSuccess?: boolean;
  errorMessage?: string;
  showError?: boolean;
}
const handleSuccess = (message: string) => {
  notifications.show({
    title: "Success",
    message,
    position: "top-center",
    color: "teal",
  });
};
const handleError = (error: any) => {
  let message = "Something went wrong";
  if (axios.isAxiosError(error)) {
    message =
      error.response?.data?.message ||
      error.response?.data?.error ||
      error.message;
  }
  notifications.show({
    title: "Error",
    message,
    position: "top-center",
    color: "red",
  });
};
export const api = {
  get: async <T>(
    url: string,
    options: ApiOptions = {
      showSuccess: true,
      successMessage: "Record created Successfully!",
      showError: true,
    },
  ): Promise<T> => {
    try {
      const response = await axiosInstance.get<T>(url);
      return response.data;
    } catch (error) {
      if (options.showError !== false) handleError(error);
      throw error;
    }
  },
  upload: async <T>(
    url: string,
    file: File,
    options: ApiOptions = {
      showSuccess: true,
      successMessage: "File Uploaded Successfully!",
      showError: true,
    },
  ): Promise<T> => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const response = await axiosInstance.post<T>(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (options.showSuccess && options.successMessage) {
        handleSuccess(options.successMessage);
      }
      return response.data;
    } catch (error) {
      if (options.showError !== false) handleError(error);
      throw error;
    }
  },
  post: async <T>(
    url: string,
    data: object,
    options: ApiOptions = {
      showSuccess: true,
      successMessage: "Record created successfully!",
      showError: true,
    },
  ): Promise<T> => {
    try {
      const response = await axiosInstance.post<T>(url, data);
      if (options.showSuccess && options.successMessage) {
        handleSuccess(options.successMessage);
      }
      return response.data;
    } catch (error) {
      if (options.showError !== false) handleError(error);
      throw error;
    }
  },
  put: async <T>(
    url: string,
    data: object,
    options: ApiOptions = {
      showSuccess: true,
      successMessage: "Updated Successfully!",
      showError: true,
    },
  ): Promise<T> => {
    try {
      const response = await axiosInstance.put<T>(url, data);
      if (options.showSuccess && options.successMessage) {
        handleSuccess(options.successMessage);
      }
      return response.data;
    } catch (error) {
      if (options.showError !== false) handleError(error);
      throw error;
    }
  },
  patch: async <T>(
    url: string,
    data: object,
    options: ApiOptions = {
      showSuccess: true,
      successMessage: "Updated Successfully!",
      showError: true,
    },
  ): Promise<T> => {
    try {
      const response = await axiosInstance.patch<T>(url, data);
      if (options.showSuccess && options.successMessage) {
        handleSuccess(options.successMessage);
      }
      return response.data;
    } catch (error) {
      if (options.showError !== false) handleError(error);
      throw error;
    }
  },
  delete: async <T>(
    url: string,
    options: ApiOptions = {
      showSuccess: true,
      successMessage: "Record deleted Successfully!",
      showError: true,
    },
  ): Promise<T> => {
    try {
      const response = await axiosInstance.delete<T>(url);
      return response.data;
    } catch (error) {
      if (options.showError !== false) handleError(error);
      throw error;
    }
  },
};
