"use client"
import Image from "next/image"
import * as motion from "motion/react-client"
import bando from "../../img/bandobando.png"
import dulieu from "../../img/dulieu.png"

export default function KnowViewer() {

    return (
        <div style={{ backgroundColor: "#577783", height: "80vh" }} className="w-full overflow-hidden relative flex items-center">
            <header className="w-2/3 flex justify-center">
                <div className="w-1/2">
                    <p className="text-4xl text-white">
                        Biết rõ người xem của bạn
                    </p>
                    <p className="text-white mt-14">
                        Tìm hiểu bài đăng nào là bài đăng hay nhất nhờ tính năng phân tích tích hợp của Blogger. Bạn sẽ biết người xem của mình ở đâu và họ quan tâm những gì. Bạn thậm chí có thể kết nối trực tiếp blog của mình với Google Analytics để biết thêm thông tin.
                    </p>
                </div>
            </header>
            <motion.div
                id="animated-image"
                className="absolute top-4 right-1"
                // variants={variants}
                initial="hidden"
            // animate={isInView ? "visible" : "hidden"}
            >
                <Image
                    src={bando}
                    width={800}
                    alt="Example"
                    className="h-full object-cover rounded-lg "
                />
            </motion.div>
            <motion.div
                id="animated-image"
                className="absolute bottom-1 right-1"
                // variants={variants}
                initial="hidden"
            // animate={isInView ? "visible" : "hidden"}
            >
                <Image
                    src={dulieu}
                    width={800}
                    alt="Example"
                    className="h-full object-cover rounded-lg"
                />
            </motion.div>

        </div>
    );
}

