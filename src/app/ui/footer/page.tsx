"use client"

import React from "react"
import Link from "next/link"
export default function Footer () {
  return(
    <div className="w-full bg-primary py-[50px]">
      <div className="container"> 
        <div className="flex justify-between flex-col gap-10 sm:items-center sm:flex-row">
          <div className="flex flex-col gap-3">
            <h4 className="text-[14px] font-[600]">Subscribe to our newsletter</h4>
            <div className="flex gap-4">
              <input type="email"  placeholder="Enter your email" className="px-[10px] text-[14px] border border-[#ddd] rounded-[5px] w-[200px]" />
              <button type="submit" className="bg-[#2e2e2e] text-[#fff] text-[13px] font-[600] py-[8px] px-[16px] rounded-[20px]"> Subscribe</button>
            </div> 
          </div>
          <div className="flex gap-10">
            <div className="flex flex-col gap-2 ">
              <p className="text-[14px] font-[600]">Products</p>
              <Link href='/ui/Apparel' className="text-[12px] hover:underline hover:underline-offset-4">Apparel</Link>
              <Link href='/ui/Accessories' className="text-[12px] hover:underline hover:underline-offset-4">Accessories</Link>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[14px] font-[600]">Support</p>
              <Link href='' className="text-[12px] hover:underline hover:underline-offset-4">Features</Link>
              <Link href='' className="text-[12px] hover:underline hover:underline-offset-4">Pricing</Link>
              <Link href='' className="text-[12px] hover:underline hover:underline-offset-4">Contact Us</Link>
            </div>
          </div>
        </div>
        <div className=" flex justify-between flex-col md:flex-row gap-4 items-center mt-[40px]">
          <div>
            <p className="text-[12px] text-[#888]">© 2024 Your Next Store <br/>
            Delightfully commerce for everyone</p>
          </div>
          <div className="flex gap-5">
            <Link href='' className="text-[12px]">@zaiste</Link>
            <Link href='' className="text-[12px]">@typeofweb</Link>
          </div>
        </div>
      </div>
    </div>
  )
}