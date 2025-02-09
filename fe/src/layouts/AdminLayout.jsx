import { Outlet } from "react-router-dom";
import HeaderAdmin from "../components/HeaderAdmin";
import FooterAdmin from "../components/FooterAdmin";

const AdminLayout = () => {
  return (
    <>
      <HeaderAdmin />
        <Outlet /> 
      <FooterAdmin />
    </>
  );
};

export default AdminLayout;
