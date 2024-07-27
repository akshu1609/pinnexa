import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t py-4 px-6 bg-gray-800 text-white">
      <div className="flex flex-col md:flex-row items-center justify-between mx-auto max-w-screen-xl">
        <div className="text-center md:text-left">
          <a className="text-blue-400 hover:underline" href="#">
            Piinnexa
          </a>
          {' '}
          <a className="text-blue-400 hover:underline" href="#">
            
          </a>
          {' '}
          © 2024 Pinnexa.
        </div>
        <div className="mt-4 md:mt-0 text-center md:text-right">
          Powered by&nbsp;
          
        </div>
      </div>
    </footer>
  )
}
