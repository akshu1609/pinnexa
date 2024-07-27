import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 mb-4 py-2 px-4 border-b bg-white shadow-md">
      <div className="flex items-center justify-between">
        <Link href="/">
          <span className="text-xl font-bold text-black cursor-pointer">Pinnexa</span>
        </Link>
        <div className="hidden md:flex space-x-4">
          {/* Add navigation items here */}
          <Link href="/about">
            <span className="text-gray-600 hover:text-gray-900 cursor-pointer">About</span>
          </Link>
          <Link href="/services">
            <span className="text-gray-600 hover:text-gray-900 cursor-pointer">Services</span>
          </Link>
          <Link href="/contact">
            <span className="text-gray-600 hover:text-gray-900 cursor-pointer">Contact</span>
          </Link>
        </div>
        <div className="flex space-x-4">
          {/* Add any additional items or buttons here */}
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
        </div>
      </div>
      <div className="border-t my-2 mx-4" />
    </header>
  );
}
