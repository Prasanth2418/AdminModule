import "./App.css";

import React from 'react'
import MyRoutes from "./myRoutes/Routes";

import NavBar from "./components/navbar/HeaderNavbar";

const App = () => {
  return (
    <div>
     <NavBar/>
      <MyRoutes/>
    </div>
  )
}

export default App
