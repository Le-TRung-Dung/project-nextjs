"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../img/Logo.png"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
   console.log(isScrolled)

  useEffect(() => {
    const handleScroll = () => {
      // Kiểm tra nếu cuộn màn hình vượt quá 50px
      setIsScrolled(window.scrollY > 50);
    };

    // Gắn sự kiện scroll
    window.addEventListener("scroll", handleScroll);

    // Hủy bỏ sự kiện khi component bị unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      } fixed top-0 left-0 z-20 w-full transition-all duration-300`}
    >
      <div className="flex justify-between items-center w-full">
        <div>
          <Image src={logo} alt="Logo" layout="intrinsic" width={90} className="w-[90px] ml-6" />
        </div>
        <div className={` ${isScrolled ? "text-black" : "text-white"} text-xl mr-6 font-bold `}>
          Đăng nhập
        </div>
      </div>
    </header>
  );
}
