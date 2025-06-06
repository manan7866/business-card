"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { IoCall } from "react-icons/io5";

import { MdOutlineWhatsapp } from "react-icons/md";
import { IoIosMailOpen } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
import Link from 'next/link';



const Page = () => {
  const [isCall , setIscall] = useState<boolean>(false)
  const [isWhatsapp , setIsWhatsapp] = useState<boolean>(false)
  const [isMail , setIsMail] = useState<boolean>(false)
  const [isLocation , setIsLocation] = useState<boolean>(false)
  const [isWeb , setIsWeb] = useState<boolean>(false)

  
  return (
    <div  style={{ backgroundImage: 'url(/images/webBg.png)' ,
                 backgroundSize : 'cover' }} className='h-[700px] bg-black flex flex-col justify-between items-center' >
                  <div className='my-20 flex gap-2 w-[90%] items-center'>
                  <Image className='my-4' alt='Bussiness Image' height={150} width={150} src='/images/dVlogo.png'/>
                  <div className=''>
                    <h1 className='text-4xl text-orange-600 font-bold '>Umer and Partners</h1>
                    <p className='text-lg text-gray-400 font-bold'>Developers</p>
                  </div>
                  </div>
       <div className=' mb-28'>
        <h1 className='text-5xl my-2 mx-10 text-orange-600 font-bold '>Mohammad Umer</h1>
        <div className='relative h-28 rounded-2xl bg-orange-500 w-[100%] flex justify-between px-5 items-center'>
          <div className='relative'>
          <IoCall onClick={()=>{
            setIscall(!isCall)
            setIsLocation(false)
            setIsWeb(false)
            setIsWhatsapp(false)
            setIsMail(false)
            }} className=' text-6xl py-3 px-3 bg-black cursor-pointer text-orange-500  rounded-full' />
          {isCall && (
            <div className='absolute w-max bg-slate-950 py-6 px-3 rounded-b-xl z-20'>
              <Link href="">
                <p className='py-2 text-orange-500 '>03000001</p>
              </Link>
              <Link href="">
                <p className='py-2 text-orange-500 '>03000002</p>
              </Link>
              <Link href="">
                <p className='py-2 text-orange-500 '>03000003</p>
              </Link>
            </div>
          )}
          </div>
          <div className='relative'>
          <MdOutlineWhatsapp onClick={()=>{
            setIsWhatsapp(!isWhatsapp)
            setIsLocation(false)
            setIsWeb(false)
            setIscall(false)
            setIsMail(false)
            }} className=' text-6xl py-3 px-3 cursor-pointer bg-black text-orange-500  rounded-full' />
          {isWhatsapp && (
            <div className='absolute w-max bg-slate-950 py-6 px-3 rounded-b-xl z-20'>
              <Link href="https://wa.me/923000001">
                <p className='py-2 text-orange-500 '>+923000001</p>
              </Link>
              <Link href="https://wa.me/923000002">
                <p className='py-2 text-orange-500 '>+923000002</p>
              </Link>
              <Link href="https://wa.me/923000003">
                <p className='py-2 text-orange-500 '>+923000003</p>
              </Link>
            </div>
          )}
          </div>
          <div className='relative'>
          <IoIosMailOpen onClick={()=>{
            setIsMail(!isMail)
            setIsLocation(false)
            setIsWeb(false)
            setIscall(false)
            setIsWhatsapp(false)
          }} className=' text-6xl py-3 px-3 cursor-pointer bg-black text-orange-500  rounded-full' />
          {isMail && (
            <div  className='absolute w-max bg-slate-950 py-6 px-3 rounded-b-xl z-20'>
              <Link href="https://wa.me/923000001">
                <p className='py-2 text-orange-500 '>xyz@gmail.cpm</p>
              </Link>
              <Link href="https://wa.me/923000002">
                <p className='py-2 text-orange-500 '>123@gamil.com</p>
              </Link>
              <Link href="https://wa.me/923000003">
                <p className='py-2 text-orange-500 '>abc@gmail.com</p>
              </Link>
            </div>
          )}
          </div>
          <div className='relative'>
          <IoLocationSharp onClick={()=>{
            setIsLocation(!isLocation)
            setIsMail(false)
            setIsWeb(false)
            setIscall(false)
            setIsWhatsapp(false)
            ;}} className=' text-6xl py-3 px-3 cursor-pointer bg-black text-orange-500  rounded-full' />
          {isLocation && (
            <div  className='absolute w-max bg-slate-950 py-6 px-3 rounded-b-xl z-20'>
              <Link href="https://www.google.com/maps?q=24.8607,67.0011">
                <p className='py-2 text-orange-500 '>Karachi Branch</p>
              </Link>
              <Link href="https://www.google.com/maps?q=31.5204,74.3587">
                <p className='py-2 text-orange-500 '>Lahore Branch</p>
              </Link>
              <Link href="https://www.google.com/maps?q=33.6844,73.0479">
                <p className='py-2 text-orange-500 '>Islamabad Branch</p>
              </Link>
            </div>
          )}
          </div>
          <div className='relative'>
          <TbWorld onClick={()=>{
            setIsWeb(!isWeb)
            
            setIsLocation(false)
            setIscall(false)
            setIsWhatsapp(false)
            setIsMail(false)
            }} className=' text-6xl py-3 px-3 bg-black cursor-pointer text-orange-500  rounded-full' />
          {isWeb && (
            <div  className='absolute bg-slate-950 py-6 px-3 w-max rounded-b-xl z-20'>
              <Link href="">
                <p className='py-2 text-orange-500 '>Website 1</p>
              </Link>
              <Link href="">
                <p className='py-2 text-orange-500 '>Website 2</p>
              </Link>
              <Link href="">
                <p className='py-2 text-orange-500 '>Website 3</p>
              </Link>
            </div>
          )}
          </div>
          <p className='absolute bg-black bottom-[-19px] text-gray-400 left-1/5 py-1 px-2 rounded-full z-10'>Touch these icon to Connect with me</p>
        </div>
       </div>
    </div>
  )
}

export default Page
