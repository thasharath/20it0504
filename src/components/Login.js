import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Card, Typography, Select } from 'antd';
import { Outlet, Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
const { Title } = Typography;
const { Option } = Select;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span:16,
  },
};

const handleSubmit = (event) => {
    event.preventDefault();
}

const Login = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <div id="mainDiv">
        <div id="loginForm">
        <Card className='card' title={<Title level={2} style={{margin:0, fontFamily: 'Raleway'}}>Enter Login Details</Title>} 
        bordered={false}>
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
                        message: 'Please input your NIC number!',
                    },
                ]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="NIC Number" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Password!',
                    },
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>
            <Form.Item>
                <Select
                    placeholder="Select Your Role"
                    allowClear
                >
                    <Option value="male">Teacher</Option>
                    <Option value="female">Student</Option>
                </Select>
            </Form.Item>

            <Form.Item >
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                </Button><br />
                <Link
                    to="/register"
                    // className="nav-link btn btn-secondary text-light"
                  >
                    <u style={{fontSize:14, color:"black", textAlign:"left"}}>Create a New Account</u>
                </Link><br />
                <Link
                    to="/"
                    // className="nav-link btn btn-secondary text-light"
                  >
                    <u style={{fontSize:14, color:"black", textAlign:"left"}}>Return to Home</u>
                </Link><br />
            </Form.Item>

        </Form>
        </Card></div></div>
    );
};
export default Login;