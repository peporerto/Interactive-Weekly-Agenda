  import { RouterProvider } from "react-router-dom";
  import { router } from "@/routes/AppRoutes";
  import "../styles/globals.css";

  export default function App() {
    return (
      <div className="min-h-screen bg-gray-50 text-gray-900">
        <RouterProvider router={router} />
      </div>
    );
  }