const ADD_ID = 'ADD_ID'

const initialState = {
  listOfIdsProducts: [],
  productTitle: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ID: {
      const { listOfIdsProducts, productTitle } = action
      return {
        ...state,
        listOfIdsProducts,
        productTitle
      }
    }
    default:
      return state
  }
}

export const addIdForProduct = (id, number = 1) => {
  return (dispatch, getState) => {
    const store = getState()
    const { listOfIdsProducts } = store.reducerOfBasket
    const { listOfGoods } = store.reducerOfGoods
    let isElementFound = false
    const { title: productTitle } = listOfGoods.find((product) => product.id === id)
    let updatedListOfIdsProducts = listOfIdsProducts.reduce((acc, product) => {
      if (product.id === id) {
        isElementFound = true
        const newQuantity = Math.max(product.quantity + number, 0)
        if (newQuantity > 0) {
          return [...acc, { id: product.id, quantity: newQuantity }]
        }
        return acc
      }
      return [...acc, product]
    }, [])

    if (!isElementFound) {
      updatedListOfIdsProducts = [...updatedListOfIdsProducts, { id, quantity: 1 }]
    }
    dispatch({
      type: ADD_ID,
      listOfIdsProducts: updatedListOfIdsProducts,
      productTitle
    })
  }
}
