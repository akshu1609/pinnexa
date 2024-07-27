'use client';

import Sidebar from '@/components/Layout/Sidebar/Sidebar';
import Header from '@/components/Layout/Header/Header';
import Footer from '@/components/Layout/Footer/Footer';
import { useState } from 'react';

interface LayoutProps {
  children: React.ReactNode;
  showSidebar?: boolean; // Optional prop to control sidebar visibility
  mainContentClassName?: string; // Optional prop for additional styling
}

export default function Layout({
  children,
  showSidebar = true,
  mainContentClassName = '',
}: LayoutProps) {
  const [isShowSidebar, setIsShowSidebar] = useState(showSidebar);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      {isShowSidebar && (
        <div
          className={`fixed top-0 left-0 h-full bg-gray-800 text-white transition-transform duration-300 ease-in-out ${
            isShowSidebar ? 'translate-x-0' : '-translate-x-64'
          } md:translate-x-0 md:relative md:w-64`}
          style={{ zIndex: 10 }}
        >
          <Sidebar isShowSidebar={false} />
        </div>
      )}

      <div className="flex-1 flex flex-col">
        <Header />

        {/* Main Content */}
        <main
          className={`flex-1 p-6 bg-gray-100 ${mainContentClassName}`}
        >
          {children}
        </main>

        <Footer />
      </div>

      {/* Toggle Button for Mobile */}
      <button
        onClick={() => setIsShowSidebar(!isShowSidebar)}
        className="fixed top-4 left-4 z-50 md:hidden text-gray-400 hover:text-white focus:outline-none"
        aria-label={isShowSidebar ? 'Hide Sidebar' : 'Show Sidebar'}
      >
        {isShowSidebar ? (
          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M6 19l-7-7 7-7 1.41 1.41L2.83 12l4.58 4.59L6 19zM24 12l-7 7-1.41-1.41L21.17 12l-4.58-4.59L17 1l7 7z" />
          </svg>
        ) : (
          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 21l-7-7 7-7 1.41 1.41L6.83 12l4.58 4.59L13.41 21 12 21zM24 12l-7 7-1.41-1.41L21.17 12l-4.58-4.59L17 1l7 7z" />
          </svg>
        )}
      </button>
    </div>
  );
}
