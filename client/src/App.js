import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"

import Navbar from "./components/Navbar"
// import Footer from "./components/Footer"
import Home from "./pages/Home"
import ViewProducts from "./pages/ViewProducts"
// import Contact from "./pages/Contact"
import Register from "./pages/Register"

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/viewproducts/",
        element: <ViewProducts />
      },
      // {
      //   path: "/contact",
      //   element: <Contact />
      // },
      {
        path: "/register",
        element: <Register />
      }
    ]
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
