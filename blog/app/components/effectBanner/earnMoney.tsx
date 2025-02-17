"use client"
import Image from "next/image"
import * as motion from "motion/react-client"
import maytinh from "../../img/maytinhEarn.png"
import ipad from "../../img/ippad.png"
import card from "../../img/card.png"

export default function EarnMoney() {

    return (
        <div style={{ backgroundColor: "#388d80", height: "80vh" }} className="w-full overflow-hidden relative flex items-center justify-end">
            <header className="w-2/3">
                <div className="w-1/2">
                    <p className="text-4xl text-white">
                        Kiếm tiền
                    </p>
                    <p className="text-white mt-14">
                        Thu nhập tương xứng với công sức của bạn. Google AdSense có thể tự động hiển thị quảng cáo được nhắm mục tiêu có liên quan trên blog của bạn để bạn có thể kiếm thu nhập bằng cách đăng bài về niềm đam mê của mình.
                    </p>
                </div>
            </header>
            <motion.div
                id="animated-image"
                className="absolute -left-1"
                // variants={variants}
                initial="hidden"
            // animate={isInView ? "visible" : "hidden"}
            >
                <Image
                    src={ipad}
                    width={500}
                    alt="Example"
                    className="h-full object-cover rounded-lg"
                />
            </motion.div>
            <motion.div
                id="animated-image"
                className="absolute -bottom-[100px] right-0"
                // variants={variants}
                initial="hidden"
            // animate={isInView ? "visible" : "hidden"}
            >
                <Image
                    src={maytinh}
                    width={300}
                    alt="Example"
                    className="h-full object-cover rounded-lg"
                />
            </motion.div>
            <motion.div
                id="animated-image"
                className="absolute -bottom-[100px] right-[300px]"
                // variants={variants}
                initial="hidden"
            // animate={isInView ? "visible" : "hidden"}
            >
                <Image
                    src={card}
                    width={300}
                    alt="Example"
                    className="h-full object-cover rounded-lg"
                />
            </motion.div>
        </div>
    );
}

