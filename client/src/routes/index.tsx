import { createBrowserRouter, Navigate } from "react-router-dom";
import Form from "../pages/Form";
import Main from "../pages/Main";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { path: "form", element: <Form /> },
      { path: "main", element: <Main /> },
      { path: "*", element: <Navigate to={"/form"} /> },
    ],
  },
]);

export default router;
