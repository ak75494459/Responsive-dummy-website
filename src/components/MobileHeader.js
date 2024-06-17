import React, { useState } from 'react'
import ModalMobile from './ModalMobile';
import SignUpMobile from './SignUpMobile';

export default function MobileHeader() {
    const[showSignUp , setShowSignUp] = useState(false);
  return (
    <>
        {showSignUp ? <ModalMobile onClose={()=>setShowSignUp(false)}><SignUpMobile/></ModalMobile> : null}
    <div>
      <button onClick={()=>setShowSignUp(true)} className="roundNav w-[54px] h-[54px] rounded-full bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 text-white  justify-center items-center fixed top-[90%] right-2 z-10 md:hidden flex">
      <img src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='icon/image/edit_24px'%3e%3cpath%20id='icon/image/edit_24px_2'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M17.6588%203C17.4088%203%2017.1488%203.1%2016.9588%203.29L15.1288%205.12L18.8788%208.87L20.7088%207.04C21.0988%206.65%2021.0988%206.02%2020.7088%205.63L18.3688%203.29C18.1688%203.09%2017.9188%203%2017.6588%203ZM14.0588%209.02L14.9788%209.94L5.91878%2019H4.99878V18.08L14.0588%209.02ZM2.99878%2017.25L14.0588%206.19L17.8088%209.94L6.74878%2021H2.99878V17.25Z'%20fill='white'/%3e%3c/g%3e%3c/svg%3e" alt="" />
      </button>
    </div>
    </>
  )
}
