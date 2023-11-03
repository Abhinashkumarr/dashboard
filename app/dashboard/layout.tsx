"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import img from '../../public/img/img.jpg';
import { IoReorderThreeOutline } from 'react-icons/io5';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
        setShowMenu(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="sm:mx-4 md:mx-8 lg:mx-0">
    {isMobile ? (
      <div className="bg-black text-white py-4 px-5 flex justify-between items-center">
        <div onClick={toggleMenu} className="text-xl cursor-pointer">
          <span><IoReorderThreeOutline /></span>
        </div>
        <h2 className="text-xl">
          <Image
            src={img}
            alt="image"
            width={30}
            height={30}
            className="cursor-pointer"
          />
        </h2>
      </div>
    ) : (
      <nav className="bg-black text-white py-4 px-5 flex justify-between items-center">
        <h2 className="text-xl">
          <Image
            src={img}
            alt="image"
            width={30}
            height={30}
            className="cursor-pointer"
          />
        </h2>
        <ul className="flex items-center gap-8 cursor-pointer">
          <li>Home</li>
          <li>About US</li>
          <li>Culture</li>
          <li>Contact Us</li>
        </ul>
      </nav>
    )}
    {(!isMobile || (isMobile && showMenu)) && (
      <div className="flex">
        <div className="h-auto sm:h-screen bg-green-300 w-full sm:w-3/12 text-white text-2xl">
          <ul className="pt-5 flex flex-col gap-5 px-3">
            <li><Link href="/dashboard">Dashboard</Link></li>
            <li><Link href="/dashboard/service">Service</Link></li>
            <li><Link href="/dashboard/users">Users</Link></li>
            <li><Link href="/dashboard/profile">Profile</Link></li>
          </ul>
        </div>
        <div className="p-4 sm:w-3/4 max-h-screen overflow-auto">
          {props.children}
        </div>
      </div>
    )}
   
  </div>
  
  );
};

export default DashboardLayout;

