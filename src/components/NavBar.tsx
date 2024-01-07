import { Button, HStack, Img, Show, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import LogoAr from "../assets/logoAr.svg";
import LogoEn from "../assets/logoEn.svg";
import {
  CONTANCT_SALES,
  HOME,
  LOGIN,
  PRICING,
  TRACK_SHIPMENT,
} from "../constants";
import MenuNavBar from "./MenuNavBar";
const NavBar = () => {
  const [t, i18n] = useTranslation();
  return (
    <HStack
      fontWeight="bold"
      justifyContent="space-between"
      paddingX={24}
      paddingY={4}
    >
      {i18n.dir() == "ltr" && <Img src={LogoEn} />}
      {i18n.dir() == "rtl" && <Img src={LogoAr} />}
      <Show above="lg">
        <HStack gap={10}>
          <Text>{t(HOME)}</Text>
          <Text>{t(PRICING)}</Text>
          <Text>{t(CONTANCT_SALES)}</Text>
        </HStack>
        <HStack>
          <Text>{t(TRACK_SHIPMENT)}</Text>
          <Button fontWeight="bold" variant="ghost">
            {t(LOGIN)}
          </Button>
          {i18n.dir() == "ltr" && (
            <Button
              fontWeight="bold"
              color="#E30613"
              variant="ghost"
              onClick={() => i18n.changeLanguage("ar")}
            >
              AR
            </Button>
          )}
          {i18n.dir() == "rtl" && (
            <Button
              fontWeight="bold"
              color="#E30613"
              variant="ghost"
              onClick={() => i18n.changeLanguage("en")}
            >
              ENG
            </Button>
          )}
        </HStack>
      </Show>
      <Show below="lg">
        <MenuNavBar />
      </Show>
    </HStack>
  );
};

export default NavBar;
