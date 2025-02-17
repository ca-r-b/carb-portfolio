import { createBrowserRouter, Router, RouterProvider } from "react-router-dom"
import Layout from './layouts/Layout.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Works from './pages/Works.jsx'

function App() {
  const router = createBrowserRouter([
    {
      element:<Layout/>,
      children:[
        {
          path:'/',
          element: <About/>
        },
        {
          path:'/contact',
          element: <Contact/>
        },
        {
          path:'/works-experiences',
          element: <Works/>
        },
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
