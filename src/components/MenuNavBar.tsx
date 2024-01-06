import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  IconButton,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { CONTANCT_SALES, HOME, LOGIN, PRICING } from "../constants";

const MenuNavBar = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<GiHamburgerMenu />}
        variant="outline"
      />
      <MenuList>
        <MenuItem>{HOME}</MenuItem>
        <MenuItem>{PRICING}</MenuItem>
        <MenuItem>{CONTANCT_SALES}</MenuItem>
        <MenuItem>{LOGIN}</MenuItem>
        <MenuItem color="#E30613">AR</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default MenuNavBar;
