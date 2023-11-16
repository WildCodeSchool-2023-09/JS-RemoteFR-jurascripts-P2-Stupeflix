import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./pages/ErrorPage";
import Wiki from "./pages/Wiki";
import About from "./pages/About";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    id: "app",
    errorElement: <ErrorPage />,
  },
  {
    path: "/wiki",
    element: <Wiki />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
