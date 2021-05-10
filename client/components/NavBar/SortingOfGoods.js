import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import cn from 'classnames'
import { doSortingGoods } from '../../redux/reducers/reducerOfGoods'
import getImage from '../helperFunc/getImage'
import { ORDER_SORTABLE_FACTOR } from '../constantes/constantes'
import activityButtons from '../helperFunc/activityButtons'

const SortingOfGoods = () => {
  const dispatch = useDispatch()
  const { sortedType } = useSelector((s) => s.reducerOfGoods)

  const changeParameterForSorting = (data, type) => dispatch(doSortingGoods(data, type, getImage))
  const { notActiveDropDown, activeDropDown, notActiveClick, activeClick } = activityButtons

  const renderButtons = ['Default', 'Price ▲', 'Price ▼', 'Title ▲', 'Title ▼'].map((type, i) => {
    const currentSorted = type === sortedType
    if (i === 0) {
      return (
        <button
          key={type}
          type="button"
          className={cn(notActiveClick, { [activeClick]: currentSorted })}
          onClick={() =>
            changeParameterForSorting(
              `{ "type": "${type}", "order": "${ORDER_SORTABLE_FACTOR}" }`,
              type
            )
          }
        >
          {type}
        </button>
      )
    }

    return (
      <button
        key={type}
        type="button"
        className={cn(notActiveClick, { [activeClick]: currentSorted })}
        onClick={() =>
          changeParameterForSorting(
            `{ "type": "${type.slice(0, -2)}", "order": "${
              type.slice(-1) === '▲' ? 1 + ORDER_SORTABLE_FACTOR : -1 + ORDER_SORTABLE_FACTOR
            }" }`,
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
            <Menu.Button className="inline-flex justify-center w-full whitespace-nowrap rounded-md shadow-sm px-4 py-2 bg-white text-sm font-medium focus:outline-none">
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
                  <div className={cn(notActiveDropDown, { [activeDropDown]: active })}>
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
