import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import totalPrice from '../helperFunc/totalPrice'
import { getCostOfAllProducts } from '../../redux/reducers/reducerOfBasket'

const GetTheSumOfAllProducts = () => {
  const dispatch = useDispatch()
  const { listOfGoods, currencyType, currencyRate } = useSelector((s) => s.reducerOfGoods)
  const { listOfIdsProducts, costOfAllProducts } = useSelector((s) => s.reducerOfBasket)
  const basketId = listOfIdsProducts.map(({ id }) => id)
  const goodsInBasket = listOfGoods.filter(({ id }) => basketId.includes(id))
  const priceOfAllProducts = totalPrice(listOfIdsProducts, goodsInBasket, currencyRate)

  useEffect(() => {
    dispatch(getCostOfAllProducts(priceOfAllProducts, currencyType))
  }, [dispatch, priceOfAllProducts, currencyType])

  return <span className="mr-1">{costOfAllProducts}</span>
}

GetTheSumOfAllProducts.propTypes = {}

export default React.memo(GetTheSumOfAllProducts)
