export const backend_headers = {
  // "x-api-key": process.env.REACT_APP_PROFILE_BACKEND_API_KEY,
  Accept: "application/json",
  "Content-Type": "application/json",
};

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
  return res.json().catch((e) => {
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

  return res.json().catch((e) => {
    console.log(e);
    return {};
  });
};


