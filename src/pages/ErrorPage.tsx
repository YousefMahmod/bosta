import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";
import { PAGE_NOT_FOUND, SORRY, UNEXPECTED_ERROR } from "../constants";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

const ErrorPage = () => {
  const [t, i18n] = useTranslation();
  const error = useRouteError();
  return (
    <>
      <Helmet htmlAttributes={{ lang: i18n.language, dir: i18n.dir() }} />
      <Box marginX={{ base: 4, md: 20 }}>
        <NavBar />
        <Heading mb={2}>{t(SORRY)}</Heading>
        {isRouteErrorResponse(error) ? (
          <Text>{t(PAGE_NOT_FOUND)}</Text>
        ) : (
          <Text>{t(UNEXPECTED_ERROR)}</Text>
        )}
      </Box>
    </>
  );
};

export default ErrorPage;
