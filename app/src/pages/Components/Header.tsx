import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <>
      <div className="top-0 fixed flex flex-row text-black items-center justify-around w-full h-[60px] bg-transparent backdrop-blur-[3px]">
        <h1 className="text-2xl font-sans">logo</h1>

        <div className="flex flex-row items-center gap-8">
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>About Us</Link>
          <Link href={"/Register"}>Register</Link>
        </div>
      </div>
    </>
  );
}

export default Header
