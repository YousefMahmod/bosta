import { GridItem, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useTrackShipment from "../hooks/useTrackShipment";

const TrackShipment = () => {
  const trackId = "7234258";
  const { error, isLoading, data } = useTrackShipment(trackId);

  if (isLoading) return <Spinner />;
  if (error) return null;

  return (
    <SimpleGrid border="1px solid #e9e8e8" columns={{ base: 2, md: 4 }}>
      <GridItem>
        <Text>Shipment No. {trackId}</Text>
        <Text>{data?.CurrentStatus.state}</Text>
      </GridItem>
      <GridItem>
        <Text>Last Update</Text>
        <Text>{data?.CurrentStatus.timestamp}</Text>
      </GridItem>
      <GridItem>
        <Text>Provider</Text>
        <Text>{data?.provider}</Text>
      </GridItem>
      <GridItem>
        <Text>Promised Date</Text>
        <Text>{data?.PromisedDate}</Text>
      </GridItem>
    </SimpleGrid>
  );
};

export default TrackShipment;
