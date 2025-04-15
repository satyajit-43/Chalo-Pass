import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const mobileMenuStyles = `flex-col absolute top-0 left-0 w-full h-full bg-gray px-10 bg-black py-40 text-5xl font-bold`;

  return (
    <nav className="flex align-center justify-between p-10 text-black md:px-20 bg-white border-b border-gray-300">
      <Link to="/" className="flex z-10 md:py-3 font-bold text-xl lg:text-4xl">
        <svg    //QR Code
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke-width="1.5" 
          stroke="currentColor" 
          className="w-8 h-8 lg:w-10 lg:h-10"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z" />
        </svg>

        {/* <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" viewBox="0 0 24 24" 
          stroke-width="1.5" 
          stroke="currentColor" 
          className="w-8 h-8 lg:w-10 lg:h-10"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
        </svg> */}


        &nbsp; Chalo Pass
      </Link>
      <div
        className={`flex ${
          menuOpen ? mobileMenuStyles : "hidden"
        } gap-10 md:flex`}
      >
      <Link
          to="/"
          className="md:py-3 md:hover:text-blue-500 transition-all ease-linear"
        >
          Home
      </Link>
        <Link
          to="/facility"
          className="md:py-3 md:hover:text-blue-500 transition-all ease-linear"
        >
          Chalo Card
        </Link>
        <Link
          to="/contact"
          className="md:py-3 md:hover:text-blue-500 transition-all ease-linear"
        >
          Chalo Bus
        </Link>
        {/* <Link
          to="/auth/request"
          className="md:py-3 md:hover:text-blue-500 transition-all ease-linear"
        >
          Request
        </Link>
        <Link
          to="/auth/admin-login"
          className="md:py-3 md:hover:text-blue-500 transition-all ease-linear"
        >
          AdminLogin
        </Link> */}
        <Link
          to="/auth/login"
          className={`md:bg-[#eb4757] md:hover:bg-[#ad3434] transition md:text-white font-bold md:text-lg md:py-3 md:mb-3 md:px-8 md:rounded ${
            menuOpen ? "text-blue-500" : ""
          }`}
        >
          Login
        </Link>
      </div>
      <div
        className="md:hidden z-10 py-1"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
    </nav>
  );
}
export { Navbar };
