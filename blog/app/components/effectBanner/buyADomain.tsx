"use client"
import Image from "next/image"
import * as motion from "motion/react-client"
import WU from "../../img/WU.png"
import WO from "../../img/WO.png"
// import UW from "../../img/UW.png"
import Y from "../../img/Y.png"
import { useMedia } from "use-media"

export default function BuyaDomain() {
    const isMobile = useMedia("(max-width: 768px)");

    return (
        <div style={{ backgroundColor: "#bc382e", height: isMobile ? "60vh" : "80vh" }} className="w-full overflow-hidden relative flex items-center justify-center">
            <header className="xl:w-2/3">
                <div className="xl:w-1/2 w-3/4 ml-10 xl:ml-0">
                    <p className="xl:text-4xl text-2xl text-white">
                        Mua một miền
                    </p>
                    <p className="text-white xl:mt-14 mt-5">
                        Mang lại cho blog của bạn một ngôi nhà hoàn hảo. Nhận miền blogspot.com hoặc mua miền tuỳ chỉnh chỉ bằng vài lượt nhấp.
                    </p>
                </div>
            </header>
            <motion.div
                id="animated-image"
                className="absolute xl:top-1/3 -right-[200px]"
                // variants={variants}
                initial="hidden"
            // animate={isInView ? "visible" : "hidden"}
            >
                <Image
                    src={WO}
                    width={isMobile ? 500  : 1100}
                    alt="Example"
                    className="h-full object-cover rounded-lg"
                />
            </motion.div>
            <motion.div
                id="animated-image"
                className="absolute top-[40%] -right-[30px]"
                // variants={variants}
                initial="hidden"
            // animate={isInView ? "visible" : "hidden"}
            >
                <Image
                    src={WU}
                    width={isMobile ? 350 : 750}
                    alt="Example"
                    className="h-full object-cover rounded-lg"
                />
            </motion.div>
            <motion.div
                id="animated-image"
                className="absolute top-[27%] right-[95px]"
                // variants={variants}
                initial="hidden"
            // animate={isInView ? "visible" : "hidden"}
            >
                <Image
                    src={Y}
                    width={isMobile ? 150 : 350}
                    alt="Example"
                    className="h-full object-cover rounded-lg"
                />
            </motion.div>
        </div>
    );
}

