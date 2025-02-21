"use client"
import { useEffect, useState } from "react";

const SplashScreen = ({ onFinish }: { onFinish: () => void }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onFinish, 500); // Đợi hiệu ứng fade out xong rồi mới gọi onFinish
    }, 3000); // Hiển thị trong 3 giây

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="relative w-full h-full">
        {/* Ảnh nền */}
        <img
          src="/loading-bg.jpg"
          alt="Loading..."
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Hiệu ứng quay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
