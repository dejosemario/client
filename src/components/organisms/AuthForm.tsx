import { FC } from "react";
import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";

export const AuthForm: FC<AuthFormProps> = ({ type }) => {
  const handleSubmit = (values: never) => {
    console.log(values);
  };

  return (
    <Form
      className="flex flex-col gap-5 w-[80%] lg:w-96"
      layout="vertical"
      onFinish={handleSubmit}
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
      <Button type="primary" htmlType="submit" block>
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

interface AuthFormProps {
  type: "register" | "login";
}
