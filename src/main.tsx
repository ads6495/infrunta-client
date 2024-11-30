/**
 * Copyright (c) [Albert Strange] [2024]
 *
 * This source code is licensed under the CC BY-NC-ND 4.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.tsx";
import { LoginPage } from "./pages/LoginPage.tsx";
import { AuthProvider } from "./context/AuthContext.tsx";
import { CourseOverview } from "./pages/CourseOverview.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<App />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="course" element={<CourseOverview />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);
