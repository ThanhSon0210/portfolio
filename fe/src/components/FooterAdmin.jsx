import React from "react";

const FooterAdmin = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 p-4 text-center">
      <p>&copy; {new Date().getFullYear()} Admin Panel. All Rights Reserved.</p>
    </footer>
  );
};

export default FooterAdmin;
