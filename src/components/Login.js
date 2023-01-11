import React from "react";
import NavBar from "./NavBar";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Card, Typography, Select } from "antd";
import { Link } from "react-router-dom";

const { Title } = Typography;

const { Option } = Select;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const handleSubmit = (event) => {
  event.preventDefault();
};

const Login = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div id="mainDiv">
      <NavBar></NavBar>
      <div id="loginForm">
        <Card
          className="card"
          title={
            <Title
              level={2}
              style={{ margin: 0, fontFamily: "Raleway", textAlign: "center" }}
            >
              Enter Login Details
            </Title>
          }
          bordered={false}
        >
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onSubmit={handleSubmit}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your NIC number!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="NIC Number"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item name="role">
              <Select placeholder="Select Your Role" allowClear>
                <Option value="teacher">Teacher</Option>
                <Option value="student">Student</Option>
              </Select>
            </Form.Item>

            <Form.Item
              style={{ textAlign: "center" }}
              wrapperCol={{
                ...layout.wrapperCol,
                offset: 4,
              }}
            >
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
              <br />
              <Link to="/register">
                <u
                  style={{
                    fontSize: 15,
                    color: "black",
                  }}
                >
                  Create a New Account
                </u>
              </Link>
              <br />
              <Link to="/">
                <u
                  style={{
                    fontSize: 15,
                    color: "black",
                  }}
                >
                  Return to Home
                </u>
              </Link>
              <br />
            </Form.Item>
          </Form>
        </Card>
      </div>
    </div>
  );
};
export default Login;
