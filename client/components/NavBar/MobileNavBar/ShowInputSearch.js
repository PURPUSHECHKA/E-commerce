import React, { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { Transition } from '@headlessui/react'

import InputSearch from '../InputSearch'

const ShowInputSearch = () => {
  const [isOpenInputSearch, setIsOpenInputSearch] = useState(false)
  const { setCharForFilter } = useSelector((s) => s.reducerOfGoods)

  const openInputSearch = useCallback(() => {
    setIsOpenInputSearch(!isOpenInputSearch)
    setCharForFilter('')
  }, [setIsOpenInputSearch, setCharForFilter, isOpenInputSearch])

  return (
    <div className="flex justify-between flex-row-reverse flex-grow sm:hidden">
      <div className=" flex items-center sm:hidden">
        <span className="sr-only">Open input for search</span>
        {(isOpenInputSearch && (
          <button
            className="mx-1 text-gray-700 sm:hidden focus:outline-none"
            type="button"
            onClick={openInputSearch}
          >
            Close
          </button>
        )) || (
          <button
            onClick={openInputSearch}
            type="button"
            className="my-auto mx-1 sm:hidden focus:outline-none"
          >
            <svg
              className="w-5 h-5"
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
          </button>
        )}
      </div>
      <Transition
        show={isOpenInputSearch}
        enter="transition ease-out duration-500"
        enterFrom="transform opacity-0 scale-0"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in-out duration-500"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-0"
      >
        <InputSearch />
      </Transition>
      {!isOpenInputSearch && (
        <Link to="/" className="h-10 w-32 mx-auto md:mx-10 xl:mx-32 flex items-center">
          <img alt="logo" src="images/logo-ecommerce.png" />
        </Link>
      )}
    </div>
  )
}

export default ShowInputSearch
