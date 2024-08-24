import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./commponent/layout/Layout.jsx";
import Home from "./commponent/Home/Home.jsx";
import About from "./commponent/about/About.jsx";
import Contact from "./commponent/contact/contact.jsx";
import Profolio from "./commponent/profolio/profolio.jsx";

function App() {

   let router =   createBrowserRouter(
       [
           {element : <Layout/>
           , children : [
               {index : true , element: <Home/>},
                   { element: <About/> ,path : "/About" },
                   { element: <Contact/> ,path : "/Contact" },
                   { element: <Layout/> ,path : "/Layout" },
                   { element: <Profolio/> ,path : "/Profolio" },
               ] },

       ])

  return (
      <>
          <RouterProvider router={router}></RouterProvider>
      </>
  )
}

export default App
