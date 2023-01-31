import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom';

import Home from "./routes/home";
import Catalogo from "./routes/Catalogo";
import Unidade from "./routes/Unidade";
import Login from "./routes/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "Catalogo",
        element: <Catalogo />
      },
      
      {
        path: "Unidade",
        element: <Unidade />
      },
      
      {
        path: "Login",
        element: <Login/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
