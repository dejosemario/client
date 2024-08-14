export const backend_headers = {
  // "x-api-key": process.env.REACT_APP_PROFILE_BACKEND_API_KEY,
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const handleHttpError = async (res:Response) =>{
  if(!res.ok){
    const errorResponse = await res.json();
    console.error(
      `Error: ${res.status} ${res.statusText}. Response body: ${errorResponse}`
    );
    throw new Error(`${errorResponse.message}`);
  }
}


export const registerUser = async (
  name: string,
  email: string,
  password: string
) => {
  const url = `/api/auth/register`;

  const payload = {
    name,
    email,
    password,
  };

  const res = await fetch(url, {
    method: "POST",
    headers: backend_headers,
    body: JSON.stringify(payload),
  });

  await handleHttpError(res);

  return await res.json().catch((e) => {
    console.error(e.message);
    return {};
  });
};

export const login = async (email: string, password: string) => {
  const url = `/api/auth/login`;

  const payload = {
    email,
    password,
  };

  const res = await fetch(url, {
    method: "POST",
    headers: backend_headers,
    body: JSON.stringify(payload),
  });

  await handleHttpError(res);


  return res.json().catch((e) => {
    console.log(e);
    return {};
  });
};

export const getCurrentUser = async () => {
  const url = "/api/user/me";
  const res = await fetch(url, {
    method: "GET",
    headers: backend_headers,
  });

  await handleHttpError(res);

  return res.json().catch((e) => {
    console.log(e);
    return {};
  });
};


