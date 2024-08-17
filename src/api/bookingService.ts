import { api } from "./index"// Adjust the path accordingly

import { handleHttpError } from "./usersService"; // Adjust the path accordingly

// Create a new booking
export const createBooking = async (data: any) => {
  const url = '/bookings/create-booking'; // Adjusted the URL

  try {
    const response = await api.post(url, data);
    return response.data;
  } catch (error: any) {
    handleHttpError(error);
  }
};

// Cancel an existing booking
export const cancelBooking = async (data: any) => {
  const url = '/bookings/cancel-booking'; // Adjusted the URL

  try {
    const response = await api.post(url, data);
    return response.data;
  } catch (error: any) {
    handleHttpError(error);
  }
};

// Get bookings for the current user
export const getUserBookings = async () => {
  const url = '/bookings/get-user-bookings'; // Adjusted the URL

  try {
    const response = await api.get(url);
    return response.data;
  } catch (error: any) {
    handleHttpError(error);
  }
};

// Get all bookings
export const getAllBookings = async () => {
  const url = '/bookings/get-all-bookings'; // Adjusted the URL

  try {
    const response = await api.get(url);
    return response.data;
  } catch (error: any) {
    handleHttpError(error);
  }
};
