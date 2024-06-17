import React, { useState,useEffect } from 'react'

export default function MobileNav() {
    const [leave, setLeave] = useState(false);
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 170) {
                setScrolling(true)
            } else {
                setScrolling(false)
            }
        }
        window.addEventListener('scroll',handleScroll);
        return()=>{
            window.removeEventListener('scroll',handleScroll)
        }

    }, [])

    return (
        <div className={`md:hidden flex justify-between fixed w-full items-center ${scrolling ? 'hidden' : ''}`}>
            <div className='m-7 float-left'>
                <img src="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16%207H3.83L9.42%201.41L8%200L0%208L8%2016L9.41%2014.59L3.83%209H16V7Z'%20fill='white'/%3e%3c/svg%3e" alt="" />
            </div>
            <button className='text-white m-7 border-2 p-1 rounded float-right' onClick={() => { setLeave(!leave) }}>
                {leave ? <span>Leave Group</span> : <span>Join Group</span>}
            </button>
        </div>
    )
}
