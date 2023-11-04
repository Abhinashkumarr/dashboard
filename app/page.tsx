import {useState,useEffect} from 'react';
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/server";
import Image from 'next/image';
import img from '../public/img/maxresdefault.jpg';

const getHome=async()=>{
  const res=await fetch('https://jsonplaceholder.typicode.com/todos')
  return await res.json();

}
const HomePage= async()=>{
  const home=await getHome();

  return (
    <main className='flex  flex-col justify-center items-center min-h-screen text-center'>

      {/* 

     {
      
   home.map((home:any) =>(
    <li key='home.id'>{home.title}</li>
   ))
     } */}
     <div className='flex gap-12 px-12 align-start justify-start'>
        <Image
            src={img}
            alt="image"
            width={530}
            height={530}
            className="cursor-pointer1"
          />
          </div>
     <div>
 
 {/* <h1 className="text-4xl font-bold flex justify-start items-start">Welcome</h1> */}
<div className='pt-6 flex gap-3'>
<RegisterLink className='bg-blue-700  text-white  p-3 rounded-lg'>Sign Up</RegisterLink>
<LoginLink className='bg-green-500 text-white p-3 rounded-lg'>Sign In</LoginLink>
</div>
</div>
    </main>

  )
}

export default HomePage;