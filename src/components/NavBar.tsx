import { Button, HStack, Img, Show, Text } from "@chakra-ui/react";
import LogoEn from "../assets/logoEn.svg";
import MenuNavBar from "./MenuNavBar";
import {
  CONTANCT_SALES,
  HOME,
  LOGIN,
  PRICING,
  TRACK_SHIPMENT,
} from "../constants";
const NavBar = () => {
  return (
    <HStack
      fontWeight="bold"
      justifyContent="space-between"
      paddingX={24}
      paddingY={4}
    >
      <Img src={LogoEn} />
      <Show above="lg">
        <HStack gap={10}>
          <Text>{HOME}</Text>
          <Text>{PRICING}</Text>
          <Text>{CONTANCT_SALES}</Text>
        </HStack>
        <HStack>
          <Text>{TRACK_SHIPMENT}</Text>
          <Button variant="ghost">{LOGIN}</Button>
          <Button color="#E30613" variant="ghost">
            AR
          </Button>
        </HStack>
      </Show>
      <Show below="lg">
        <MenuNavBar />
      </Show>
    </HStack>
  );
};

export default NavBar;
