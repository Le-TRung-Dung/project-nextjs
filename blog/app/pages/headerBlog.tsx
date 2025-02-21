"use client"
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Input } from "antd";


export default function HeaderBlog() {
  const [isScrolled, setIsScrolled] = useState(false);
  return (
    <header
      className={`${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      } fixed top-0 left-0 z-20 w-full transition-all duration-300`}
    >
      <Input />
    </header>
  );
}
