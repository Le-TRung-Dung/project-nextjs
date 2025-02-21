"use client"

export default function FooterLanding() {

  return (
    <footer
      className="bg-[#1d2b34] pt-11" style={{height:"30vh"}}
    >
      <div className="text-white w-2/3 mx-auto flex justify-start items-center">
        <ul className="mr-10">
          <li className="text-2xl font-bold">Trợ giúp</li>
          <li className="mt-5" >Trung tâm trợ giúp</li>
          <li className="mt-2">Diễn đàn trợ giúp</li>
          <li className="mt-2">Bài hướng dẫn bằng video</li>
        </ul>
        <ul className="mr-10 ml-10">
          <li className="text-2xl font-bold -mt-[60px]">Cộng đồng</li>
          <li className="mt-5">Blogger Buzz</li>
        </ul>
        <ul className="mr-10 ml-10 -mt-[20px]">
          <li className="text-2xl font-bold">Nhà phát triển</li>
          <li className="mt-5">API Blogger</li>
          <li className="mt-2">Diễn đàn nhà phát triển</li>
        </ul>
      </div>
    </footer>
  );
}
