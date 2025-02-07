import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight, FaTools, FaUsers,FaReact,FaNodeJs, FaCertificate } from "react-icons/fa";

const HomePage = () => {
  return (
    <div className="bg-black  text-white min-h-screen w-full">
      {/* Hero Section */}
      <header className="flex flex-col md:flex-row items-center justify-center text-center md:text-left py-24 px-6 w-full">
        {/* Cột ảnh */}
        <div className="md:w-1/2 flex justify-center relative h-96 w-96">
          {/* Ảnh 1 */}
          <img
            src="/img/3.jpg"
            alt="Ảnh 1"
            className="absolute w-64 h-64 object-cover rounded-lg shadow-lg transition-all duration-300 hover:scale-125 hover:z-10"
            style={{ top: "20%", left: "5%" }}
          />
          <img
            src="/img/8.jpg"
            alt="Ảnh 1"
            className="absolute w-64 h-64 object-cover rounded-lg shadow-lg transition-all duration-300 hover:scale-125 hover:z-10"
            style={{ top: "-10%", left: "25%" }}
          />
          {/* Ảnh 2 */}
          <img
            src="/img/5.jpg"
            alt="Ảnh 2"
            className="absolute w-64 h-64 object-cover rounded-lg shadow-lg transition-all duration-300 hover:scale-125 hover:z-10"
            style={{ top: "10%", right: "10%" }}
          />

          {/* Ảnh nổi bật */}
          <img
            src="/img/7.jpg"
            alt="Ảnh chính"
            className="absolute w-64 h-64 object-cover rounded-lg shadow-2xl scale-110 transition-all duration-300 hover:scale-125 hover:z-10"
            style={{ top: "40%", left: "34%" }}
          />
        </div>


        {/* Cột nội dung */}
        <div className="md:w-1/2 flex flex-col items-center md:items-start">
          <h1 className="text-6xl flex justify-center items-center  font-bold">
            Hi, mình là <span className="text-red-500 md:text-6xl ml-2">Lê Thanh Sơn</span>
          </h1>
          <p className="text-lg md:text-2xl text-white mt-4 max-w-2xl">
          Là một Front-end Developer đam mê sáng tạo, mình luôn hướng đến việc thiết kế và phát triển những giao diện website chất lượng cao, không chỉ đẹp mắt mà còn tối ưu về hiệu suất, đảm bảo mang lại trải nghiệm người dùng mượt mà và ấn tượng nhất có thể.
          </p>
          <a href="#projects" className="mt-10 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg flex items-center gap-2">
            Xem dự án của mình <FaArrowRight />
          </a>
        </div>
      </header>

      <div class="flex justify-center">
        <hr class="w-[90%] h-[0.5px] bg-sky-300 border-none origin-center animate-pulse" />
      </div>

      {/* About Section */}
      <section className="max-w-6xl mx-auto text-center py-20 px-6">
      <h2 className="text-5xl font-bold text-white">Kỹ năng mà mình có</h2>
      <p className="text-xl text-gray-300 mt-4 max-w-3xl mx-auto">
        Có kinh nghiệm xây dựng ứng dụng web với React, TailwindCSS, và Node.js. Đam mê công nghệ và luôn cập nhật những xu hướng mới nhất.
      </p>

      {/* Danh sách kỹ năng */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 text-lg font-semibold">
                {/* Back-end */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 border border-transparent hover:border-blue-500">
          <FaNodeJs className="text-blue-500 text-5xl mx-auto" />
          <h3 className="text-xl font-bold text-blue-500 mt-3">Back-end</h3>
          <ul className="mt-3 space-y-2 text-gray-300">
            <li>Node.js</li>
            <li>PHP</li>
            <li>Express.js</li>
          </ul>
        </div>
        
        {/* Front-end */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 border border-transparent hover:border-red-500">
          <FaReact className="text-red-500 text-5xl mx-auto" />
          <h3 className="text-xl font-bold text-red-500 mt-3">Front-end</h3>
          <ul className="mt-3 space-y-2 text-gray-300">
            <li>React JS</li>
            <li>HTML 5 & CSS 3</li>
            <li>JavaScript</li>
            <li>UI/UX (Figma)</li>
            <li>Tailwind CSS</li>
            <li>Bootstrap 5</li>
            <li>Angular</li>
            <li>TypeScript</li>
            <li>Ant Design</li>
          </ul>
        </div>



        {/* Tools */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 border border-transparent hover:border-green-500">
          <FaTools className="text-green-500 text-5xl mx-auto" />
          <h3 className="text-xl font-bold text-green-500 mt-3">Công cụ</h3>
          <ul className="mt-3 space-y-2 text-gray-300">
            <li>Visual Studio Code</li>
            <li>Github</li>
            <li>WordPress</li>
          </ul>
        </div>

      </div>
      </section>


      {/* Services Section */}
      {/* <section className="bg-gray-800 py-20 px-6">
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-gray-700 p-6 rounded-lg flex flex-col items-center">
            <FaTools className="text-5xl text-blue-400" />
            <h3 className="text-2xl font-semibold mt-4">Phát triển web</h3>
            <p className="text-gray-300 mt-2 text-center">Xây dựng website chuyên nghiệp, đẹp mắt và tối ưu UI/UX.</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg flex flex-col items-center">
            <FaUsers className="text-5xl text-blue-400" />
            <h3 className="text-2xl font-semibold mt-4">Tư vấn giải pháp</h3>
            <p className="text-gray-300 mt-2 text-center">Tư vấn chiến lược công nghệ phù hợp với doanh nghiệp.</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg flex flex-col items-center">
            <FaCertificate className="text-5xl text-blue-400" />
            <h3 className="text-2xl font-semibold mt-4">Đào tạo lập trình</h3>
            <p className="text-gray-300 mt-2 text-center">Hướng dẫn học viên xây dựng dự án thực tế với công nghệ hiện đại.</p>
          </div>
        </div>
      </section> */}

      <div class="flex justify-center">
        <hr class="w-[90%] h-[0.5px] bg-red-400 border-none origin-center animate-pulse" />
      </div>

      {/* Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto text-center py-20 px-6">
        <h2 className="text-5xl font-bold">Dự án đã tham gia</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold">Website bán đồ công nghệ HTPS</h3>
            <p className="text-gray-300 mt-2">Nền tảng thương mại điện tử hiện đại với PHP và MySql.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold">Website đặt vé xem phim cyperscreend  </h3>
            <p className="text-gray-300 mt-2">" Đồ án tốt nghiệp "</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold">Website bán đồ thể thao SONNU-SPORT</h3>
            <p className="text-gray-300 mt-2">Tập thể dục thể thao với sonnu-sport, được xây dựng với React JS.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer className="text-center py-20 bg-gray-800 bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: "url('https://apolyorg.wordpress.com/wp-content/uploads/2019/04/banner-dang-ky-truc-tuyen-moi-5-2013-1.gif')" }}>
        <div className="bg-black/70 py-18 px-6 rounded-lg max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-white">TRƯỜNG CAO ĐẲNG FPT POLYTECHNIC</h2>
          <p className="text-white mt-4 text-lg">
            TRƯỜNG CAO ĐẲNG FPT POLYTECHNIC là một trong những ngôi trường hàng đầu, chuyên đào tạo các ngành về công nghệ và phát triển phần mềm.
            Với đội ngũ giảng viên giàu kinh nghiệm và chương trình học hiện đại, sinh viên được trang bị đầy đủ kiến thức để phát triển sự nghiệp.
          </p>
          <p className="text-white mt-4 text-lg">
            Nếu bạn quan tâm đến lập trình và phát triển website, hãy đăng ký học tập tại trường nhé!
          </p>
          
          <div className="flex justify-center gap-6 mt-6 text-3xl">
           THỰC HỌC - THỰC NGHIỆP
          </div>
        </div>
      </footer>

    </div>
  );
};

export default HomePage;
