import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Main from './pages/Main'
import Course1 from './pages/Course1'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Course2 from './pages/Course2'
import Form from './components/Form'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<MainLayout />} >
          <Route index element={<Main />} />
          <Route path='/courses1' element={<Course1 />} />
          <Route path='/courses2' element={<Course2 />} />
          <Route path='/contact' element={<Form />} />
          <Route path='/about' element={<About />} />
          <Route path='/*' element={<NotFound />} />
        </Route>
      </>
    )
  )
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App