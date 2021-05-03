import React from 'react'
import PropTypes from 'prop-types'

const MobileMainMenu = ({ setIsOpenMobileMenu, isOpenMobileMenu }) => {
  return (
    <div className="mr-auto sm:hidden">
      <button
        onClick={() => setIsOpenMobileMenu(!isOpenMobileMenu)}
        type="button"
        className="bg-red-300 inline-flex items-center justify-center p-2 rounded-lg border border-cyan-400 focus:outline-none"
        aria-controls="mobile-menu"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        {!isOpenMobileMenu ? (
          <svg
            className="block h-3 w-3"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        ) : (
          <svg
            className="block h-3 w-3"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
      </button>
    </div>
  )
}

MobileMainMenu.propTypes = {
  setIsOpenMobileMenu: PropTypes.func.isRequired,
  isOpenMobileMenu: PropTypes.bool.isRequired
}

export default MobileMainMenu
