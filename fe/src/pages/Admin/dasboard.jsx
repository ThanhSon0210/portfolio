import React from "react";
import HeaderAdmin from "../../components/HeaderAdmin"; // Import HeaderAdmin
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

// Định nghĩa thẻ Card
function Card({ children, icon, bgColor }) {
  return (
    <div className={`p-4 ${bgColor} rounded-lg shadow-md flex items-center`}>
      {icon && <div className="text-3xl mr-4">{icon}</div>}
      <div className="text-white">{children}</div>
    </div>
  );
}

// Dữ liệu cho biểu đồ
const pieData = [
  { name: "Mỹ", value: 400 },
  { name: "Châu Âu", value: 300 },
  { name: "Ấn Độ", value: 300 },
  { name: "Khác", value: 200 },
];

const barData = [
  { name: "Tháng 1", revenue: 4000 },
  { name: "Tháng 2", revenue: 3000 },
  { name: "Tháng 3", revenue: 2000 },
  { name: "Tháng 4", revenue: 2780 },
  { name: "Tháng 5", revenue: 1890 },
];

const COLORS = ["#FF5733", "#33FF57", "#337BFF", "#FFC300"];

// Component Bảng Điều Khiển
const Dashboard = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col md:flex-row">
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <Card icon="📊" bgColor="bg-red-600">
            <h2 className="text-lg font-semibold">Tổng lượt truy cập</h2>
            <p className="text-2xl font-bold">120K</p>
          </Card>
          <Card icon="👥" bgColor="bg-red-500">
            <h2 className="text-lg font-semibold">Khách truy cập duy nhất</h2>
            <p className="text-2xl font-bold">45K</p>
          </Card>
          <Card icon="🕒" bgColor="bg-red-400">
            <h2 className="text-lg font-semibold">Lượt xem trang</h2>
            <p className="text-2xl font-bold">250K</p>
          </Card>
          <Card icon="📈" bgColor="bg-red-300">
            <h2 className="text-lg font-semibold">Tỷ lệ thoát</h2>
            <p className="text-2xl font-bold">39%</p>
          </Card>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-800 rounded-lg shadow-lg p-4">
            <h3 className="text-lg font-semibold mb-4">Khách truy cập theo khu vực</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={pieData} cx="50%" cy="50%" outerRadius={80} label dataKey="value">
                  {pieData.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-gray-800 rounded-lg shadow-lg p-4">
            <h3 className="text-lg font-semibold mb-4">Doanh thu hàng tháng</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={barData}>
                <XAxis dataKey="name" stroke="#fff" />
                <YAxis stroke="#fff" />
                <Tooltip />
                <Legend />
                <Bar dataKey="revenue" fill="#FF5733" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
