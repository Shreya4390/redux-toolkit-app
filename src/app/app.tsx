import React from 'react';
import './app.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from '../pages/signUpPage/signUp';
import Dashboard from '../pages/dashboardPage/dashboard';
import NavBar from '../navbar/navbar';

export default function App() {
  return (
    <div>
       <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}