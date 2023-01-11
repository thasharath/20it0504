import React from "react";
import { useState } from "react";
import { Button, Form, Input, Card, Typography, Select } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";
import NavBar from "./NavBar";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const { Title } = Typography;

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-disable no-template-curly-in-string */

const Register = () => {
  const onFinish = (values) => {
    console.log(values);
  };

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost/api/index.php", inputs)
      .then((response) =>
        console.log(response.data).catch((error) => console.log(error))
      );

    console.log(inputs);
  };

  return (
    <>
      {/* Navigation Bar */}
      <NavBar></NavBar>
      <Card
        className="cardRegister"
        title={
          <Title
            level={2}
            style={{ margin: 3, fontFamily: "Raleway", textAlign: "center" }}
          >
            Enter Registration Details
          </Title>
        }
        bordered={false}
      >
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
          onSubmit={handleSubmit}
        >
          {/* Input first name */}
          <Form.Item name="firstName" label="First Name">
            <Input onChange={handleChange} />
          </Form.Item>

          {/* Input last name */}
          <Form.Item name="lastName" label="Last Name">
            <Input onChange={handleChange} />
          </Form.Item>

          {/* Input NIC number */}
          <Form.Item
            name="nic"
            label="NIC Number"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input onChange={handleChange} />
          </Form.Item>

          {/* Input email address   */}
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                type: "email",
              },
            ]}
          >
            <Input onChange={handleChange} />
          </Form.Item>

          {/* Input phone number     */}
          <Form.Item name="phone" label="Phone Number">
            <Input onChange={handleChange} />
          </Form.Item>

          {/* Input role */}
          <Form.Item
            onChange={handleChange}
            label="Role"
            name="role"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select>
              <Select.Option value="student">Student</Select.Option>
              <Select.Option value="teacher">Teacher</Select.Option>
            </Select>
          </Form.Item>

          {/* Input student ID   */}
          <Form.Item name="studentId" label="Student ID">
            <Input onChange={handleChange} />
          </Form.Item>

          {/* Input password   */}
          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
          >
            <Input.Password onChange={handleChange} />
          </Form.Item>

          {/* Confirm password   */}
          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      "The two passwords that you entered do not match!"
                    )
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            style={{ textAlign: "center" }}
            wrapperCol={{
              ...layout.wrapperCol,
              offset: 4,
            }}
          >
            <Button name="submitBtn" type="primary" htmlType="submit">
              Register
            </Button>
            <br />

            <Link to="/login">
              <u
                style={{
                  fontSize: 15,
                  color: "black",
                  textAlign: "left",
                }}
              >
                Already Have an Account?
              </u>
            </Link>
            <br />

            <Link to="/">
              <u
                style={{
                  fontSize: 15,
                  color: "black",
                  textAlign: "left",
                }}
              >
                Return to Home
              </u>
            </Link>
          </Form.Item>
        </Form>
      </Card>
    </>
  );
};
export default Register;
