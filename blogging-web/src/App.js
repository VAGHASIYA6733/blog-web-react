import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
const Home = React.lazy(() => import("./Components/View/Home"))
const Navbar = React.lazy(() => import("./Components/Global/Navbar/Navbar"))
const Footer = React.lazy(() => import("./Components/Global/Footer/Footer"))
const Blog = React.lazy(() => import("./Components/View/Blog/Blog"))
const AddBlog = React.lazy(() => import("./Components/View/AddBlog/AddBlog"))


const App = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/add-blog' element={<AddBlog/>}/>
      </Routes>
      <Footer/>
    </Suspense>
  )
}

export default App

