import React from 'react'

const ProductNotFound = () => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-2xl sm:text-4xl">Sorry, but the product was not found.</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-32 w-32 sm:h-40 sm:w-40"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <p className="text-gray-500 text-xl sm:text-2xl">Try changing your search terms</p>
    </div>
  )
}

ProductNotFound.propTypes = {}

export default ProductNotFound
