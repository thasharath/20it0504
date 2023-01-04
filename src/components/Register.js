import React from 'react';
import { Button, Form, Input, InputNumber, Radio, Card, Typography } from 'antd';
import '../css/Register.css';

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
  return (
    <Card className='card' title={<Title level={2} style={{margin:0, fontFamily: 'Raleway'}}>Enter Login Details</Title>} 
        bordered={false}>
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      
      <Form.Item
        name="fName"
        label="First Name"
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="lname"
        label="Last Name"
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="sId"
        label="Student ID"
      >
        <Input />
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
        <Input />
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
        <Input />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Phone Number"
      >
        <Input/>
      </Form.Item>
      
      <Form.Item 
       label="Role" 
       rules={[
          {
            required: true,
          },
        ]}
      >
        <Radio.Group>
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
        <Input.Password />
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
          offset: 8,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </Card>
  );
};
export default App;
