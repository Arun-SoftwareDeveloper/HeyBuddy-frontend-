import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterForm from "./Components/RegisterForm";
import Capatcha from "./Components/Capatcha";
import LoginForm from "./Components/LoginForm";
import ForgotPassword from "./Components/ForgotPassword";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<RegisterForm />} />
          <Route path="/captcha" element={<Capatcha />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
