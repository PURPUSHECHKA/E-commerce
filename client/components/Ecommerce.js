import React from 'react'

import Head from './head'
import Main from './Main'

const Ecommerce = () => {
  return (
    <div className="bg-gradient-to-b from-cyan-50 via-fuchsia-50 to-amber-50">
      <Head title="Hello" />
      <Main />
    </div>
  )
}

Ecommerce.propTypes = {}

export default React.memo(Ecommerce)
