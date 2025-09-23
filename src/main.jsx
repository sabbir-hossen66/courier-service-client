import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./routes/Router.jsx";
import { RouterProvider } from "react-router";
import AuthProvider from "./contexts/authContext/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="font-urbanist">
      <AuthProvider>
        <RouterProvider router={router} />,
      </AuthProvider>
    </div>
  </StrictMode>
);
