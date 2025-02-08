import React from "react";
import { useParams } from "react-router-dom";
import { useGetProjectByIdQuery } from "../services/project/project.service";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectDetail = () => {
  const { id } = useParams(); // Lấy ID từ URL
  const { data: project, isLoading, isError } = useGetProjectByIdQuery(id);
  

  if (isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center text-white">
        <p>Đang tải dữ liệu...</p>
      </div>
    );
  }

  if (isError || !project) {
    return (
      <div className="w-full h-screen flex items-center justify-center text-red-500">
        <p>Không tìm thấy thông tin dự án!</p>
      </div>
    );
  }

  return (
    <section className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16 px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 px-8 md:px-16 lg:px-24">
        {/* Cột trái: Thông tin dự án */}
        <div className="space-y-8">
          <div>
            <p className="text-4xl mt-4 font-semibold">{project.name}</p>
            <p className="text-white mt-2">{project.dayend}</p>
          </div>

          <div className="flex items-center gap-6">
            {/* Nút Source Code */}
            <a
                href="https://github.com/ThanhSon0210"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 w-auto text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-800 transition"
                >
                Source Code <FaGithub />
            </a>
            {/* Link Github */}
            <a
                href={project.link.trim()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-blue-400 hover:underline transition-all duration-300 truncate w-64 inline-block"
                >
                {project.link.trim()}
            </a>
          </div>

          {/* Nút xem demo */}
          <a
            href={project.link.trim()}
            className="bg-red-500 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-red-600 transition"
          >
            Xem Demo <FaExternalLinkAlt />
          </a>
            {/* Thêm hai ảnh dưới nút "Xem Demo" */}
            <div className="flex flex-col md:flex-row gap-4 mt-4">
            {JSON.parse(project.img).map((image, index) => (
                <img 
                key={index} 
                src={`/img/${image}`} 
                alt={`Ảnh ${index + 1}`} 
                className="w-full md:w-1/2 h-46 rounded-lg shadow-lg" 
                />
            ))}
            </div>
        </div>

        {/* Cột phải: Mô tả dự án */}
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl font-bold">Mô tả dự án</h2>
            <p className="text-lg text-gray-300 leading-relaxed mt-4">
              {project.descriptions}
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-300">
              Công nghệ sử dụng:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-400">
              {project.tool.split("\r\n").map((tool, index) => (
                <li key={index}>{tool}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-300">
              Các chức năng chính:
            </h3>
            <p className="text-lg text-gray-400 leading-relaxed mt-4">
              {project.function}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
