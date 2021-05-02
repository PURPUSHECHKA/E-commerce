import React from 'react'
import Head from './head'
import NavBar from './NavBar/NavBar'

const Basket = () => {
  return (
    <div>
      <Head title="Hello" />
      <NavBar />
      <div className="flex items-center justify-center h-screen" />
    </div>
  )
}

Basket.propTypes = {}

export default React.memo(Basket)
