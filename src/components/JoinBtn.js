import React from 'react'

export default function JoinBtn({handleJoinBtn,join,children}) {
    
  return (
    <>
    {
        join 
        ?
        <button onClick={handleJoinBtn} type="button" className="flex flex-row gap-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"><img src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='22'%20height='22'%20viewBox='0%200%2022%2022'%20fill='none'%3e%3cg%20clip-path='url(%23clip0_1_859)'%3e%3cpath%20d='M7.33333%209.16671H4.58333V6.41671H2.75V9.16671H0V11H2.75V13.75H4.58333V11H7.33333V9.16671ZM16.5%2010.0834C18.0217%2010.0834%2019.2408%208.85504%2019.2408%207.33337C19.2408%205.81171%2018.0217%204.58337%2016.5%204.58337C16.2067%204.58337%2015.9225%204.62921%2015.6658%204.71171C16.1883%205.45421%2016.4908%206.35254%2016.4908%207.33337C16.4908%208.31421%2016.1792%209.20337%2015.6658%209.95504C15.9225%2010.0375%2016.2067%2010.0834%2016.5%2010.0834ZM11.9167%2010.0834C13.4383%2010.0834%2014.6575%208.85504%2014.6575%207.33337C14.6575%205.81171%2013.4383%204.58337%2011.9167%204.58337C10.395%204.58337%209.16667%205.81171%209.16667%207.33337C9.16667%208.85504%2010.395%2010.0834%2011.9167%2010.0834ZM17.985%2012.0634C18.7458%2012.7325%2019.25%2013.585%2019.25%2014.6667V16.5H22V14.6667C22%2013.255%2019.8275%2012.3842%2017.985%2012.0634ZM11.9167%2011.9167C10.0833%2011.9167%206.41667%2012.8334%206.41667%2014.6667V16.5H17.4167V14.6667C17.4167%2012.8334%2013.75%2011.9167%2011.9167%2011.9167Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_859'%3e%3crect%20width='22'%20height='22'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e" alt="" />Join Group</button>
        :
        <button onClick={handleJoinBtn} type="button" className="flex flex-row gap-2 text-gray-600 border-2  font-medium rounded-sm text-sm px-5 py-2.5 me-2 mb-2 "><img src="data:image/svg+xml,%3csvg%20width='22'%20height='22'%20viewBox='0%200%2022%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='outline-exit_to_app-24px'%20clip-path='url(%23clip0_1_1222)'%3e%3cpath%20id='Vector'%20d='M9.24917%2014.2908L10.5417%2015.5833L15.125%2011L10.5417%206.41667L9.24917%207.70917L11.6142%2010.0833H2.75V11.9167H11.6142L9.24917%2014.2908ZM17.4167%202.75H4.58333C3.56583%202.75%202.75%203.575%202.75%204.58333V8.25H4.58333V4.58333H17.4167V17.4167H4.58333V13.75H2.75V17.4167C2.75%2018.425%203.56583%2019.25%204.58333%2019.25H17.4167C18.425%2019.25%2019.25%2018.425%2019.25%2017.4167V4.58333C19.25%203.575%2018.425%202.75%2017.4167%202.75Z'%20fill='%236A6A6B'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_1222'%3e%3crect%20width='22'%20height='22'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e" alt="" />Leave Group</button>
    }
    {children}
    </>
  )
}
