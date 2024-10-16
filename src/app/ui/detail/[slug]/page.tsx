"use client" 
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { AiOutlineRight } from "react-icons/ai";
import { prismaClient } from "@/app/lib/prisma";

interface ProductDetailsProps {
  params :{
    slug : string
  }
}

export default async function Detail ({params:{slug}}:ProductDetailsProps) {
  const product = await prismaClient.product.findFirst({
    where:{
      slug:slug
    },
    include:{
      category:{
        include:{
          products:{
            where:{
              slug:"apparel"
            }
          }
        }
      }
    }
  })
  console.log("product:",product)
  return(
    <div className="w-full pt-[10px] pb-[60px] px-[10px]">
      <div className="container">
        
        <div className="flex items-center gap-3 text-[13px] py-[30px]">
          <Link href='/ui/home'>All Products</Link>
          <AiOutlineRight/>
          <Link href={`/ui/${product?.category.name}`}>{product?.category.name}</Link>
          <AiOutlineRight/>
          <p>{product?.name}</p>
        </div>
        <div className="lg:hidden"><h1 className="text-life font-[700] text-[28px]">{product?.name}</h1>
           {
                    Number(product?.discountPercentage)>0?
                    <p className="text-[13px] font-[600] line-through">
                    
                    {Number(product?.basePrice).toLocaleString("en-US",{
                      style:"currency",
                      currency:"USD"
                    })}
                    
                  </p>:
                  <p className="text-[16px] font-[700] text-red-500">
                    
                  {Number(product?.basePrice).toLocaleString("en-US",{
                    style:"currency",
                    currency:"USD"
                  })}
                  
                </p>
                  }
                  {
                    Number(product?.discountPercentage)>0&&<p className="text-[16px] font-[700] text-red-500">
                    
                    {(Number(product?.basePrice)*(100-Number(product?.discountPercentage))/100).toLocaleString("en-US",{
                      style:"currency",
                      currency:"USD"
                    })}
                    
                  </p>
                  }
        
        </div>
        <div className="flex flex-col lg:flex-row gap-4">
          <Image src={product?.imageUrl[0]} alt="img" width={1000} height={500} className="px-[10px] w-full lg:w-7/12" />
          <div className="w-full lg:w-5/12 flex flex-col gap-5 px-[10px]">
            <div className="hidden lg:block"><h1 className="text-life font-[700] text-[28px]">{product?.name}</h1>
           {
                    Number(product?.discountPercentage)>0?
                    <p className="text-[13px] font-[600] line-through">
                    
                    {Number(product?.basePrice).toLocaleString("en-US",{
                      style:"currency",
                      currency:"USD"
                    })}
                    
                  </p>:
                  <p className="text-[16px] font-[700] text-red-500">
                    
                  {Number(product?.basePrice).toLocaleString("en-US",{
                    style:"currency",
                    currency:"USD"
                  })}
                  
                </p>
                  }
                  {
                    Number(product?.discountPercentage)>0&&<p className="text-[16px] font-[700] text-red-500">
                    
                    {(Number(product?.basePrice)*(100-Number(product?.discountPercentage))/100).toLocaleString("en-US",{
                      style:"currency",
                      currency:"USD"
                    })}
                    
                  </p>
                  }</div>
            <p className="text-[14px]">{product?.description}</p>
            <button className="bg-[#0f172a] text-white w-full py-[6px] font-[600] rounded-[20px]">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}