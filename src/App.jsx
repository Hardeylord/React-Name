import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainaLayouts from "./layout/MainaLayouts";
import AuthLayout from "./layout/AuthLayout";
import Login from "./pages/auth/Login";
import YupLogin from "./pages/auth/YupLogin";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainaLayouts />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
          </Route>

          <Route path="/auth" element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="yuplogin" element={<YupLogin />} />
            <Route />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;