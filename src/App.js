// import logo from './logo.svg';
import "./App.css";
// import Home from "./components/Home";
// import Login from "./components/Login";
// import Register from "./components/Register";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Nav></Nav>
      {/* <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="register" element={<Register />} />
                    <Route path="login" element={<Login />} />
                </Routes>
            </BrowserRouter> */}
    </>
  );
}

export default App;
