import { backend_headers } from "./usersService";

export const createEvent = async (event: any) => {
  const url = "/api/events/create";
  const res = await fetch(url, {
    method: "POST",
    headers: backend_headers,
    body: JSON.stringify(event),
  });

  if (!res.ok) {
    // Read and log the response body for debugging
    const errorResponse = await res.text(); // or res.json() if the error response is in JSON format
    console.error(
      `Error: ${res.status} ${res.statusText}. Response body: ${errorResponse}`
    );
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

export const getEvents = async (filters: {
  searchText?: string;
  startDate?: Date;
  endDate?: Date;
}) => {
  const queryParams = new URLSearchParams();
  if (filters.searchText) {
    queryParams.append("searchText", filters.searchText);
  }
  if (filters.startDate) {
    queryParams.append("startDate", filters.startDate.toISOString());
  }
  if (filters.endDate) {
    queryParams.append("endDate", filters.endDate.toISOString());
  }
  const url = `/api/events/all?${queryParams.toString()}`;

  // Fetch the data
  const res = await fetch(url, {
    method: "GET",
    headers: backend_headers,
  });

  if (!res.ok) {
    // Read and log the response body for debugging
    const errorResponse = await res.text(); // or res.json() if the error response is in JSON format
    console.error(
      `Error: ${res.status} ${res.statusText}. Response body: ${errorResponse}`
    );
    throw new Error(`Error: ${res.status} ${res.statusText}`);
  }
  console.log(res, "I am the repsonse you are looking for");

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
  if (!res.ok) {
    // Check if the response status is not OK
    throw new Error(`Error: ${res.status} ${res.statusText}`);
  }

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
    if (!res.ok) {
        // Check if the response status is not OK
        throw new Error(`Error: ${res.status} ${res.statusText}`);
    }
    
    return await res.json().catch((e) => {
        console.error(e.message);
        return {};
    });
    };