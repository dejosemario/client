import { api } from "./index";
import { handleHttpError } from './usersService';

export const getClientSecret = async (amount: number) => {
  const url = '/payment/create-client-secret'; // Adjusted the URL
  const payload = { amount };

  try {
    const response = await api.post(url, payload);
    return response.data;
  } catch (error: any) {
    handleHttpError(error);
    return {}; 
  }
};
