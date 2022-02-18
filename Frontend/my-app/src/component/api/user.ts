import axiosClient from "./index";
import { LoginFormData, UserResponseData } from "../interface/index";
import User from "../home/feature/User/User";
import { AxiosError } from "axios";
export const getUser = async (
  data: LoginFormData
): Promise<UserResponseData> => {
  const URL = "/auth/login";
  return axiosClient.post(URL, data);
};
export const addUser = async (
  data: LoginFormData
): Promise<UserResponseData> => {
  const URL = "/auth/register";
  return axiosClient.post(URL, data);
};
