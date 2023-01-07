import React from 'react';
import { Outlet, Link, BrowserRouter } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { Button, Space } from 'antd';
import { LoginOutlined, EditOutlined } from '@ant-design/icons';
import { Card } from 'antd';
// import type { SizeType } from 'antd/es/config-provider/SizeContext';

    // const [size, setSize] = useState('large'); 



const Home = () => (
        <>
        {/* <h1>Hello</h1> */}
        {/* <BrowserRouter> */}
        <nav>
            <ul>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
            </ul>
        </nav>
        {/* </BrowserRouter> */}
{/*         
   <Space wrap>
     <a href="./Login">
    <Button
         type="primary"
         size={"large"}
         icon={<LoginOutlined />}> 
         Login
     </Button></a>
   
     <a href="./Register">
     <Button
         type="primary"
         size={"large"}
         icon={<EditOutlined />}>
         Register
     </Button></a>

   </Space> */}
</>
);
export default Home;




// const Login = () => {
//     const onFinish = (values) => {
//         console.log('Received values of form: ', values);
//     };

//     return (
//         <>
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <Link
//                   id="bttn"
//                   to="/login"
//                   style={{
//                     textDecoration: "none",
//                     color: "white",
//                     width: "60px",
//                     marginLeft: "6px",
//                   }}
//                   className="nav-link btn btn-secondary text-light"
//                 >
//                     Login
//                 </Link>
//               </li>
//             </ul>

//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <Link
//                   id="bttn"
//                   to="/register"
//                   style={{
//                     textDecoration: "none",
//                     color: "white",
//                     width: "60px",
//                     marginLeft: "6px",
//                   }}
//                   className="nav-link btn btn-secondary text-light"
//                 >
//                     Register
//                 </Link>
//               </li>
//             </ul>
//         </>
//     );
// };
// export default Login;