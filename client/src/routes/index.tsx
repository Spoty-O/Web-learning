import { createBrowserRouter, Navigate } from "react-router-dom";
import Form from "../pages/Form";
import Main from "../pages/Main";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { path: "form", element: <Form /> },
      { path: "", element: <Main /> },
    ],
  },
  { path: "*", element: <Navigate to={"/"} /> },
]);

export default router;
