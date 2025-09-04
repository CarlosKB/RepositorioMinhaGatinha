import React from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import LendingPage from "../pages/lendingpage";
import BirthdayPage from "../pages/birthdaypage";

export const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LendingPage />} />
        <Route path="/aniversario" element={<BirthdayPage />} />
      </Routes>
    </BrowserRouter>
  );
};
