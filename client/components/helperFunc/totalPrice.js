const totalPrice = (listOfIdsProducts, goodsInBasket, currencyRate) => {
  const basketTotalPrice = listOfIdsProducts.reduce((acc, product) => {
    const productPrice =
      (goodsInBasket?.find(({ id }) => id === product.id)?.price || 0) * product.quantity
    return acc + productPrice
  }, 0)
  return (basketTotalPrice * currencyRate).toFixed(2)
}
export default totalPrice
