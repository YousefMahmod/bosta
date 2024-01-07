import {
  Box,
  Button,
  GridItem,
  HStack,
  Img,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useTrackShipment from "../hooks/useTrackShipment";

import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import Question from "../assets/question.jpg";
import TrackShipmentInfo from "../components/TrackShipmentInfo";
import TrackShipmentProgress from "../components/TrackShipmentProgress";
import TransitEventList from "../components/TransitEventList";
import {
  ADDRESS,
  COMPLAIN,
  IS_THERE_PROBLEM,
  SHIPMENT_DETAILS,
  TRACK_NOT_EXIST,
} from "../constants";

const TrackShipment = () => {
  const [t] = useTranslation();
  const { trackId } = useParams();
  const { error, isLoading, data } = useTrackShipment(trackId!);

  if (isLoading) return <Spinner />;
  if (error && trackId)
    return (
      <HStack justifyContent="center" alignItems="center">
        <Text>{t(TRACK_NOT_EXIST)}</Text>
      </HStack>
    );
  if (error) return null;
  if (!data) return null;
  return (
    <Box>
      <TrackShipmentInfo shipment={data} />
      <TrackShipmentProgress shipment={data} />
      <SimpleGrid
        templateColumns={{ base: "1fr", lg: "2fr 1fr" }}
        columns={{ base: 1, lg: 2 }}
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
