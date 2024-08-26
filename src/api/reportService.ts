import { api } from "./index";
import { handleHttpError } from './usersService';

export const getAdminReports = async (payload: any) => {
  const url = '/payment/create-client-secret'; // Adjusted the URL
  try {
    const response = await api.post(url, payload);
    return response.data;
  } catch (error: any) {
    handleHttpError(error);
    return {}; 
  }
};
