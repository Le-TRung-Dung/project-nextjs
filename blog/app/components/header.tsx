"use client"
import { useState, useEffect } from "react";
import { API_KEY, CLIENT_ID, SCOPES } from "../constants/conts";
import { gapi } from "gapi-script";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
   console.log(isScrolled)

   const fetchBlogData = async () => {
    const BLOG_URL = "https://dunglt2001.blogspot.com/";
    const API_URL = `https://www.googleapis.com/blogger/v3/blogs/byurl?url=${BLOG_URL}&key=${API_KEY}`;

    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error("Lỗi khi gọi API");
      const data = await response.json();
      console.log(data)
    } catch (err) {
      console.log(err)
    }
  };

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

  useEffect(() => {
    // Khởi tạo Google API khi component được mount
    function start() {
      gapi.client
        .init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          scope: SCOPES,
          discoveryDocs: [
            "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest",
          ],
        })
        .then(() => {
          // console.log("Google API đã được khởi tạo thành công.");
        })
        .catch((error) => {
          // console.error("Lỗi khi khởi tạo Google API:", error);
        });
    }

    gapi.load("client:auth2", start);
  }, []);

  const handleAuthClick = () => {
    gapi.auth2
      .getAuthInstance()
      .signIn()
      .then((LOG) => {
        console.log(LOG)
        // Lấy thông tin người dùng sau khi đăng nhập thành công
      })
      .catch((error) => {
        console.error("Lỗi khi đăng nhập:", error);
      });
  };

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
        <div onClick={()=>handleAuthClick()} className={`${isScrolled ? "text-black" : "text-white"} text-xl mr-6 font-bold `}>
          Đăng nhập
        </div>
      </div>
    </header>
  );
}
