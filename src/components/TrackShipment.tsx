import {
  Box,
  Button,
  GridItem,
  HStack,
  Heading,
  Img,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useTrackShipment from "../hooks/useTrackShipment";
import TrackShipmentInfo from "./TrackShipmentInfo";
import TrackShipmentProgress from "./TrackShipmentProgress";
import TransitEventList from "./TransitEventList";
import { useTranslation } from "react-i18next";
import {
  ADDRESS,
  COMPLAIN,
  IS_THERE_PROBLEM,
  SHIPMENT_DETAILS,
} from "../constants";
import Question from "../assets/question.jpg";

const TrackShipment = () => {
  const [t, i18n] = useTranslation();
  const trackId = "67151313";
  const { error, isLoading, data } = useTrackShipment(trackId);

  if (isLoading) return <Spinner />;
  if (error) return null;
  if (!data) return null;
  return (
    <Box>
      <TrackShipmentInfo shipment={data} />
      <TrackShipmentProgress shipment={data} />
      <SimpleGrid
        templateColumns={{ md: "2fr 1fr" }}
        columns={{ base: 1, md: 2 }}
        gap={4}
        my={4}
      >
        <GridItem>
          <Text mb={2}>{t(SHIPMENT_DETAILS)}</Text>
          <TransitEventList shipment={data} />
        </GridItem>
        <GridItem>
          <Text mb={2}>{t(ADDRESS)}</Text>
          <Box
            border="1px solid #e9e8e8"
            backgroundColor="rgba(250,250,250,255)"
            borderRadius={4}
            padding={2}
            mb={2}
          >
            <Text>
              213 building msakn dashoor near by beeta gardens compound near to
              Fayoum Street
            </Text>
          </Box>
          <Box border="1px solid #e9e8e8" borderRadius={4} padding={2}>
            <HStack gap={4}>
              <Img src={Question} boxSize={48} objectFit="cover" />
              <Box>
                <Text mb={2}>{t(IS_THERE_PROBLEM)}</Text>
                <Button colorScheme="red">{t(COMPLAIN)}</Button>
              </Box>
            </HStack>
          </Box>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};

export default TrackShipment;
