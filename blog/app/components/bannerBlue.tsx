"use client"

import { AnimatePresence } from "motion/react"
import * as motion from "motion/react-client"
import { useEffect, useState } from "react"
import bannerred from "../img/bannerred.png"
import bannerblue from "../img/bannerblue.png"
import bannergreen from "../img/bannergreen.png"
import Image from "next/image"


const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
        const delay = i * 0.5
        return {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
                opacity: { delay, duration: 0.01 },
            },
        }
    },
}

const cardList = [
    {
        id: 1,
        title: "Khám phá thiên nhiên",
        description: "Hãy tận hưởng vẻ đẹp của thiên nhiên hoang sơ.",
        image: bannerred, // Đường dẫn hình ảnh
        background: "#bc382e"
    },
    {
        id: 2,
        title: "Thư giãn với biển cả",
        description: "Làn sóng xanh, bầu trời trong vắt chờ bạn.",
        image: bannerblue,
        background: "#4583aa"
    },
    {
        id: 3,
        title: "Hòa mình vào đô thị",
        description: "Thành phố sôi động, nơi những giấc mơ thành hiện thực.",
        image: bannergreen,
        background: "#388d80"
    },
];



export default function BannerBlue() {
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % cardList.length); // Chuyển sang thẻ tiếp theo
        }, 7000);

        return () => clearInterval(interval); // Dọn dẹp khi component bị unmount
    }, []);

    const cardVariants = {
        initial: {
            opacity: 0,
            y: 50, // Xuất hiện từ dưới
        },
        animate: {
            opacity: 1,
            y: 0, // Di chuyển vào vị trí trung tâm
        },
        exit: {
            opacity: 0,
            y: 50, // Biến mất và tụt xuống dưới
        },
    };
    return (
        <div className="relative z-0 w-full h-screen flex items-center justify-center bg-gray-100 overflow-hidden">
            <AnimatePresence exitBeforeEnter>
                {cardList.map((card, index) => {
                    if (index !== currentIndex) return null; // Chỉ hiển thị thẻ hiện tại
                    return (
                        <motion.div
                            key={card.id}
                            variants={cardVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: 0.9 }}
                            className="absolute w-full h-full shadow-lg overflow-hidden"
                        >
                            <div className="mb-auto flex justify-center">
                                {/* Hình ảnh */}
                                <Image
                                    src={card.image}
                                    alt={card.title}
                                    height={500}
                                    className=""
                                />
                            </div>
                            {/* Nội dung */}

                        </motion.div>
                    );
                })}
            </AnimatePresence>
        </div>
    );
}

const image: React.CSSProperties = {
    maxWidth: "80vw",
}

const shape: React.CSSProperties = {
    strokeWidth: 10,
    strokeLinecap: "round",
    fill: "transparent",
}