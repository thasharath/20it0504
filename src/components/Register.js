import React from 'react';
import { useState } from "react";
import { Button, Form, Input, InputNumber, Radio, Card, Typography } from 'antd';
import { Outlet, Link } from "react-router-dom";
import axios from 'axios';

// import '../css/Home.css';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span:16,
  },
};

const { Title } = Typography;

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */






const App = () => {
  const onFinish = (values) => {
    console.log(values);
  };
  
  const [inputs, setInputs] = useState({})

  const handleChange = (event)  => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post("http://localhost/api/user/save", inputs)

    console.log(inputs);
  }


  return (
    <Card className='cardRegister' title={<Title level={2} style={{margin:3, fontFamily: 'Raleway'}}>Enter Registration Details</Title>} 
        bordered={false}>
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages} onSubmit={handleSubmit}>
      
      <Form.Item
        name="fName"
        label="First Name"
      >
        <Input onChange={handleChange}/>
      </Form.Item>

      <Form.Item
        name="lname"
        label="Last Name"
      >
        <Input onChange={handleChange}/>
      </Form.Item>

      <Form.Item
        name="sId"
        label="Student ID"
      >
        <Input onChange={handleChange}/>
      </Form.Item>

      <Form.Item
        name="nic"
        label="NIC Number"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input onChange={handleChange}/>
      </Form.Item>

      <Form.Item
        name="email"
        label="Email"
        rules={[
          {
            type: 'email',
          },
        ]}
      >
        <Input onChange={handleChange}/>
      </Form.Item>

      <Form.Item
        name="phone"
        label="Phone Number"
      >
        <Input onChange={handleChange}/>
      </Form.Item>
      
      <Form.Item
      onChange={handleChange}
       label="Role" 
       rules={[
          {
            required: true,
          },
        ]}
      >
        <Radio.Group 
        onChange={handleChange} >
            <Radio value="teacher"> Teacher </Radio>
            <Radio value="student"> Student </Radio>
          </Radio.Group>
       </Form.Item>
       
       <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
        >
        <Input.Password onChange={handleChange}/>
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          ...layout.wrapperCol,
          offset: 4,
        }}
      >
        <Button type="primary" htmlType="submit">
          Register
        </Button><br />
        
        <Link
          to="/login"
                    // className="nav-link btn btn-secondary text-light"
          >
          <u style={{fontSize:14, color:"black", textAlign:"left"}}>Already Have an Account?</u>
        </Link><br />

        <Link
          to="/"
                    // className="nav-link btn btn-secondary text-light"
          >
          <u style={{fontSize:14, color:"black", textAlign:"left"}}>Return to Home</u>
        </Link>

      </Form.Item>
    </Form>
    </Card>
  );
};
export default App;
