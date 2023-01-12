import React from "react";
import { useState } from "react";
import axios from "axios";

import NavBar from "./NavBar";

// import { LockOutlined, UserOutlined } from "@ant-design/icons";
// import { Button, Form, Input, Card, Typography, Select } from "antd";
import { Link } from "react-router-dom";

// const { Title } = Typography;

// const { Option } = Select;

// const layout = {
//   labelCol: {
//     span: 8,
//   },
//   wrapperCol: {
//     span: 16,
//   },
// };

const handleSubmit = (event) => {
  event.preventDefault();
};

const Login = () => {
  // const onFinish = (values) => {
  //   console.log("Received values of form: ", values);
  // };

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (document.registration.nic.value.length === 0) {
      alert("NIC number cannot be empty.");
      return false;
    }

    axios
      .post("http://localhost/api/login.php", inputs)
      .then(function (response) {
        // alert(response.data);
        if (response.data === "student") {
          window.location = "http://localhost:3000/student";
        } else if (response.data === "teacher") {
          window.location = "http://localhost:3000/teacher";
        } else {
          window.alert("Login Failed");
        }
      });
    // .then((response) => {
    //   console.log(response.data);
    // })
    // .catch((error) => {
    //   console.log(error);
    // });

    console.log(inputs);
  };

  return (
    <>
      <NavBar></NavBar>
      <div className="regForm">
        <h1>Login</h1>
        <hr />
        <form>
          <table>
            <td>
              <label htmlFor="nic">NIC No.</label>
            </td>
            <td>
              <input type="text" name="nic" onChange={handleChange} />
            </td>

            <tr>
              <td>
                <label htmlFor="role">Role</label>
              </td>
              <td>
                <select name="role" onChange={handleChange}>
                  <br />
                  <option value=""></option>
                  <option value="teacher">Teacher</option>
                  <option value="student">Student</option>
                </select>
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="password">Password</label>
              </td>
              <td>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  required="true"
                />
              </td>
            </tr>

            <tr>
              <td colspan="2" align="center">
                <input
                  type="button"
                  name="submit"
                  value="Login"
                  className="button"
                  onClick={handleSubmit}
                />
              </td>
            </tr>
            <tr>
              <td colspan="2" align="center">
                <Link to="/register" className="homeLink">
                  Create New Account
                </Link>
              </td>
            </tr>
          </table>
        </form>
      </div>
    </>
  );

  // return (
  //   <div id="mainDiv">
  //     <NavBar></NavBar>
  //     <div id="loginForm">
  //       <Card
  //         className="card"
  //         title={
  //           <Title
  //             level={2}
  //             style={{ margin: 0, fontFamily: "Raleway", textAlign: "center" }}
  //           >
  //             Enter Login Details
  //           </Title>
  //         }
  //         bordered={false}
  //       >
  //         <Form
  //           name="normal_login"
  //           className="login-form"
  //           initialValues={{
  //             remember: true,
  //           }}
  //           onFinish={onFinish}
  //           onSubmit={handleSubmit}
  //         >
  //           <Form.Item
  //             name="username"
  //             rules={[
  //               {
  //                 required: true,
  //                 message: "Please input your NIC number!",
  //               },
  //             ]}
  //           >
  //             <Input
  //               prefix={<UserOutlined className="site-form-item-icon" />}
  //               placeholder="NIC Number"
  //             />
  //           </Form.Item>
  //           <Form.Item
  //             name="password"
  //             rules={[
  //               {
  //                 required: true,
  //                 message: "Please input your Password!",
  //               },
  //             ]}
  //           >
  //             <Input
  //               prefix={<LockOutlined className="site-form-item-icon" />}
  //               type="password"
  //               placeholder="Password"
  //             />
  //           </Form.Item>
  //           <Form.Item name="role">
  //             <Select placeholder="Select Your Role" allowClear>
  //               <Option value="teacher">Teacher</Option>
  //               <Option value="student">Student</Option>
  //             </Select>
  //           </Form.Item>

  //           <Form.Item
  //             style={{ textAlign: "center" }}
  //             wrapperCol={{
  //               ...layout.wrapperCol,
  //               offset: 4,
  //             }}
  //           >
  //             <Button
  //               type="primary"
  //               htmlType="submit"
  //               className="login-form-button"
  //             >
  //               Log in
  //             </Button>
  //             <br />
  //             <Link to="/register">
  //               <u
  //                 style={{
  //                   fontSize: 15,
  //                   color: "black",
  //                 }}
  //               >
  //                 Create a New Account
  //               </u>
  //             </Link>
  //             <br />
  //             <Link to="/">
  //               <u
  //                 style={{
  //                   fontSize: 15,
  //                   color: "black",
  //                 }}
  //               >
  //                 Return to Home
  //               </u>
  //             </Link>
  //             <br />
  //           </Form.Item>
  //         </Form>
  //       </Card>
  //     </div>
  //   </div>
  // );
};
export default Login;
