import { useTranslation } from "react-i18next";
import NavBar from "./components/NavBar";
import { Helmet } from "react-helmet-async";

function App() {
  const [t, i18n] = useTranslation();
  return (
    <>
      <Helmet htmlAttributes={{ lang: i18n.language, dir: i18n.dir() }} />
      <NavBar />
    </>
  );
}

export default App;
