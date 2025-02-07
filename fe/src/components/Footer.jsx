import { 
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaHeart, 
  FaFirefoxBrowser, FaGithub, FaFacebook, FaInstagram, 
  FaTiktok, FaCommentDots 
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-8">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        {/* Đưa tất cả lên 1 hàng khi màn hình lớn */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
          
          {/* Thông tin liên hệ */}
          <div className="text-center md:text-left space-y-2">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <h2 className="text-2xl font-bold tracking-wide">SONNU</h2>
              <FaFirefoxBrowser className="text-4xl cursor-pointer text-sky-400" />
            </div>

            <p className="flex items-center justify-center md:justify-start gap-2 text-gray-300">
              <FaPhone className="text-blue-500" /> 
              <a href="tel:0379374923" className="hover:text-white">0379374923</a>
            </p>
            <p className="flex items-center justify-center md:justify-start gap-2 text-gray-300">
              <FaEnvelope className="text-blue-500" /> 
              <a href="mailto:sonle.021004@gmail.com" className="hover:text-white">
                sonle.021004@gmail.com
              </a>
            </p>
            <p className="flex items-center justify-center md:justify-start gap-2 text-gray-300">
              <FaMapMarkerAlt className="text-blue-500" /> 
              Quảng Ngãi, Việt Nam
            </p>
          </div>

          {/* Liên kết mạng xã hội */}
          <div className="flex flex-wrap justify-center md:justify-center gap-3">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white text-xl transition-colors duration-200">
              <FaGithub /> GitHub
            </a>
            <a href="https://zalo.me" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white text-xl transition-colors duration-200">
              <FaCommentDots /> Zalo
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white text-xl transition-colors duration-200">
              <FaFacebook /> Facebook
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white text-xl transition-colors duration-200">
              <FaInstagram /> Instagram
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white text-xl transition-colors duration-200">
              <FaTiktok /> TikTok
            </a>
          </div>

          {/* Ghi chú bản quyền */}
          <div className="text-center md:text-right">
            <p className="text-gray-400">
              © 2025 <span className="font-bold text-white">Sonnu Portfolio</span>. 
            </p>
            <p className="text-gray-400">
              Made with <FaHeart className="inline text-red-500 mx-1" /> by Lê Thanh Sơn.
            </p>
          </div>

        </div>

        {/* Đường kẻ chia */}
        <hr className="border-gray-700 my-6" />
      </div>
    </footer>
  );
};

export default Footer;
