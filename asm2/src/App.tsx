import { useState } from "react";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import UserLayout from "./components/userLayout";
import Home from "./pages/home";
import ProductDetail from "./pages/product";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import LayoutProduct from "./components/layoutProduct";
import AdminLayout from "./components/admin/admin";
import Dashboard from "./pages/dashboard";
import ProductUpdate from "./pages/product-update";
import Removeproduct from "./pages/remove-product";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<UserLayout />}>
          {" "}
          {/* Layout */}
          <Route index element={<Home />} />
        </Route>
        <Route path="/" element={<LayoutProduct />}>
          {" "}
          {/* Layout */}
          <Route path="product/:id" element={<ProductDetail />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="update/:id" element={<ProductUpdate />} />
          <Route path="remove/:id" element={<Removeproduct/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
