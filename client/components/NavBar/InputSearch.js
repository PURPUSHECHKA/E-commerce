import React, { useRef, useEffect, useState, memo } from 'react'
import { useDispatch } from 'react-redux'

import { getCharactersToFilter } from '../../redux/reducers/reducerOfGoods'

const InputSearch = () => {
  const dispatch = useDispatch()
  const [searchCharacter, setSearchCharacter] = useState('')
  const inputRef = useRef('')

  const getSearchCharacter = () => {
    setSearchCharacter(inputRef.current.value)
  }

  useEffect(() => {
    dispatch(getCharactersToFilter(searchCharacter, setSearchCharacter))
  }, [searchCharacter])

  return (
    <div className="flex ml-2 sm:m-auto h-7 sm:h-10 bg-blue-50 border border-gray-600 text-sm rounded-full">
      <input
        ref={inputRef}
        value={searchCharacter}
        onChange={getSearchCharacter}
        type="text"
        name="search"
        placeholder="Search"
        className="flex w-full px-5 rounded-full text-sm focus:outline-none"
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
  )
}

export default memo(InputSearch)
