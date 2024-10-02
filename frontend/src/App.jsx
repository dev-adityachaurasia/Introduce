import Forget from "./components/Forget";
import Login from "./components/Login";
import Signin from "./components/Signin";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import React from "react";
import Home from "./components/Home";

const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <Signin /> },
    { path: "/forget", element: <Forget /> },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
