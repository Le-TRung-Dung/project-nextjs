"use client"
import Image from "next/image";
import butchi from "../../img/butchi.png";
import banner from "../../img/bannercontainer.png";
import blog from "../../img/bannerblog.png";
import * as motion from "motion/react-client";
import { useEffect, useState } from "react";
import { useMedia } from "use-media";

export default function PerfectDesign() {
    const [isInView, setIsInView] = useState(false);
    const isMobile = useMedia("(max-width: 768px)");
    console.log(isMobile)
    const [hasAnimated, setHasAnimated] = useState(false); // Trạng thái kiểm soát hiệu ứng đã chạy

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        // Chỉ kích hoạt hiệu ứng một lần
                        setIsInView(true);
                        setHasAnimated(true); // Đánh dấu hiệu ứng đã chạy
                    }
                });
            },
            { threshold: 0.5 } // Phần tử cần hiển thị ít nhất 50% để kích hoạt
        );

        const target = document.querySelector("#animated-image");
        if (target) observer.observe(target);

        return () => observer.disconnect();
    }, [hasAnimated]); // Thêm `hasAnimated` để ngăn việc observer chạy lại khi hiệu ứng đã chạy

    return (
        <div
            style={{ backgroundColor: "#ff8000", height: isMobile ? "60vh" : "80vh" }}
            className="w-full overflow-hidden relative flex items-center justify-center"
        >
            <header className="xl:w-2/3">
                <div className="xl:w-1/2 w-3/4 ml-10 xl:ml-0">
                    <p className="xl:text-4xl text-2xl text-white">Chọn thiết kế hoàn hảo</p>
                    <p className="text-white xl:mt-14 mt-5">
                        Tạo blog tuyệt đẹp phù hợp với phong cách của bạn. Chọn trong một
                        tuyển tập gồm các mẫu dễ sử dụng – tất cả đều có bố cục linh hoạt và
                        hàng trăm hình nền – hoặc thiết kế điều gì đó mới lạ.
                    </p>
                </div>
            </header>
            <div className="absolute top-16 -mr-[600px] hidden xl:block">
                <Image src={butchi} width={600} alt={""} />
            </div>
            <motion.div
                id="animated-image"
                className="absolute xl:top-1/3 -bottom-16 -right-28"
                // {...(isMobile ? { variants } : {})} // Chỉ thêm variants khi isMobile là true
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                <Image
                    src={banner}
                    width={isMobile ? 400 : 800}
                    alt="Example"
                    className="h-full object-cover rounded-lg"
                />
            </motion.div>
            <motion.div
                className="absolute top-2/4 -right-48 hidden xl:block"
                // variants={variants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                <Image
                    src={blog}
                    width={700}
                    alt="Example"
                    className="h-full object-cover rounded-lg"
                />
            </motion.div>
        </div>
    );
}
