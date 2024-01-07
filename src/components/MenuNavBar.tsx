import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { GiHamburgerMenu } from "react-icons/gi";
import { CONTANCT_SALES, HOME, LOGIN, PRICING } from "../constants";

const MenuNavBar = () => {
  const [t, i18n] = useTranslation();
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<GiHamburgerMenu />}
        variant="outline"
      />
      <MenuList>
        <MenuItem>{t(HOME)}</MenuItem>
        <MenuItem>{t(PRICING)}</MenuItem>
        <MenuItem>{t(CONTANCT_SALES)}</MenuItem>
        <MenuItem>{t(LOGIN)}</MenuItem>
        {i18n.dir() == "ltr" && (
          <MenuItem color="#E30613" onClick={() => i18n.changeLanguage("ar")}>
            AR
          </MenuItem>
        )}
        {i18n.dir() == "rtl" && (
          <MenuItem color="#E30613" onClick={() => i18n.changeLanguage("en")}>
            ENG
          </MenuItem>
        )}
      </MenuList>
    </Menu>
  );
};

export default MenuNavBar;
