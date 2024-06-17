import React from 'react'

export default function MobileButtons() {
    return (
        <div className='flex justify-between items-center hidden' id='mobileButton'> 
            <div className='m-4 font-bold text-xl text-gray-600'>
                Posts(368)
            </div>
            <button
                type="button"
                className="m-4 flex flex-row py-2.5 px-5 font-medium text-black focus:outline-none bg-gray-100 rounded border border-gray-200 hover:bg-white hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                Filter: All
                <span>
                    <img src="data:image/svg+xml,%3csvg%20width='22'%20height='22'%20viewBox='0%200%2022%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='baseline-arrow_drop_down-24px'%20clip-path='url(%23clip0_1_1136)'%3e%3cpath%20id='Vector'%20d='M6.41667%209.16669L11%2013.75L15.5833%209.16669H6.41667Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_1136'%3e%3crect%20width='22'%20height='22'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e" alt="not showing" />
                </span>
            </button>
        </div>
    )
}
