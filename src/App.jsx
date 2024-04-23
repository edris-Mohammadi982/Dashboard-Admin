import React from 'react'
import routes from '../routes'
import { useRoutes } from 'react-router-dom'
import Header from './components/Header/Header'

export default function App() {

  let router = useRoutes(routes)

  return (
    <>
      <Header />
      {router}
    </>
  )
}
