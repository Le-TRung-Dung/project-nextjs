"use client"
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Input } from "antd";
import { FaBars, FaInfoCircle, FaQuestionCircle, FaSearch } from "react-icons/fa";
import { SignIn, SignedIn, UserButton } from "@clerk/nextjs";

export default function HeaderBlog() {
  return (
    <div className="flex justify-between items-center px-5 py-3 bg-white shadow-md">
      <div className="flex items-center gap-x-2">
        <FaBars size={17} className="text-xl ml-4 cursor-pointer" />
        <span className="font-sans text-2xl ml-3 text-orange-600">CreateBlog</span>
      </div>
      <div className="relative ">
        <FaSearch size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
        <input
          type="text"
          placeholder="Tìm kiếm bài đăng"
          className="w-[700px] bg-zinc-100 pl-10 pr-10 py-2 border rounded-xl focus:outline-none "
        />
        <FaInfoCircle
          onClick={() => window.open("https://support.google.com/blogger/answer/9675453?hl=vi&authuser=0&visit_id=638757463866040196-87532036&p=search-operators&rd=1", "_blank")}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-700 cursor-pointer" />
      </div>
      <div className="flex items-center gap-x-3 mr-5">
        <FaQuestionCircle className="text-xl cursor-pointer mr-3" />
        <UserButton />
      </div>
    </div>
  );
}
