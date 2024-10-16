'use client'; // Ensure this is the very first line

import React, { Children } from "react";
import Link from "next/link";
import { Button } from "@material-tailwind/react";
import { AiOutlineSearch } from "react-icons/ai";
import { LuSearch } from "react-icons/lu";
import { LuShoppingBag } from "react-icons/lu";

const Header = () => {
  return (
    <div className="w-full border border-[#e6e6e6] ">
      <div className="container">
        <div className="flex md:justify-between md:flex-row flex-col gap-4 py-[16px]">
          <div className="flex flex-col sm:flex-row   gap-6">
            <h1 className="text-[20px] font-[700]">Your Next Store</h1>
            <ul className="flex items-center text-[14px] font-[500] gap-6">
              <li><Link href='/ui/home'>Home</Link></li>
              <li><Link href='/ui/Apparel'>Apparel</Link></li>
              <li><Link href='/ui/Accessories'>Accessories</Link></li>
            </ul>
          </div>
          <div className="relative flex  items-center gap-6">
            <input type="text" placeholder="Search for products..." className="border border-[#e6e6e6] pr-[30px] pl-[16px] rounded-[5px] py-[5px] text-[14px]" />
            <LuSearch className="absolute top-[8px] left-[180px] text-[20px]"/>
            <LuShoppingBag className="text-[22px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;