import Image from 'next/image'
import Sidebar from "@/app/_components/sidebar/Sidebar";
import ChatSection from "@/app/_components/chatSection/ChatSection";

export default function Home() {
  return (
       <div className="relative max-h-[100vh] w-screen bg-primaryColorDark lg:p-4 flex">
         <Sidebar />
         <ChatSection />
       </div>  )
}
