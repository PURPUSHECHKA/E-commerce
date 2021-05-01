import React from 'react'
import {useDispatch} from 'react-redux'
import { doSortingGoods } from '../../redux/reducers/reducerOfGoods'

const SortingOfGoods = () => {
  const dispatch = useDispatch()
  const sortButton =
    'bg-white text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none focus:outline-none'
  const sortHover = 'sortHover:text-white sortHover:bg-blue-400'

  /*
      {['Price ▲', 'Price ▼', 'Title ▲', 'Title ▼'].map(el => (
          <option
            key={el}
            className={sortHover}
            value={`{ "type": '${el.slice(0, -2).toLowerCase()}', "order": ${el.slice(-1) === '▲' ? 1 : -1} }`}
          >
            {el}
          </option>
        ))}
  */
  const changeParameterFor = (e) => dispatch(doSortingGoods(e.target.value))
  return (
    <label htmlFor="sorting">
      <select name="sorting" id="sorting" className={sortButton} onChange={changeParameterFor}>
        <option disabled hidden>Sort by</option>
        <option className={sortHover} value={`{ "type": "price", "order": 1 }`}>
          Price ▲
        </option>
        <option className={sortHover} value={`{ "type": "price", "order": -1 }`}>
          Price ▼
        </option>
        <option className={sortHover} value={`{ "type": "title", "order": 1 }`}>
          Title ▲
        </option>
        <option className={sortHover} value={`{ "type": "title", "order": -1 }`}>
          Title ▼
        </option>
      </select>
    </label>
  )
}

export default SortingOfGoods