import React from 'react'

export default function RecommendedGroup(join) {
    console.log(join)
    return (
        <div>
            <div className='flex flex-row '>
                <img src="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='twotone-thumb_up-24px'%20clip-path='url(%23clip0_1_1263)'%3e%3cpath%20id='Vector'%20opacity='0.3'%20d='M15.75%209V7.5H9L10.005%203.495L6.75%206.75V14.25H13.5L15.75%209Z'%20fill='black'/%3e%3cpath%20id='Vector_2'%20d='M6.75%2015.75H13.5C14.1225%2015.75%2014.655%2015.375%2014.88%2014.835L17.145%209.5475C17.2125%209.375%2017.25%209.195%2017.25%209V7.5C17.25%206.675%2016.575%206%2015.75%206H11.0175L11.73%202.5725L11.7525%202.3325C11.7525%202.025%2011.625%201.74%2011.4225%201.5375L10.6275%200.75L5.685%205.6925C5.415%205.9625%205.25%206.3375%205.25%206.75V14.25C5.25%2015.075%205.925%2015.75%206.75%2015.75ZM6.75%206.75L10.005%203.495L9%207.5H15.75V9L13.5%2014.25H6.75V6.75ZM0.75%206.75H3.75V15.75H0.75V6.75Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_1263'%3e%3crect%20width='18'%20height='18'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e" alt="" />
                <h1 className='ml-3'>Recommended Groups</h1>
            </div>
            <div className='mt-10 flex flex-col gap-7'>

            <div className='flex justify-between'>
                <div className='flex items-center'>
                    <img className='rounded-full w-[36px] h-[36px]' src="https://dont-copy.netlify.app/assets/recGroup1-JHI-0zi5.jpg" alt="" />
                    <div className='ml-3'>Leisure</div>
                </div>
                <button type="button" className=" flex flex-row items-center px-5 text-sm  font-medium text-black focus:outline-none bg-gray-100 rounded-full border border-gray-200 hover:bg-white hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Follow</button>
            </div>
            <div className='flex justify-between'>
                <div className='flex items-center'>
                    <img className='rounded-full w-[36px] h-[36px]' src="https://dont-copy.netlify.app/assets/recGroup2-A2R6AKaI.jpg" alt="" />
                    <div className='ml-3'>Activism</div>
                </div>
                <button type="button" className=" flex flex-row items-center px-5 text-sm  font-medium text-black focus:outline-none bg-gray-100 rounded-full border border-gray-200 hover:bg-white hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Follow</button>
            </div>
            <div className='flex justify-between'>
                <div className='flex items-center'>
                    <img className='rounded-full w-[36px] h-[36px]' src="https://dont-copy.netlify.app/assets/recGroup3-AxHGDmNo.jpg" alt="" />
                    <div className='ml-3'>MBA</div>
                </div>
                <button type="button" className=" flex flex-row items-center px-5 text-sm  font-medium text-black focus:outline-none bg-gray-100 rounded-full border border-gray-200 hover:bg-white hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Follow</button>
            </div>
            <div className='flex justify-between'>
                <div className='flex items-center'>
                    <img className='rounded-full w-[36px] h-[36px]' src="https://dont-copy.netlify.app/assets/recGroup4-cA6Wedko.jpg" alt="" />
                    <div className='ml-3'>Philosophy</div>
                </div>
                <button type="button" className=" flex flex-row items-center px-5 text-sm  font-medium text-black focus:outline-none bg-gray-100 rounded-full border border-gray-200 hover:bg-white hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Follow</button>
            </div>
            </div>
        </div>
    )
}
