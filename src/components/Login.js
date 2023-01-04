// import { Checkbox, Button, Form, Input } from 'antd';
// import React from 'react';
//
//
// export default App;
//     // return (
//     //     <form>
//
//     //         <div>
//     //             <label for="email">Email: </label>
//     //             <input type="email" placeholder="name@domain.com" id="email" name="email"></input>
//     //         </div>
//
//     //         <div>
//     //             <label for="password">Password: </label>
//     //             <input type="password" id="password" name="password"></input>
//     //         </div>
//
//
//     //     </form>
//
//     // )

import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Card, Typography, Select } from 'antd';
import '../css/Home.css';
const { Title } = Typography;
const { Option } = Select;

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
            {/*<Form.Item>*/}
            {/*    <Form.Item name="remember" valuePropName="checked" noStyle>*/}
            {/*        <Checkbox>Remember me</Checkbox>*/}
            {/*    </Form.Item>*/}

            {/*    <a className="login-form-forgot" href="">*/}
            {/*        Forgot password*/}
            {/*    </a>*/}
            {/*</Form.Item>*/}

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                </Button>
                <br /><u><a href="./Register" style={{fontSize:14, color:"black"}}>Register New Account</a></u>
            </Form.Item>
        </Form>
        </Card></div></div>
    );
};
export default Login;