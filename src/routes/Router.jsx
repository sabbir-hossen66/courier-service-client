import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Authentication from "../authLayout/Authentication";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Contact from "../pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <div>error2</div>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path:"/contact",
        element:<Contact/>
      },
    ],
  },
  {
    path: "/",
    Component: Authentication,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);
