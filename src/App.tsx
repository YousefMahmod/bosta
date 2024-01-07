import { Box } from "@chakra-ui/react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import NavBar from "./components/NavBar";
import TrackShipment from "./components/TrackShipment";

function App() {
  const [t, i18n] = useTranslation();
  return (
    <>
      <Helmet htmlAttributes={{ lang: i18n.language, dir: i18n.dir() }} />
      <Box marginX={{ base: 4, md: 20 }}>
        <NavBar />
        <TrackShipment />
      </Box>
    </>
  );
}

export default App;
