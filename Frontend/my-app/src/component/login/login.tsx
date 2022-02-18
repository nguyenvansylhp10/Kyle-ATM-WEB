import React from "react";
import "./login.scss";
import { Form, Input, Button, Checkbox } from "antd";
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import { setCurentUser } from "../home/feature/User/userslice";

import { getUser } from "../api/user";

import Home from "../home/home";
export default function Login() {
  const [Inputname, setInputname] = useState("");
  const [Inputpassword, setInputpassword] = useState("");

  const navigate = useNavigate();
  const handleLogin = async () => {
    alert("Login Success");
    console.log(Inputname);
    console.log(Inputpassword);

    const res = await getUser({ email: Inputname, password: Inputpassword });
    console.log(res);
    if (res.PRIVATE_TOKEN) {
      localStorage.setItem("token", res.PRIVATE_TOKEN);
      setCurentUser({
        id: res.user._id,
        email: res.user.email,
      });
      navigate("/home");
    } else alert(res.message);
  };

  function handleregister() {
    alert("This is page Register");
  }

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="wrapper">
      <h1>Page Login</h1>
      <Form
        style={{ marginTop: 32 }}
        name="basic"
        labelCol={{ span: 9 }}
        wrapperCol={{ span: 8 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input
            placeholder="Input Bank"
            size="large"
            value={Inputname}
            onChange={(e) => setInputname(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            placeholder="Input Bank"
            size="large"
            value={Inputpassword}
            onChange={(e) => setInputpassword(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 3, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 3, span: 16 }}>
          <Button
            type="primary"
            htmlType="submit"
            style={{ marginRight: 32 }}
            onClick={handleLogin}
          >
            Login
          </Button>
          <Link to="/Register">
            <Button type="primary" htmlType="submit" onClick={handleregister}>
              Register
            </Button>
          </Link>
        </Form.Item>
      </Form>
    </div>
  );
}
