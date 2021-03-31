import React from 'react'

import Head from './head'
import Main from './Main'

const Ecommerce = () => {
  return (
    <div>
      <Head title="Hello" />
        <Main />
      </div>
  )
}

Ecommerce.propTypes = {}

export default React.memo(Ecommerce)
