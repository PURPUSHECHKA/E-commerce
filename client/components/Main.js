import React from 'react'
import Head from './head'

import Goods from './ReuseComponents/Goods'
import NavBar from './ReuseComponents/NavBar'

const Main = () => {
  return (
    <div>
      <Head title="Hello" />
      <NavBar />
      <Goods />
    </div>
  )
}

Main.propTypes = {}

export default React.memo(Main)
