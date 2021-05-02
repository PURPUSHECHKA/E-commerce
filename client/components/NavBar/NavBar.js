import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Transition } from '@headlessui/react'
import CurrencyRates from './CurrencyRates'
import MobileMainMenu from './MobileMainMenu'
import SortingOfGoods from './SortingOfGoods'
import InputSearch from './InputSearch'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className="sticky top-0 bg-red-100 bg-opacity-80 shadow-xs rounded-md lg:rounded-full mb-10 ">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row justify-between items-center p-2">
          <MobileMainMenu setIsOpen={setIsOpen} isOpen={isOpen} />
          <div className="hidden sm:flex">
            <div className="flex items-baseline space-x-4">
              <CurrencyRates />
              <SortingOfGoods />
              <InputSearch />
            </div>
          </div>
          <svg
            className="w-5 h-5 my-auto mx-1 text-lg text-gray-700 block sm:hidden"
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
          <Link to="/">
            <img
              className="h-6 w-6 lg:h-8 lg:w-8"
              alt="basket"
              src="https://img.icons8.com/pastel-glyph/64/4a90e2/shopping-basket-2--v1.png"
            />
          </Link>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-500 transform"
        enterFrom="opacity-0 scale-0"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-300 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-0"
      >
        {(ref) => (
          <div className="sm:hidden flex flex-row" id="mobile-menu">
            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <CurrencyRates />
            </div>
            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <SortingOfGoods />
            </div>
          </div>
        )}
      </Transition>
    </nav>
  )
}

export default NavBar
