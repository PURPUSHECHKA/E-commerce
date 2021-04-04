import React from 'react'
import { Link } from 'react-router-dom'
import CurrencyRates from './CurrencyRates'

const NavBar = () => {
  return (
    <div className="w-screen flex flex-row items-center p-1 justify-between bg-gradient-to-r from-gray-300 to-gray-200 shadow-xs">
      <Link to="/" className="ml-8 text-lg text-gray-700 hidden md:flex">
        PURPUSHECHKA`S SHOP
      </Link>
      <span className=" h-10 bg-blue-50 cursor-pointer border border-gray-600 text-sm rounded-full flex">
        <input
          type="search"
          name="serch"
          placeholder="Search"
          className="flex-grow px-4 rounded-l-full rounded-r-full text-sm focus:outline-none"
        />
        <svg
          className="m-3 flex justify-center items-center text-lg text-gray-700 w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </span>
      <div className="flex flex-row-reverse mr-8 hidden md:flex">
        <CurrencyRates />
      </div>
    </div>
  )
}

NavBar.proTypes = {}

export default React.memo(NavBar)
