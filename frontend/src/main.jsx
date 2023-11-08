import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Wiki from "./pages/Wiki";
import About from "./pages/About";
import DisplayGame from "./components/game/DisplayGame";
import App from "./App";

const router = createBrowserRouter([
  {
    element: <App />,
    id: "app",
    children: [
      {
        path: "/",
        element: <DisplayGame />,
      },
      {
        path: "/wiki",
        element: <Wiki />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
