import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-5">
        <a
          href="#footer"
          className="h-auto w-auto flex flex-row items-center cursor-pointer transition-all duration-200 hover:text-[#b49bff] "
        >
          <span className="font-bold ml-2 hidden md:block text-gray-300 hover:text-[#b49bff] transition duration-200 hover:scale-105">
            Udhaya Surya U
          </span>
        </a>

        <div className="flex items-center justify-between w-[500px] h-full md:mr-20">
          <div className="flex items-center justify-between w-full border border-[#7042f861] bg-[#0300145e] mr-4 px-4 py-2 rounded-full text-gray-200 transition duration-200 hover:bg-[#7042f861]">
            <a href="#about-me" className="cursor-pointer transition duration-200 hover:text-[#b49bff] hover:scale-105">
              About Me
            </a>
            <a href="#skills" className="cursor-pointer transition duration-200 hover:text-[#b49bff] hover:scale-105 ">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer transition duration-200 hover:text-[#b49bff] hover:scale-105">
              Projects
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-200 hover:scale-110"
            >
              <Image
                src={social.src}
                alt={social.name}
                width={24}
                height={24}
                className="text-gray-200 hover:text-[#b49bff] transition duration-200"
              />
            </a>
          ))}
          <a href="https://www.linkedin.com/in/udhaya-suryau/"
           target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-200 hover:scale-110">
              <Image
                src="/linkedin.svg"
                alt="LinkedIn"
                width={24}
                height={24}
                className="text-gray-200 hover:text-[#b49bff] transition duration-200"
              />
            </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
