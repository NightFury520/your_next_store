"use client"
import React from "react"
import Link from "next/link"
import Image from "next/image"
import {prismaClient} from "@/app/lib/prisma"
import { computerProductTotalPrice } from "@/app/constant/products"


export default async function Accessories () {
  const accessories_navigation = await prismaClient.product.findMany({
    where:{
       category:{
        slug:"accessories"
       }
    }
  })
  return(
    <div className="w-full mb-[40px]">
      <div className="container">
      <h1 className="text-[28px] font-[700] my-[15px] mx-[10px]">Category:Accessories</h1>
      <div className="flex grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2  ">
          {
            accessories_navigation.map((item,index) =>(
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
        </div>
    </div>
  )
}