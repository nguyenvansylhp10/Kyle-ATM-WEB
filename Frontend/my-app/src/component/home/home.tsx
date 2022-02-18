import { Queue } from "./feature/Queue/Queue";
import React, { useEffect } from "react";
import ATM from "./feature/ATM/ATM";
import ProcessClient from "./feature/Process/ProcessClient";
import User from "./feature/User/User";
import { Form, Input, Button, Checkbox } from "antd";
import { useState } from "react";
import { postAtm } from "../api/atms";
import { Modal } from "antd";
import { useDispatch } from "react-redux";
import "./home.scss";
import { getATMS } from "../api/atms";
const Home = () => {
  const dispatch = useDispatch();

  const [input, setinput] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = async () => {
    setIsModalVisible(false);
    alert(input);
    const res = await postAtm(input);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="home-page">
      <User />
      <Button
        type="primary"
        htmlType="submit"
        style={{ marginRight: 640, marginTop: -30 }}
        onClick={showModal}
      >
        Add ATM
      </Button>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          style={{ marginTop: 32 }}
          name="basic"
          labelCol={{ span: 9 }}
          wrapperCol={{ span: 8 }}
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          <Form.Item
            label="ATM"
            name="username"
            rules={[{ required: true, message: "Please input ATM!" }]}
          >
            <Input
              placeholder="Input Bank"
              size="large"
              value={input}
              onChange={(e) => setinput(e.target.value)}
            />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 3, span: 16 }}></Form.Item>
        </Form>
      </Modal>

      <div className="home-page_top">
        <div className="atm">
          <ATM />
        </div>

        <Queue />
      </div>
      <div>
        <ProcessClient />
      </div>
    </div>
  );
};

export default Home;
