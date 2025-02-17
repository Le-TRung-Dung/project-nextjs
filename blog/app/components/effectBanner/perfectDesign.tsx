"use client";
import Image from "next/image";
import butchi from "../../img/butchi.png";
import banner from "../../img/bannercontainer.png";
import blog from "../../img/bannerblog.png";
import * as motion from "motion/react-client";
import { useEffect, useState } from "react";

export default function PerfectDesign() {
    const [isInView, setIsInView] = useState(false);
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

    const variants = {
        hidden: { opacity: 0, y: 100 }, // Bắt đầu từ phía dưới
        visible: {
            opacity: 1,
            y: 0, // Trượt lên phía trên
            transition: { duration: 0.5 }, // Thời gian animation
        },
    };

    return (
        <div
            style={{ backgroundColor: "#ff8000", height: "80vh" }}
            className="w-full overflow-hidden relative flex items-center justify-center"
        >
            <header className="w-2/3">
                <div className="w-1/2">
                    <p className="text-4xl text-white">Chọn thiết kế hoàn hảo</p>
                    <p className="text-white mt-14">
                        Tạo blog tuyệt đẹp phù hợp với phong cách của bạn. Chọn trong một
                        tuyển tập gồm các mẫu dễ sử dụng – tất cả đều có bố cục linh hoạt và
                        hàng trăm hình nền – hoặc thiết kế điều gì đó mới lạ.
                    </p>
                </div>
            </header>
            <div className="absolute top-16 -mr-[600px]">
                <Image src={butchi} width={600} alt={""} />
            </div>
            <motion.div
                id="animated-image"
                className="absolute top-1/3 -right-28"
                variants={variants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                <Image
                    src={banner}
                    width={800}
                    alt="Example"
                    className="w-full h-full object-cover rounded-lg"
                />
            </motion.div>
            <motion.div
                className="absolute top-2/4 -right-48"
                variants={variants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                <Image
                    src={blog}
                    width={700}
                    alt="Example"
                    className="w-full h-full object-cover rounded-lg"
                />
            </motion.div>
        </div>
    );
}
