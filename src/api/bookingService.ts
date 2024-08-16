
import { backend_headers } from "./usersService";
import { handleHttpError } from "./usersService";

export const createBooking = async (data: any) => {
    const url = "/api/bookings/create-booking";
    const res = await fetch(url, {
        method: "POST",
        headers: backend_headers,
        body: JSON.stringify(data),
    });
    await handleHttpError(res);

    return res.json().catch((e) => {
        console.error(e.message);
        return {};
    });
  
};

export const cancelBooking = async (data: any) => {
    const url = "/api/bookings/cancel-booking";
    const res = await fetch(url, {
        method: "POST",
        headers: backend_headers,
        body: JSON.stringify(data),
    });
    await handleHttpError(res);

    return res.json().catch((e) => {
        console.error(e.message);
        return {};
    });
}

export const getUserBookings = async () => {
    const url = "/api/bookings/get-user-bookings";
    const res = await fetch(url, {
        method: "GET",
        headers: backend_headers,
    });
    // await handleHttpError(res);
    if(!res.ok){
        const errorResponse = await res.json();
        console.error(
          `Error: ${res.status} ${res.statusText}. Response body: ${errorResponse}`
        );
        throw new Error(`${errorResponse.message}`);
      }

    return res.json().catch((e) => {
        console.error(e.message, "I am the erorrorrror");
        return {};
    });
}

export const getAllBookings = async () => {
    const url = "/api/bookings/get-all-bookings";
    const res = await fetch(url, {
        method: "GET",
        headers: backend_headers,
    });
    await handleHttpError(res);

    return res.json().catch((e) => {
        console.error(e.message);
        return {};
    });
}