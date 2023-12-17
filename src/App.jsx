import Home from './Pages/Home'
import Single from './Pages/Single'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import Write from './Pages/Write'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Profile from './Pages/Profile'
import Category from './Pages/Category'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      children:[
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/post/:id',
          element: <Single/>
        },
        {
          path: '/write/:id',
          element: <Write/>
        },
        {
          path: '/profile/:id',
          element: <Profile/>
        },
        {
          path: '/category/:id',
          element: <Category/>
        }
      ]
    },
    {
      path: '/login',
      element: <Login/>
    },
    {
      path: '/register',
      element: <Register/>
    }
  ])
  return (
   <div className='w-[1024px]'>
    <RouterProvider router={router}/>
   </div>
  )
}

const Layout = ()=>{
  return(
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
