import { FC, useEffect, useState } from "react";
import { Button, Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { registerUser, login } from "../../api/usersService";
import { handleAuthProps } from "../../types/index";
import usersGlobalStore, { UsersStoreType } from "../../store/users.store";
import { getCurrentUser } from "../../api/usersService";



interface AuthFormProps {
  type: "register" | "login";
}

export const AuthForm: FC<AuthFormProps> = ({ type }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setCurrentUser }: UsersStoreType =
    usersGlobalStore() as UsersStoreType;

  const handleAuth = async ({ name, email, password }: handleAuthProps) => {
    if (type === "register") {
      // Call registerUser function
      try {
        setLoading(true);
        const response = await registerUser(name, email, password);
        message.success(response.message);
        navigate("/login");
      } catch (e: any) {
        message.error(e.message || "An unexcepted error occured");
      } finally {
        setLoading(false);
      }
    }

    if (type === "login") {
      try {
        setLoading(true);
        const response = await login(email, password);
        
        if (response.success) {
          localStorage.setItem("user", JSON.stringify(response.data));
          setCurrentUser(response.data);
          message.success(response.message);
          navigate("/");
          setLoading(false);
        } else {
          message.error(response.message);
        }
      } catch (e: any) {
        message.error(e.response?.data.message || e.message);
      } finally {
        setLoading(false);
      }
    }
  };
  
  useEffect(() => {
    
  const getUserData = async ()=>{
    try {
      setLoading(true);
      const response = await getCurrentUser();
      setCurrentUser(response.data);
    } catch (error) {
      message.error("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  }
      
      getUserData();
    }, [setCurrentUser]);



  return (
    <Form
      className="flex flex-col gap-5 w-[80%] lg:w-96"
      layout="vertical"
      onFinish={handleAuth}
    >
      <h1 className="text-2xl font-bold text-gray-600">
        {type === "register" ? " Register your account" : "Login"}
      </h1>
      {type === "register" && (
        <Form.Item
          name="name"
          required
          label="Name"
          rules={[{ required: true }]}
        >
          <Input placeholder="Name" />
        </Form.Item>
      )}
      <Form.Item
        name="email"
        required
        label="Email"
        rules={[{ required: true }]}
      >
        <Input type="email" placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="password"
        required
        label="Password"
        rules={[{ required: true }]}
      >
        <Input.Password placeholder="Password" />
      </Form.Item>
      <Button type="primary" htmlType="submit" block loading={loading}>
        {type === "register" ? "Register" : "Login"}
      </Button>
      <Link
        to={type === "register" ? "/login" : "/register"}
        className="text-center"
      >
        {type === "register"
          ? " Already have an account? Login"
          : "Don't have an account? Sign up"}
      </Link>
    </Form>
  );
};
