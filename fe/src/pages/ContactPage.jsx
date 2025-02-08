import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_6nqyvi1",    // Thay thế bằng Service ID của bạn
        "template_zkaezml",   // Thay thế bằng Template ID của bạn
        formRef.current,
        "B9-3DcdiVZh3qJ1Oq"     // Thay thế bằng Public Key của bạn
      )
      .then(
        (result) => {
          setMessage("✅ Tin nhắn đã được gửi thành công!");
          setLoading(false);
          formRef.current.reset();
        },
        (error) => {
          setMessage("❌ Gửi tin nhắn thất bại. Vui lòng thử lại!");
          setLoading(false);
        }
      );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-6">
      <div className="w-full max-w-7xl bg-gray-900 p-10 rounded-lg shadow-xl flex flex-col md:flex-row gap-10">
        
        {/* Phần thông tin liên hệ */}
        <div className="md:w-1/2 space-y-6 flex flex-col items-center text-center md:text-left">
          {/* Ảnh đại diện */}
          <img
            src="/img/3.jpg"
            alt="Lê Thanh Sơn"
            className="w-64 h-64 rounded-full shadow-lg border-4 border-white"
          />
          <p className="text-white font-bold">
            Cảm ơn bạn đã muốn hợp tác với mình! Hãy liên hệ với mình nha!
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-sky-500 text-2xl" />
              <a
                href="mailto:sonle.021004@gmail.com"
                className="text-lg text-gray-300 hover:text-red-400 transition"
              >
                sonle.021004@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-sky-500 text-2xl" />
              <a
                href="tel:+84379374923"
                className="text-lg text-gray-300 hover:text-red-400 transition"
              >
                0379 374 923
              </a>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-sky-500 text-2xl" />
              <p className="text-lg text-gray-300">Quảng Ngãi - Việt Nam</p>
            </div>
          </div>
        </div>

        {/* Form liên hệ với EmailJS */}
        <div className="md:w-1/2 bg-black p-8 rounded-lg shadow-lg shadow-sky-400/100 transition">
          <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
            <input
              type="text"
              name="user_name"
              placeholder="Họ và tên"
              className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 shadow-lg transition"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email của bạn"
              className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 shadow-lg transition"
              required
            />
            <textarea
              name="message"
              placeholder="Tin nhắn của bạn"
              className="w-full p-3 bg-gray-800 text-white rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-red-400 shadow-lg transition"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 transition-all py-3 rounded-lg font-semibold shadow-lg flex justify-center"
            >
              {loading ? "Đang gửi..." : "Gửi Tin Nhắn"}
            </button>
          </form>

          {/* Thông báo gửi email */}
          {message && (
            <p className="text-center mt-4 text-lg font-semibold text-green-400">
              {message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
