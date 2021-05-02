import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

import { setCurrencyRate } from '../../redux/reducers/reducerOfGoods'

 const CurrencyRates = () => {
  const dispatch = useDispatch()

  const { currencyType } = useSelector((s) => s.reducerOfGoods)

  const changeCurrency = (rate) => {
    dispatch(setCurrencyRate(rate))
  }
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  function activityButtons(currency) {
    const notActiveButton =
      'rounded-lg mt-1 px-2 py-1 bg-blue-200 hover:bg-blue-300 transition duration-700 focus:outline-none'
    const activeButton =
      'rounded-lg mt-1 px-2 py-1 bg-violet-500 hover:bg-violet-600 text-green-200 transition duration-700 focus:outline-none'
    return currencyType === currency ? activeButton : notActiveButton
  }

  return (
    <Menu
      as="div"
      className="relative inline-block text-left  border border-cyan-400 bg-red-200 hover:bg-red-300 transition duration-700 rounded-2xl"
    >
      {({ open }) => (
        <>
          <div>
            <Menu.Button className="inline-flex justify-center w-full rounded-lg shadow-sm px-4 py-2 bg-white text-sm font-medium focus:outline-none">
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
                    className={classNames(
                      active
                        ? 'flex flex-col bg-gray-200 rounded-lg transition duration-700 shadow-lg p-1'
                        : 'flex flex-col bg-gray-100 rounded-lg transition duration-700 shadow-sm p-1'
                    )}
                  >
                    {['USD', 'EUR', 'CAD', 'RUB'].map((currency) => (
                      <button
                        key={currency}
                        className={activityButtons(currency)}
                        type="button"
                        onClick={() => changeCurrency(currency)}
                      >
                        {currency}
                      </button>
                    ))}
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