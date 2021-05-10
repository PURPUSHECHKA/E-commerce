const getImage = (products) => {
  return products.map((product) => ({
    ...product,
    image: `https://source.unsplash.com/800x600/?${/\w+(?=\s)/gi.exec(product.title)}`
  }))
}

export default getImage
