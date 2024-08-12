import { backend_headers } from "./usersService";

export const createEvent = async (event: any) => {
  const url = "/api/events/create";
  const res = await fetch(url, {
    method: "POST",
    headers: backend_headers,
    body: JSON.stringify(event),
  });
  
  if (!res.ok) {
    // Check if the response status is not OK
    throw new Error(`Error: ${res.status} ${res.statusText}`);
  }


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
  if (!res.ok) {
    // Check if the response status is not OK
    throw new Error(`Error: ${res.status} ${res.statusText}`);
  }

  return res.json().catch((e) => {
    console.error(e.message);
    return {};
  });
};

export const getEventById = async (id: string) => {
  const url = `/api/events/${id}`;
  const res = await fetch(url, {
    method: "GET",
    headers: backend_headers,
  });
  if (!res.ok) {
    // Check if the response status is not OK
    throw new Error(`Error: ${res.status} ${res.statusText}`);
  }


  return res.json().catch((e) => {
    console.log(e);
    return {};
  });
};
