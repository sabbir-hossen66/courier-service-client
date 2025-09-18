import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";

export const router = createBrowserRouter([
{
    path: "/",
    element: <Root />,
    errorElement: <div>error</div>,
    children: [
      {
        path: "/a",
        element: <div>heeeee</div>,
      },
    ],
  },
]);