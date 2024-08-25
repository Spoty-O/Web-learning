import { createBrowserRouter, Navigate } from "react-router-dom";
import Form from "../pages/Form";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { path: "form", element: <Form /> },
      { path: "*", element: <Navigate to={"/form"} /> },
    ],
  },
]);

export default router;
