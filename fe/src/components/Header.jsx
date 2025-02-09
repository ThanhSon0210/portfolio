import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle, FaFirefoxBrowser, FaHeadphonesAlt, FaSignOutAlt, FaUser } from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const loadUserFromToken = () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = JSON.parse(atob(token.split(".")[1]));
        setUser(decoded);
      } catch (error) {
        console.error("Token không hợp lệ", error);
        setUser(null);
      }
    } else {
      setUser(null);
    }
  };

  useEffect(() => {
    loadUserFromToken();

    const handleStorageChange = () => {
      loadUserFromToken();
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };

  return (
    <header className="bg-gradient-to-r from-red-600 to-black text-white py-3 px-6 shadow-md flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center text-5xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
        <Link to="/">SONNU</Link>
        <FaFirefoxBrowser className="ml-2 text-5xl text-sky-400" />
      </div>

      {/* <nav className="hidden md:flex space-x-10 text-2xl font-medium">
        <Link to="/" className="relative group font-bold">
          Trang chủ
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link to="/contact" className="relative group font-bold">
          Liên hệ
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </nav> */}

      <div className="flex items-center space-x-5 relative">
        {user ? (
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center space-x-3 focus:outline-none"
            >
              <span className="text-xl font-semibold">{user.username}</span>
              <FaUserCircle className="text-2xl" />
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-black border border-gray-700 rounded-lg shadow-lg py-2">
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-white hover:bg-gray-700"
                  onClick={() => setDropdownOpen(false)}
                >
                  <FaUser className="inline-block mr-2" /> Xem thông tin
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-white hover:bg-gray-700"
                >
                  <FaSignOutAlt className="inline-block mr-2" /> Đăng xuất
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login">
            <FaUserCircle className="text-2xl cursor-pointer hover:text-gray-300 transition-all duration-200" />
          </Link>
        )}
        <Link to="/contact">
          <FaHeadphonesAlt className="text-2xl cursor-pointer hover:text-gray-300 transition-all duration-200" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
