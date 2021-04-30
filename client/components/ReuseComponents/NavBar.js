import React, { useState, useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCharactersToFilter } from '../../redux/reducers/reducerOfGoods'
import CurrencyRates from './CurrencyRates'

const NavBar = () => {
  const dispatch = useDispatch()
  console.log(dispatch)
  const [searchCharacter, setSearchCharacter] = useState('')

  const inputElement = useRef('')

  const getSearchCharacter = () => {
    setSearchCharacter(inputElement.current.value)
  }

  useEffect(() => {
    dispatch(getCharactersToFilter(searchCharacter))
  }, [searchCharacter])

  return (
    <div className="flex flex-row items-center justify-around bg-gradient-to-r from-red-100 to-red-50 shadow-xs rounded-full">
      <Link to="/" className="flex flex-shrink">
        <span className="text-xl text-gray-700">PURPUSHECHKA`S SHOP</span>
      </Link>
      <div className="h-10 bg-blue-50 border border-gray-600 text-sm rounded-full flex">
        <input
          ref={inputElement}
          value={searchCharacter}
          onChange={getSearchCharacter}
          type="text"
          name="search"
          placeholder="Search"
          className="px-5 rounded-full text-sm focus:outline-none"
        />
        <svg
          className="w-5 h-5 block my-auto mx-1 text-lg text-gray-700"
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
      </div>
      <div className="flex flex-row-reverse">
        <CurrencyRates />
      </div>
    </div>
  )
}

NavBar.proTypes = {}

export default React.memo(NavBar)
