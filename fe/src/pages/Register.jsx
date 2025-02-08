import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom"; 
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { useRegisterMutation } from "../services/auth/auth.service"; 

const Register = () => {
  const navigate = useNavigate();
  const [register, { isLoading }] = useRegisterMutation(); // Hook API đăng ký
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Mật khẩu không khớp!"); // Thông báo lỗi
      return;
    }

    try {
      const response = await register({
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });

      if (response?.error) {
        console.error("Đăng ký thất bại:", response.error);
        toast.error(response.error?.data?.message || "Có lỗi xảy ra, vui lòng thử lại!"); // Thông báo lỗi
      } else if (response?.data) {
        toast.success(response.data.message || "Đăng ký thành công!"); // Thông báo thành công
        console.log("User registered:", response.data);

        // Chuyển sang trang đăng nhập sau khi đăng ký thành công
        setTimeout(() => {
          navigate("/login");
        }, 2000); // Đợi 2 giây để hiển thị thông báo
      }
    } catch (error) {
      console.error("Lỗi không mong muốn:", error);
      toast.error("Có lỗi xảy ra, vui lòng thử lại!");
    }
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="w-[90%] max-w-lg bg-gradient-to-br from-red-700 to-black p-10 rounded-2xl shadow-2xl transition-all duration-300 border-2 border-red-600">
        <h2 className="text-4xl font-extrabold text-center mb-8 uppercase tracking-wider">
          Đăng ký
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="relative">
            <FaUser className="absolute left-5 top-3 text-red-400 text-xl" />
            <input
              type="text"
              name="username"
              placeholder="Tên người dùng"
              value={formData.username}
              onChange={handleChange}
              required
              className="w-full bg-black text-white p-4 pl-14 rounded-lg border border-red-500 focus:ring-2 focus:ring-red-400 outline-none transition-all duration-200 text-lg"
            />
          </div>
          <div className="relative">
            <FaEnvelope className="absolute left-5 top-3 text-red-400 text-xl" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-black text-white p-4 pl-14 rounded-lg border border-red-500 focus:ring-2 focus:ring-red-400 outline-none transition-all duration-200 text-lg"
            />
          </div>
          <div className="relative">
            <FaLock className="absolute left-5 top-3 text-red-400 text-xl" />
            <input
              type="password"
              name="password"
              placeholder="Mật khẩu"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full bg-black text-white p-4 pl-14 rounded-lg border border-red-500 focus:ring-2 focus:ring-red-400 outline-none transition-all duration-200 text-lg"
            />
          </div>
          <div className="relative">
            <FaLock className="absolute left-5 top-3 text-red-400 text-xl" />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Nhập lại mật khẩu"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full bg-black text-white p-4 pl-14 rounded-lg border border-red-500 focus:ring-2 focus:ring-red-400 outline-none transition-all duration-200 text-lg"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 active:scale-95 py-4 rounded-lg font-bold text-xl transition-all duration-200 shadow-md border border-red-500 uppercase"
            disabled={isLoading}
          >
            {isLoading ? "Đang xử lý..." : "Đăng ký"}
          </button>
        </form>
        <ToastContainer position="top-right" autoClose={3000} />

        <p className="text-center mt-6 text-gray-300 text-lg">
          Đã có tài khoản?{" "}
          <a
            href="/login"
            className="text-red-400 cursor-pointer hover:underline hover:text-red-500 transition-all duration-200"
          >
            Đăng nhập
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
