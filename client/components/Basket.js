import React from 'react'
import Head from './head'

const Basket = () => {
  return (
    <div>
      <Head title="Hello" />
      <div className="flex items-center justify-center h-screen" />
    </div>
  )
}

Basket.propTypes = {}

export default React.memo(Basket)
