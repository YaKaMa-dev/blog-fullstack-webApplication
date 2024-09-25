import Header from "../components/layouts_components/Header";
import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
const MainLayout = () => {
  return (
    <>
      <Header />
      <Container maxWidth="xl">
        <Outlet />
      </Container>
    </>
  );
};
export default MainLayout;
