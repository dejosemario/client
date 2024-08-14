import { backend_headers } from "./usersService";
import { handleHttpError } from "./usersService";

export const createEvent = async (event: any) => {
  const url = "/api/events/create";
  const res = await fetch(url, {
    method: "POST",
    headers: backend_headers,
    body: JSON.stringify(event),
  });

 handleHttpError(res);

  return res.json().catch((e) => {
    console.error(e.message);
    return {};
  });
};

export const updateEvent = async (id: string, event: any) => {
  const url = `/api/events/update/${id}`;
  const res = await fetch(url, {
    method: "PUT",
    headers: backend_headers,
    body: JSON.stringify(event),
  });
 
  await handleHttpError(res);

  return res.json().catch((e) => {
    console.error(e.message);
    return {};
  });
};

export const getEvents = async (filters:any) => {
  
  const url = `/api/events/all?searchText=${filters.searchText}&date=${filters.date}`

  // Fetch the data
  const res = await fetch(url, {
    method: "GET",
    headers: backend_headers,
  });

 await handleHttpError(res);

  return  res.json().catch((e) => {
    console.error(e.message);
    return [];
  });
};

export const getEventById = async (id: string) => {
  const url = `/api/events/${id}`;
  const res = await fetch(url, {
    method: "GET",
    headers: backend_headers,
  });

  await handleHttpError(res);

  return await res.json().catch((e) => {
    console.log(e);
    return {};
  });
};


export const deleteEvent = async (id: string) => {
    const url = `/api/events/delete/${id}`;
    const res = await fetch(url, {
        method: "DELETE",
        headers: backend_headers,
    });
    
   await handleHttpError(res);
    
    return await res.json().catch((e) => {
        console.error(e.message);
        return {};
    });
    };