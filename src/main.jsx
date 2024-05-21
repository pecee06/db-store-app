import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Outlet} from "react-router-dom"
import Quiz from './components/Quiz.jsx'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Outlet/>} >
            <Route path='' element={<App/>} />
            <Route path='pushquiz' element={<Quiz/>} />
        </Route>
    )
)

ReactDOM
.createRoot(document.getElementById('root'))
.render(<RouterProvider router={router} />)