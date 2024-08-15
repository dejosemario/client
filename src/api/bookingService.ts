
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

// export const createBooking = async (data: any) => {
//     const response = await axios.post("/api/bookings/create-booking", data);
//     return response.data;
//   };