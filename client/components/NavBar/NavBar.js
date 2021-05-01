import React from 'react'
import { Link } from 'react-router-dom'

import CurrencyRates from './CurrencyRates'
import InputSearch from './InputSearch'

const NavBar = () => {
  return (
    <div className="sticky top-0 flex flex-row flex-grow-0 items-center justify-around py-1 bg-red-100 shadow-xs rounded-full mb-10">
      <Link to="/">
        <span className="text-xl text-gray-700">PURPUSHECHKA`S SHOP</span>
      </Link>
      <InputSearch />
      <div className="flex flex-row">
        <CurrencyRates />
      </div>
    </div>
  )
}

NavBar.proTypes = {}

export default React.memo(NavBar)
