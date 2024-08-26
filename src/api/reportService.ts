import { api } from "./index";
import { handleHttpError } from './usersService';

export const getCreatorReports = async (payload: any) => {
  const url =  '/reports/get-creator-reports';
  try{
    const response = await api.post(url, payload);
    return response.data;
  } catch (error: any) {
    handleHttpError(error);
    return {}; 
  }
};


export const getUserReports = async () => {
    const url = '/reports/get-user-reports'; 
    try {
      const response = await api.post(url);
      return response.data;
    } catch (error: any) {
      handleHttpError(error);
      return {}; 
    }
  };