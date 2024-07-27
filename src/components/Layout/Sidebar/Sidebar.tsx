'use client';

import Link from 'next/link';
import { useState } from 'react';

interface SidebarProps {
  isShowSidebar: boolean;
}

export default function Sidebar({ isShowSidebar }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(isShowSidebar);

  return (
    <div
      className={`fixed top-0 left-0 h-full bg-gray-800 text-white transition-transform duration-300 ease-in-out md:relative md:w-64 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0`}
      id="sidebar"
    >
      <div className="flex items-center justify-between p-4 bg-gray-900">
        <div className="flex items-center">
          {/* <img src="/logo.svg" alt="Company Logo" className="w-8 h-8" /> */}
          <span className="ml-3 text-xl font-bold">INFINOSOFT</span>
        </div>
        <button
          className="text-gray-300 hover:text-white focus:outline-none md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
            />
          </svg>
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto">
        <ul className="space-y-2">
          <li>
            <Link href="/admin/dashboard" passHref>
              <div className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer">
                <svg
                  className="w-6 h-6 mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 13h4v9H3v-9zM7 4h10v4H7V4zm0 6h10v4H7v-4zm12 3h4v9h-4v-9z" />
                </svg>
                Dashboard
              </div>
            </Link>
          </li>
          <li>
            <Link href="/admin/users" passHref>
              <div className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer">
                <svg
                  className="w-6 h-6 mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4zm0 2c-3.07 0-5.6 1.57-7 3.9V20h14v-2.1c-1.4-2.33-3.93-3.9-7-3.9zM20 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
                </svg>
                Users
              </div>
            </Link>
          </li>
          <li>
            <Link href="/admin/settings" passHref>
              <div className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer">
                <svg
                  className="w-6 h-6 mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0-6C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z" />
                </svg>
                Settings
              </div>
            </Link>
          </li>
          {/* Add more navigation items here */}
        </ul>
      </nav>

      <div className="border-t border-gray-700 p-4">
        {/* Optional footer or additional content */}
      </div>
    </div>
  );
}
