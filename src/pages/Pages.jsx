import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from '../App'
import MainLayout from '../layout/MainLayout'
import Search from '../components/Search'

export default function Pages() {
    const router = createBrowserRouter([
        {
            path:"/",
            element:<MainLayout />,
            children:[
                {
                    path:"",
                    element:<App />
                },
                {
                    path:"search",
                    element:<Search />
                }
            ]
        }
    ])
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}
