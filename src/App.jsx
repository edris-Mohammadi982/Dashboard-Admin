import React from 'react'
import routes from '../routes'
import { useRoutes } from 'react-router-dom'
import Header from './components/header/Header'
import Sidebar from "./components/sidebar/Sidebar"
import "./App.css"

export default function App() {

  let router = useRoutes(routes)

  return (
    <>
      <Header />
      <div className="container">
        <Sidebar />
        {router}
      </div>
    </>
  )
}
