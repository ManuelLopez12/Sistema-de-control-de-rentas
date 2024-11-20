import React from 'react';
import ReactDOM from 'react-dom/client';


import {RouterProvider} from "react-router-dom"
import { Router } from './routes/index'
import "./assets/css/Style.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Router}/>
  </React.StrictMode>,
)

