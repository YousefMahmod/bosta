import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Box } from "@chakra-ui/react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const Layout = () => {
  const [t, i18n] = useTranslation();
  return (
    <>
      <Helmet htmlAttributes={{ lang: i18n.language, dir: i18n.dir() }} />
      <Box marginX={{ base: 4, md: 20 }}>
        <NavBar />
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
