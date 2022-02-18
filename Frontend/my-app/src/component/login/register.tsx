import React from "react";
import "./register.scss";
import { Form, Input, Button, Checkbox, Alert } from "antd";
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import { addUser } from "../api/user";
export default function Register() {
  const navigate = useNavigate();

  const [Inputname, setInputname] = useState("");
  const [Inputpassword, setInputpassword] = useState("");
  function handlecomeback() {
    console.log("thoat");
  }
  const handleregister = async () => {
    const res = await addUser({
      email: Inputname,
      password: Inputpassword,
    });
    console.log(res);
    alert("Register success");
    navigate("/login");
  };

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="wrapper">
      <h1>Page Register</h1>
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
            onClick={handleregister}
          >
            Register
          </Button>
          <Link to="/login">
            <Button type="primary" htmlType="submit" onClick={handlecomeback}>
              Comeback
            </Button>
          </Link>
        </Form.Item>
      </Form>
    </div>
  );
}
