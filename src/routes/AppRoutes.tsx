import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import { HomePage } from "@/pages/Home";
import {LoginPage} from "@/pages/Login";
import {RegisterPage} from "@/pages/Register";
import {TestSelectionPage} from "@/pages/TestSelection";
import {TestDetailPage} from "@/pages/TestDetail";
import {ResultPage} from "@/pages/Result";
import {ProfilePage} from "@/pages/Profile";

export const router = createBrowserRouter([
  {
    element: <MainLayout />, // 🔹 Todo dentro de este layout
    children: [
  
    { path: "/", element: <HomePage /> },
    { path: "/tests", element: <TestSelectionPage /> },
    { path: "/tests/:id", element: <TestDetailPage /> },
    { path: "/results/:id", element: <ResultPage /> },
    { path: "/profile", element: <ProfilePage /> },
  ],
},
// 🔸 Páginas sin layout (por ejemplo login o register)
{ path: "/login", element: <LoginPage /> },
{ path: "/register", element: <RegisterPage /> },

]);
      
 