import Image from "next/image"
import logo_transparent from "../logos/logo_transparent.png"

export default function Home() {
  return (
    <div className="flex flex-col">
        <h1 className="lg:text-[3vw] text-5xl text-black font-bold font-Poppins flex text-center justify-center mt-10">
          The 64 Bit Jazz Combo
        </h1>
        <div className="text-black mt-[2vw] md:text-[1.4vw] text-sm font-Poppins leading-loose text-center">
          A Central Jersey Based Jazz Combo
        </div>
        <Image priority src={logo_transparent} alt="logo" />
    </div>
  )
}
