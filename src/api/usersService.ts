import { api } from "./index";

export const backend_headers = {
  // "x-api-key": process.env.REACT_APP_PROFILE_BACKEND_API_KEY,
  Accept: "application/json",
  "Content-Type": "application/json",
};

// Helper function to handle HTTP errors
export const handleHttpError = (error: any) => {
  const { response } = error;
  if (response && response.status >= 400) {
    const errorMessage = response.data?.message || response.statusText;
    console.error(
      `Error: ${response.status} ${response.statusText}. Response body: ${errorMessage}`
    );
    throw new Error(errorMessage);
  } else {
    console.error(`Unexpected Error: ${error.message}`);
    throw error;
  }
};

// Register a new user
export const registerUser = async (
  name: string,
  email: string,
  password: string
) => {
  const url = "/auth/register";

  const payload = {
    name,
    email,
    password,
  };

  try {
    const response = await api.post(url, payload);
    return response.data;
  } catch (error: any) {
    handleHttpError(error);
  }
};

// Log in a user
export const login = async (email: string, password: string) => {
  const url = "/auth/login";

  const payload = {
    email,
    password,
  };

  try {
    const response = await api.post(url, payload);
    return response.data;
  } catch (error: any) {
    handleHttpError(error);
  }
};

// Get current user
export const getCurrentUser = async () => {
  const url = "/user/me";

  try {
    const response = await api.get(url);
    return response.data;
  } catch (error: any) {
    handleHttpError(error);
  }
};

export const logout = async () => {
  try {
    await api.post("/auth/logout");
  } catch (error: any) {
    handleHttpError(error);
  }
};

export const updateUserRole = async (role: { role: string }) => {
  const url = "user/update-role";

  const payload = {
    role,
  };

  try {
    const response = await api.patch(url, payload);
    return response.data;
  } catch (error: any) {
    handleHttpError(error);
  }
};
