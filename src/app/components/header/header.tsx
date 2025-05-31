"use client";

import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <header className="mx-auto px-4 py-4 ">
      <div className="flex justify-between items-center">
        
        
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Dchoto" width={180} height={30} priority />
        </Link>

      
        <nav className="hidden md:flex items-center gap-6">
          <Link 
            href="/projects" 
            className="text-[#0A2342] cursor-pointer relative after:bg-[#2196F3] after:absolute after:h-0.5 after:rounded-full after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"
          >
            List of projects
          </Link>
          <Link href="/sign-in">
            <button className="bg-[#2196F3] hover:bg-[#0A2342] cursor-pointer flex items-center gap-2">
              Sign In
              
            </button>
          </Link>
        </nav>

        
        <div className="md:hidden">
          <button className="bg-[#2196F3] text-white px-4 py-2 rounded-md">
            Menu
          </button>
        </div>
      </div>
    </header>
  );
}