import React from 'react'
import Head from './head'

const Logs = () => {
  return (
    <div>
      <Head title="Hello" />
      <div className="flex items-center justify-center h-screen" />
    </div>
  )
}

Logs.propTypes = {}

export default React.memo(Logs)
