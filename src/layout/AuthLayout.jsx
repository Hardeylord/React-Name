import React from "react";
import { Link, Outlet } from "react-router-dom";


export default function AuthLayout() {
  return (
    <>
      <div className="text-xl font-bold text-blue-600">
        <Link to="/">MyBrand</Link>
        <Outlet />
      </div>
      
    </>
  );
}
