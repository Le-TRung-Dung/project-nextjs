import Image from "next/image";
import logo from "../img/Logo.png"

export default function Header() {
    return (
      <header>
        <div className="flex justify-between items-center">
            <div>
                <Image src={logo} alt={""} className="w-[90px] ml-6"/>
            </div>
            <div className="text-xl mr-6">
                Đăng nhập
            </div>
        </div>
      </header>
    );
  }