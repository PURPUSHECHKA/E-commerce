import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import cn from 'classnames'

import { setCurrencyRate } from '../../redux/reducers/reducerOfGoods'
import activityButtons from '../helperFunc/activityButtons'

const CurrencyRates = () => {
  const dispatch = useDispatch()

  const { currencyType } = useSelector((s) => s.reducerOfGoods)

  const changeCurrency = (rate) => {
    dispatch(setCurrencyRate(rate))
  }

  const { notActiveDropDown, activeDropDown, notActiveClick, activeClick } = activityButtons
  return (
    <Menu
      as="div"
      className="relative inline-block text-left  border border-cyan-400 bg-red-200 hover:bg-red-300 transition duration-700 rounded-2xl"
    >
      {({ open }) => (
        <>
          <div>
            <Menu.Button className="inline-flex justify-center w-full whitespace-nowrap rounded-lg shadow-sm px-4 py-2 bg-white text-sm font-medium focus:outline-none">
              Change rates
              <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
            </Menu.Button>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-75"
            enterFrom="transform opacity-0 scale-0"
            enterTo="transform opacity-100 scale-125"
            leave="transition ease-in-out duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-0"
          >
            <Menu.Items
              static
              className="origin-top-right absolute mt-2 w-full rounded-lg shadow-lg ring-black  transition duration-500 focus:outline-none"
            >
              <Menu.Item>
                {({ active }) => (
                  <div
                    className={cn(notActiveDropDown, {
                      [activeDropDown]: active
                    })}
                  >
                    {['USD', 'EUR', 'CAD', 'RUB'].map((currency) => {
                      const currencyButton = currencyType === currency
                      return (
                        <button
                          key={currency}
                          className={cn(notActiveClick, {
                            [activeClick]: currencyButton
                          })}
                          type="button"
                          onClick={() => changeCurrency(currency)}
                        >
                          {currency}
                        </button>
                      )
                    })}
                  </div>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  )
}

export default CurrencyRates
