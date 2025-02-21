"use client"
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const GoogleApiComponent = dynamic(() => import('../components/loginGoogle'), { ssr: false }); // Disable SSR for GoogleApiComponent

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
   console.log(isScrolled)

  //  const fetchBlogData = async () => {
  //   const BLOG_URL = "https://dunglt2001.blogspot.com/";
  //   const API_URL = `https://www.googleapis.com/blogger/v3/blogs/byurl?url=${BLOG_URL}&key=${API_KEY}`;

  //   try {
  //     const response = await fetch(API_URL);
  //     if (!response.ok) throw new Error("Lỗi khi gọi API");
  //     const data = await response.json();
  //     console.log(data)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // };



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
      <div className={` flex justify-between items-center w-full p-4 `}>
        <div className={`${isScrolled ? "text-black" : "text-white"} font-sans text-2xl ml-3`}>
          CreateBlog
          {/* <Image src={logo} alt="Logo" layout="intrinsic" width={90} className="w-[90px] ml-6" /> */}
        </div>
        <GoogleApiComponent isScrolled = {isScrolled} />
      </div>
    </header>
  );
}
