import React from 'react'
import { Link } from 'react-router-dom'
import CurrencyRates from './CurrencyRates'

const NavBar = () => {
  return  (
    <div>
      <div id="brand-name">
        <Link to='/'>PURPUSHECHKA SHOP</Link>
        <CurrencyRates />
      </div>
    </div>
  )
}

NavBar.proTypes = {}

export default React.memo(NavBar)