import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";

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
    ],
  },
]);