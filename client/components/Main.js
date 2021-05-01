import React from 'react'

import Head from './head'

import ListOfGoods from './Goods/ListOfGoods'
import NavBar from './NavBar/NavBar'

const Main = () => {
  return (
    <div className="bg-gradient-to-b from-cyan-50 via-fuchsia-50 to-amber-50">
      <Head title="Hello" />
      <NavBar />
      <ListOfGoods />
    </div>
  )
}

Main.propTypes = {}

export default React.memo(Main)
