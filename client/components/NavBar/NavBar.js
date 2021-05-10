import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Transition } from '@headlessui/react'
import CurrencyRates from './CurrencyRates'
import MobileMainMenu from './MobileNavBar/MobileMainMenu'
import SortingOfGoods from './SortingOfGoods'
import InputSearch from './InputSearch'
import ShowInputSearch from './MobileNavBar/ShowInputSearch'
import QuantityGoodsInBasket from '../Basket/QuantityGoodsInBasket'

const NavBar = () => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false)
  const refRenderResponsive = useRef()
  return (
    <nav className="sticky top-0 bg-red-100 bg-opacity-80 shadow-xs rounded-lg lg:rounded-full mb-10">
      <div className="mx-auto">
        <div className="flex sm:justify-between items-center p-2 lg:p-4">
          <MobileMainMenu
            setIsOpenMobileMenu={setIsOpenMobileMenu}
            isOpenMobileMenu={isOpenMobileMenu}
          />
          <div className="hidden sm:flex mr-auto">
            <div className="flex items-baseline space-x-4">
              <CurrencyRates />
              <SortingOfGoods />
              <InputSearch />
            </div>
            <Link to="/" className="h-10 w-32 mx-2 md:mx-10 xl:mx-32 flex items-center">
              <img alt="logo" src="images/logo-ecommerce.png" />
            </Link>
          </div>
          <ShowInputSearch />
          <QuantityGoodsInBasket />
        </div>
      </div>

      <Transition
        show={isOpenMobileMenu}
        enter="transition ease-out duration-500 transform"
        enterFrom="opacity-0 scale-0"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-300 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-0"
      >
        {() => (
          <div className="sm:hidden flex flex-row" id="mobile-menu">
            <div ref={refRenderResponsive} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <CurrencyRates />
            </div>
            <div ref={refRenderResponsive} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <SortingOfGoods />
            </div>
          </div>
        )}
      </Transition>
    </nav>
  )
}

export default NavBar
