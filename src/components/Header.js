import React, { useState } from 'react'
import Modal from './Modal';
import SignMain from './SignMain';


export default function Header() {
    const[showSignUp , setShowSignUp] = useState(false);
    return (
        <>
        <div className='h-[72px]  flex-row m-auto  justify-center item-center hidden md:flex' id='mainNavbar'>
            <div className="img w-[162.57px] h-[24] m-auto">
                <img src="https://dont-copy.netlify.app/assets/logo-S2lIhR8K.svg" alt="not showing" />
            </div>
            <div className='search m-auto flex flex-row  p-2 '>
                <img className='relative left-[32px]' alt='not showing' src="data:image/svg+xml,<svg%20width='22'%20height='22'%20viewBox='0%200%2022%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'><g%20id='baseline-search-24px'%20clip-path='url(%23clip0_1_1172)'><path%20id='Vector'%20d='M14.2083%2012.8333H13.4842L13.2275%2012.5858C14.1258%2011.5408%2014.6667%2010.1842%2014.6667%208.70833C14.6667%205.4175%2011.9992%202.75%208.70833%202.75C5.4175%202.75%202.75%205.4175%202.75%208.70833C2.75%2011.9992%205.4175%2014.6667%208.70833%2014.6667C10.1842%2014.6667%2011.5408%2014.1258%2012.5858%2013.2275L12.8333%2013.4842V14.2083L17.4167%2018.7825L18.7825%2017.4167L14.2083%2012.8333ZM8.70833%2012.8333C6.42583%2012.8333%204.58333%2010.9908%204.58333%208.70833C4.58333%206.42583%206.42583%204.58333%208.70833%204.58333C10.9908%204.58333%2012.8333%206.42583%2012.8333%208.70833C12.8333%2010.9908%2010.9908%2012.8333%208.70833%2012.8333Z'%20fill='%237A7A7A'/></g><defs><clipPath%20id='clip0_1_1172'><rect%20width='22'%20height='22'%20fill='white'/></clipPath></defs></svg>" />
                <input type="search" id="default-search" class="bg-slate-200 bg-slate-200 px-10 rounded-full border-none  w-[360px] h-[42px]" placeholder="Search" />

            </div>
            <div className='login m-auto'>
                <div className='flex flex-row cursor-pointer font-bold'>
                    <h1 className='w-[183px] h-[21px]' onClick={()=>{setShowSignUp(true)}}>Create Account.<span className='text-blue-700'>It's Free!</span></h1><span className=' w-[24px]'><img src="data:image/svg+xml,%3csvg%20width='22'%20height='22'%20viewBox='0%200%2022%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='baseline-arrow_drop_down-24px'%20clip-path='url(%23clip0_1_1136)'%3e%3cpath%20id='Vector'%20d='M6.41667%209.16669L11%2013.75L15.5833%209.16669H6.41667Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_1136'%3e%3crect%20width='22'%20height='22'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e" alt="not showing" /></span>
                </div>
            </div>
            {showSignUp ? <Modal onClose={()=>{setShowSignUp(false)}}><SignMain/></Modal>:null}
        </div>
        </>
    )
}
