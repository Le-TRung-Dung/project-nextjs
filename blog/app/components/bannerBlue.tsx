"use client"

import { AnimatePresence } from "motion/react"
import * as motion from "motion/react-client"
import { useEffect, useState } from "react"
import bannerred from "../img/bannerred.png"
import bannerblue from "../img/bannerblue.png"
import bannergreen from "../img/bannergreen.png"
import trung from "../img/trungred.png"
import muong from "../img/muongred.png"
import nho from "../img/nhored.png"
import thia from "../img/thiared.png"
import guong from "../img/guongred.png"
import chay from "../img/chayred.png"
import pizza from "../img/pizzared.png"
import kem from "../img/kemgreenkemgreen.png"
import coc from "../img/cocgreen.png"
import dogr from "../img/doblue.png"
import phone from "../img/dienthoaiblue.png"
import maybay from "../img/maybayblue.png"
import dieukhien from "../img/dieukhien.png"
import mayanh from "../img/mayanh.png"
import dongho from "../img/dongho.png"
import Image from "next/image"


const cardList = [
    {
        id: 2,
        image: bannerblue,
        background: "#4583aa",
        img2 : dogr,
        leftImage: phone ,
        leftImage1: maybay,
        leftImage2: nho,
        rightImg: dongho,
        rightImg1: dieukhien,
        rightImg2: mayanh

    },
    {
        id: 1,
        image: bannerred, // Đường dẫn hình ảnh
        background: "#bc382e",
        img2 : trung,
        leftImage: muong ,
        leftImage1: thia,
        leftImage2: nho,
        rightImg: guong,
        rightImg1: chay,
        rightImg2: pizza

    },
    {
        id: 3,
        image: bannergreen,
        background: "#388d80",
        img2 : kem,
        leftImage: coc ,

    },
];



export default function BannerBlue() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % cardList.length); // Chuyển sang thẻ tiếp theo
        }, 4000); // 4 giây mỗi thẻ

        return () => clearInterval(interval); // Dọn dẹp khi component bị unmount
    }, []);

    const cardVariants = {
        initial: {
            opacity: 0,
            y: "100%", // Bắt đầu từ dưới màn hình
        },
        animate: {
            opacity: 1,
            y: "0%", // Di chuyển vào trung tâm
            transition: {
                duration: 2, // Thời gian xuất hiện
                ease: "easeOut",
            },
        },
        exit: {
            opacity: 0,
            y: "100%", // Từ từ đi xuống màn hình
            transition: {
                duration: 1.5, // Thời gian biến mất
                ease: "easeIn",
            },
        },
    };


    return (
        <div
            className="relative z-0 w-full h-screen flex items-center justify-center overflow-hidden"
            style={{
                backgroundColor: cardList[currentIndex].background,
                transition: "background-color 1.5s ease", // Hiệu ứng đổi màu mượt mà
            }}
        >
            <div className="absolute top-[200px] w-[1000px] p-4 bg-opacity-70 text-white text-center">
                <p className="text-4xl font-thin">Đăng nội dung thể hiện niềm đam mê theo cách của bạn</p>
                <p className="mt-6 text-xl"> Dễ dàng tạo blog độc đáo và tuyệt đẹp.</p>
            </div>
            <p className="p-4 absolute top-[350px] bg-opacity-70 rounded-xl text-white text-center" style={{backgroundColor:"#ff8000"}}>Tạo blog của bạn</p>
            <AnimatePresence mode="wait">
                {cardList.map((card, index) => {
                    if (index !== currentIndex) return null; // Chỉ hiển thị thẻ hiện tại
                    return (
                        <motion.div
                            key={card.id}
                            variants={cardVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="absolute w-full h-full shadow-lg flex flex-col justify-end" // Hình ảnh nằm ở dưới cùng
                        >
                            {/* Hình ảnh */}
                            <div className="flex justify-center items-end h-full">
                                <Image
                                    src={card.image}
                                    alt={""}
                                    height={500}
                                    className="object-contain mb-0 z-10" // Thêm margin-bottom để cách một chút với viền
                                />
                            </div>
                        </motion.div>
                    );
                })}
            </AnimatePresence>
        </div>
    );
}

