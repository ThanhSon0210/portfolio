import { Link } from "react-router-dom";
import { FaUserCircle, FaFirefoxBrowser, FaGlobe } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-red-600 to-black text-white py-1 px-6 shadow-md flex items-center justify-between sticky top-0 z-50">
      {/* Logo */}
      <div className="relative flex items-center justify-center h-20">
        <div className="flex items-center text-5xl font-extrabold tracking-widest relative text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
          <Link to="/">SONNU</Link>
          <FaFirefoxBrowser className="ml-2 text-5xl cursor-pointer text-sky-400" />
        </div>
      </div>

      {/* Menu */}
      <nav className="hidden ml-[-15%] md:flex space-x-10 text-2xl font-medium">
        <Link to="/" className="relative group">
          Trang chủ
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link to="/about" className="relative group">
          Về tôi
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link to="/contact" className="relative group">
          Liên hệ
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </nav>

      {/* Đăng nhập & Đổi ngôn ngữ */}
      <div className="flex items-center space-x-5">
        <FaUserCircle className="text-2xl cursor-pointer hover:text-gray-300 transition-all duration-200" />
        <FaGlobe className="text-2xl cursor-pointer hover:text-gray-300 transition-all duration-200" />
      </div>
    </header>
  );
};

export default Header;
