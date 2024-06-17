import React, { useState } from 'react'
import SignUp from './SignUp';
import Login from './Login';

export default function SignMain() {
    const [click, setClick] = useState(false)
    return (
        <>
            <div style={{ borderRadius: "10px" }} className='h-[5rem] bg-lime-100 w-full text-center font-bold flex items-center justify-center text-lime-900'>
                Let's learn, share &amp; inspire each other with our passion for computer engineering. Sign up now 🤘🏼
            </div>
            <div className="flex w-full justify-between">

                {click ? <Login/> :<SignUp/>}
                <div className='view flex flex-col'>
                    <div className='mt-5 ml-[3rem]'>Already have an account? <span className='text-blue-600 cursor-pointer ' onClick={()=>setClick(!click)}>{click ?<span> SignUp </span>: <span>SignIn</span>}</span></div>
                    <img src="https://dont-copy.netlify.app/assets/signup-OCG-APNN.svg" alt="not showing" />
                    <div className='text-[10px] mt-[2rem] text-center '>By signing up, you agree to our Terms & conditions, Privacy policy</div>
                </div>
            </div>
        </>
    )
}
