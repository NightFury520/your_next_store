"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Home_nav, Home_title } from "@/app/constant"
import {prismaClient} from "@/app/lib/prisma"

export default async function Homepage () {
  const Home_navigation = await prismaClient.product.findMany({})
  return(
    <div className="w-full">
      <div className="container py-[10px] ">
        <div className="flex justify-around items-center bg-primary flex-col md:flex-row py-[50px] m-[10px] px-[20px]" >
          <div className="bg-primary md:w-1/3 max-w-[500px] flex flex-col  gap-4 ">
            <h1 className="text-[30px] font-[700]">Discover our  Curated Collection</h1>
            <p className="">Explore our carefully selected products for your home and lifestyle.</p>
            <Link href='' className="bg-black py-[8px] px-[10px] rounded-[20px] block  text-white w-[100px] text-[14px] text-center"> Shop Now</Link>

          </div>
           <Image src='/a (14).jpg' alt="teaport" width={400} height={400}/>
        </div>
        <div className="flex justify-center items-center grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 ">
        {
            Home_navigation.map((item,index) =>(
              <Link key={index} href={`/ui/detail/${item.slug}`} className="content-box border-2 m-[10px] transition-opacity duration-300 hover:opacity-70" >
                <Image src={item.imageUrl[0]} alt="image" width={700} height={100}/>
                <div className="p-[20px]">
                  <h4 className="text-[16px] font-[600]">{item.name}</h4>
                  {
                    item.discountPercentage>0?
                    <p className="text-[13px] font-[600] line-through">
                    
                    {Number(item.basePrice).toLocaleString("en-US",{
                      style:"currency",
                      currency:"USD"
                    })}
                    
                  </p>:
                  <p className="text-[16px] font-[700] text-red-500">
                    
                  {Number(item.basePrice).toLocaleString("en-US",{
                    style:"currency",
                    currency:"USD"
                  })}
                  
                </p>
                  }
                  {
                    item.discountPercentage>0&&<p className="text-[16px] font-[700] text-red-500">
                    
                    {(Number(item.basePrice)*(100-Number(item.discountPercentage))/100).toLocaleString("en-US",{
                      style:"currency",
                      currency:"USD"
                    })}
                    
                  </p>
                  }
                </div>

              </Link>
            ))
          }
        </div>
        <div className=" flex grid grid-cols-1 lg:grid-cols-2">
          {
            Home_title.map((item,index) =>(
              <Link href={`/ui/${item.title}`} className="border-box  mx-[10px] my-[20px] rounded-[5px] transition duration-300  ">
                <div className="overflow-hidden rounded-[5px]"><Image src={item.img} alt="img" width={1500} height={500} className=" w-[1000px] scale-105  rounded-[5px]  transition duration-300 hover:opacity-70 hover:scale-100  "/></div>
                <div className="p-[10px]">
                  <h4 className="font-[600] text-[16px]">{item.title}</h4>
                  <p className=" text-[14px]">Shop now</p>
                </div>
              </Link>
            ))
          }
        </div>


      </div>
    </div>
  )
} 