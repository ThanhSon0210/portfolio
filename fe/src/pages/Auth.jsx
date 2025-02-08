import { useState } from "react";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="w-full max-w-lg bg-gradient-to-br from-red-700 to-black p-10 rounded-2xl shadow-2xl transition-all duration-300 border-2 border-red-600">
        {/* Tiêu đề */}
        <h2 className="text-4xl font-extrabold text-center mb-8 uppercase tracking-wider">
          {isLogin ? "Đăng nhập" : "Đăng ký"}
        </h2>

        {/* Form Đăng nhập / Đăng ký */}
        <form className="space-y-6">
          {!isLogin && (
            <div className="relative">
              <FaUser className="absolute left-5 top-3 text-red-400 text-xl" />
              <input
                type="text"
                placeholder="Tên người dùng"
                className="w-full bg-black text-white p-4 pl-14 rounded-lg border border-red-500 focus:ring-2 focus:ring-red-400 outline-none transition-all duration-200 text-lg"
              />
            </div>
          )}
          <div className="relative">
            <FaEnvelope className="absolute left-5 top-3 text-red-400 text-xl" />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-black text-white p-4 pl-14 rounded-lg border border-red-500 focus:ring-2 focus:ring-red-400 outline-none transition-all duration-200 text-lg"
            />
          </div>
          <div className="relative">
            <FaLock className="absolute left-5 top-3 text-red-400 text-xl" />
            <input
              type="password"
              placeholder="Mật khẩu"
              className="w-full bg-black text-white p-4 pl-14 rounded-lg border border-red-500 focus:ring-2 focus:ring-red-400 outline-none transition-all duration-200 text-lg"
            />
          </div>
          {!isLogin && (
            <div className="relative">
              <FaLock className="absolute left-5 top-3 text-red-400 text-xl" />
              <input
                type="password"
                placeholder="Nhập lại mật khẩu"
                className="w-full bg-black text-white p-4 pl-14 rounded-lg border border-red-500 focus:ring-2 focus:ring-red-400 outline-none transition-all duration-200 text-lg"
              />
            </div>
          )}

          {/* Nút Submit */}
          <button className="w-full bg-red-600 hover:bg-red-700 active:scale-95 py-4 rounded-lg font-bold text-xl transition-all duration-200 shadow-md border border-red-500 uppercase">
            {isLogin ? "Đăng nhập" : "Đăng ký"}
          </button>
        </form>

        {/* Chuyển đổi giữa Đăng nhập & Đăng ký */}
        <p className="text-center mt-6 text-gray-300 text-lg">
          {isLogin ? "Chưa có tài khoản?" : "Đã có tài khoản?"}{" "}
          <span
            onClick={() => setIsLogin(!isLogin)}
            className="text-red-400 cursor-pointer hover:underline hover:text-red-500 transition-all duration-200"
          >
            {isLogin ? "Đăng ký ngay" : "Đăng nhập"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Auth;
  