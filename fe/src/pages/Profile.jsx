import { useGetUserInfoQuery } from "../services/auth/auth.service";
import { toast } from "react-toastify";
import { FaUserCircle } from "react-icons/fa";

const Profile = () => {
  const { data: user, error, isLoading } = useGetUserInfoQuery();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-black">
        <div className="p-10 bg-gray-900 rounded-lg shadow-lg animate-pulse">
          <div className="w-24 h-24 bg-gray-700 rounded-full mx-auto mb-4"></div>
          <div className="h-6 w-48 bg-gray-700 rounded mx-auto mb-2"></div>
          <div className="h-4 w-32 bg-gray-700 rounded mx-auto"></div>
        </div>
      </div>
    );
  }

  if (error) {
    toast.error("Lấy thông tin thất bại, vui lòng đăng nhập lại!");
    return (
      <div className="flex justify-center items-center min-h-screen bg-black">
        <div className="text-center p-6 bg-red-800 text-white rounded-lg shadow-lg">
          <h1 className="text-xl font-bold">Lỗi!</h1>
          <p className="mt-2">Không thể tải thông tin. Hãy thử đăng nhập lại.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-black text-white">
      <div className="w-full max-w-md p-8 bg-gradient-to-br from-red-700 to-black rounded-2xl shadow-2xl border border-red-600 text-center">
        {/* Avatar */}
        <div className="w-24 h-24 mx-auto mb-4">
          {user?.avatar ? (
            <img src={user.avatar} alt="Avatar" className="rounded-full shadow-lg" />
          ) : (
            <FaUserCircle className="text-gray-400 text-6xl mx-auto" />
          )}
        </div>

        {/* Thông tin cá nhân */}
        <h1 className="text-3xl font-extrabold uppercase">{user?.username}</h1>
        <p className="text-gray-300 mt-2">{user?.email}</p>
        <p className="text-gray-300 mt-2">{user?.created_at}</p>

        {/* Nút Đăng xuất */}
        <button
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/login";
          }}
          className="mt-6 w-full bg-red-600 hover:bg-red-700 py-3 rounded-lg font-bold text-xl uppercase transition duration-300"
        >
          Đăng xuất
        </button>
      </div>
    </div>
  );
};

export default Profile;
