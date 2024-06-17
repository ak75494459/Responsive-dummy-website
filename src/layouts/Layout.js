import React, { useState } from 'react';
import Header from '../components/Header';
import Buttons from '../components/Buttons';
import NewsFeeds from '../components/NewsFeeds';
import MobileHeader from '../components/MobileHeader';
import MobileNav from '../components/MobileNav';
import MobileButtons from '../components/MobileButtons';
import JoinBtn from '../components/JoinBtn';
import RecommendedGroup from '../components/RecommendedGroup';


export default function Layout({children}) {
  const [join , setJoin] = useState(true);
   
  const handleJoinBtn = ()=>{
    setJoin(!join)
  }
  return (
    <div>
      <Header/>
     <MobileNav/>
      {children}
      <div id='mainButton'>
      <Buttons><JoinBtn handleJoinBtn ={handleJoinBtn} join={join} /></Buttons>
      <hr class="h-px  bg-gray-200 border-0 dark:bg-gray-700 w-[80%] m-auto"></hr>
      </div>
      <MobileButtons/>
      <NewsFeeds>{join ? null: <RecommendedGroup/>}</NewsFeeds>
      <MobileHeader/>
    </div>
  )
}
