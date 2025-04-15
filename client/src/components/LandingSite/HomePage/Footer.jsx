import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className='bg-[#eb4757] w-[100%]'>
      <div className='flex max-w-[1200px] m-auto justify-center gap-[300px] '>
        <div className='h-[300px] pt-[60px]'>
          Contact Us
        </div>

        <div className='h-[300px] pt-[60px]'>
          Social Media
        </div>

        <div className='h-[300px] pt-[60px]'>
          Term and condition
        </div>
      </div>
    </div>
  )
}
