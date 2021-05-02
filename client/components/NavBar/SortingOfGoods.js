import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

import { doSortingGoods } from '../../redux/reducers/reducerOfGoods'
import getImage from '../reuseFunc/getImage'

const SortingOfGoods = () => {
  const dispatch = useDispatch()
  const { sortedType } = useSelector((s) => s.reducerOfGoods)

  const activityButtons = (type) => {
    const notActiveButton =
      'w-full rounded-md mt-1 px-2 py-1 bg-blue-200 hover:bg-blue-300 text-bold text-violet-500 transition duration-700 focus:outline-none'
    const activeButton =
      'w-full rounded-md mt-1 px-2 py-1 bg-violet-500 hover:bg-violet-600 text-bold text-amber-500 transition duration-700 focus:outline-none'

    return sortedType === type ? activeButton : notActiveButton
  }

  const changeParameterForSorting = (data, type) => dispatch(doSortingGoods(data, type, getImage))

  const classNames = (...classes) => classes.filter(Boolean).join(' ')

  const renderButtons = ['Default', 'Price ▲', 'Price ▼', 'Title ▲', 'Title ▼'].map((type, i) => {
    if (i === 0) {
      return (
        <button
          key={type}
          type="button"
          className={activityButtons(type)}
          onClick={() => changeParameterForSorting(`{ "type": "${type}", "order": "null" }`, type)}
        >
          {type}
        </button>
      )
    }

    return (
      <button
        key={type}
        type="button"
        className={activityButtons(type)}
        onClick={() =>
          changeParameterForSorting(
            `{ "type": "${type.slice(0, -2)}", "order": "${type.slice(-1) === '▲' ? 1 : -1}" }`,
            type
          )
        }
      >
        {type}
      </button>
    )
  })

  return (
    <Menu
      as="div"
      htmlFor="sorting"
      className="relative inline-block text-left  border border-cyan-400 bg-red-200 hover:bg-red-300 transition duration-700 rounded-2xl"
    >
      {({ open }) => (
        <>
          <div>
            <Menu.Button className="inline-flex justify-center w-full rounded-md shadow-sm px-4 py-2 bg-white text-sm font-medium focus:outline-none">
              Filter by
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
              className="origin-top-right absolute mt-2 w-full rounded-md shadow-lg ring-black  transition duration-500 focus:outline-none"
            >
              <Menu.Item>
                {({ active }) => (
                  <div
                    className={classNames(
                      active
                        ? 'flex flex-col bg-gray-200 rounded-md transition duration-700 shadow-lg p-1'
                        : 'flex flex-col bg-gray-100 rounded-md transition duration-700 shadow-sm p-1'
                    )}
                  >
                    {renderButtons}
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

export default SortingOfGoods
