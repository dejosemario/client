import { api } from "./index";
import { handleHttpError } from "./usersService";


export const createEvent = async (event: any) => {
  const url = '/events/create'; // Adjusted the URL

  try {
    const response = await api.post(url, event);
    return response.data;
  } catch (error: any) {
    handleHttpError(error);
  }
};

export const updateEvent = async (id: string, event: any) => {
  const url = `/events/update/${id}`; // Adjusted the URL

  try {
    const response = await api.put(url, event);
    return response.data;
  } catch (error: any) {
    handleHttpError(error);
  }
};

export const getEvents = async (filters: any) => {
  const url = `/events/all?searchText=${filters.searchText}&date=${filters.date}`; // Adjusted the URL

  try {
    const response = await api.get(url);
    return response.data;
  } catch (error: any) {
    handleHttpError(error);
    return []; // Return an empty array in case of error
  }
};

export const getEventsByCreator = async () => {
  const url = '/events/creator'; // Adjusted the URL

  try {
    const response = await api.get(url);
    return response.data;
  } catch (error: any) {
    handleHttpError(error);
    return []; // Return an empty array in case of error
  }
};

export const getEventById = async (id: string) => {
  const url = `/events/${id}`; // Adjusted the URL

  try {
    const response = await api.get(url);
    return response.data;
  } catch (error: any) {
    handleHttpError(error);
    return {}; // Return an empty object in case of error
  }
};

export const deleteEvent = async (id: string) => {
  const url = `/events/delete/${id}`; // Adjusted the URL

  try {
    const response = await api.delete(url);
    return response.data;
  } catch (error: any) {
    handleHttpError(error);
    return {}; // Return an empty object in case of error
  }
};
