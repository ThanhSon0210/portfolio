import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLoginMutation } from "../services/auth/auth.service"; // Import API
import { FaLock, FaEnvelope } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isLoading }] = useLoginMutation();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login({ email, password }).unwrap();
      localStorage.setItem("token", response.token); // Lưu token vào localStorage
  
      // Hiển thị thông báo thành công
      toast.success("Đăng nhập thành công!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
  
      setTimeout(() => {
        window.location.href = '/';
      }, 3000); // Điều hướng sau 3 giây
    } catch (error) {
      // Hiển thị thông báo thất bại
      toast.error("Đăng nhập thất bại, vui lòng thử lại!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="w-[90%] max-w-lg bg-gradient-to-br from-red-700 to-black p-10 rounded-2xl shadow-2xl border-2 border-red-600">
        <h2 className="text-4xl font-extrabold text-center mb-8 uppercase">Đăng nhập</h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="relative">
            <FaEnvelope className="absolute left-5 top-3 text-red-400 text-xl" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-black text-white p-4 pl-14 rounded-lg border border-red-500 focus:ring-2 focus:ring-red-400 outline-none"
            />
          </div>
          <div className="relative">
            <FaLock className="absolute left-5 top-3 text-red-400 text-xl" />
            <input
              type="password"
              placeholder="Mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-black text-white p-4 pl-14 rounded-lg border border-red-500 focus:ring-2 focus:ring-red-400 outline-none"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-red-600 hover:bg-red-700 py-4 rounded-lg font-bold text-xl uppercase"
          >
            {isLoading ? "Đang đăng nhập..." : "Đăng nhập"}
          </button>
        </form>
        <p className="text-center mt-6 text-gray-300 text-lg">
          Chưa có tài khoản?{" "}
          <a href="/register" className="text-red-400 hover:underline">Đăng ký ngay</a>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
