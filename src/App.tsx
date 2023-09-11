import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import { Login } from "./pages/login";
import { AuthContext } from "./providers/auth";
import { NameProps } from "./providers/interface";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route key={0} path='/login' element={<Login />} />
        <Route key={1} path='/dashboard' element={<Dashboard />} />
        <Route path='*' element={<Navigate to='/login' />} />
      </Routes>
    </BrowserRouter>
  );
}


