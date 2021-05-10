import React from 'react'

import Head from './head'
import ListOfGoods from './Goods/ListOfGoods'
import NavBar from './NavBar/NavBar'

const Main = () => {
  return (
    <div className="px-2%">
      <Head title="Hello" />
      <NavBar />
      <ListOfGoods />
    </div>
  )
}

Main.propTypes = {}

export default React.memo(Main)
