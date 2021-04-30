import React from 'react'

import Head from './head'

import ListOfGoods from './Goods/ListOfGoods'
import NavBar from './ReuseComponents/NavBar'

const Main = () => {
  return (
    <div className="h-screen bg-amber-50">
      <Head title="Hello" />
      <NavBar />
      <ListOfGoods />
    </div>
  )
}

Main.propTypes = {}

export default React.memo(Main)
