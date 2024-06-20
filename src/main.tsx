import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./assets/styles/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Scene from "./Scene.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <Scene scene="iceland" />,
        index: true,
      },
      {
        path: "iceland",
        element: <Scene scene="iceland" />,
      },
      {
        path: "mountain",
        element: <Scene scene="mountain" />,
      },
      {
        path: "warehouse",
        element: <Scene scene="warehouse" />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
