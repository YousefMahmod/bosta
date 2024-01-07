import { Box, Spinner } from "@chakra-ui/react";
import useTrackShipment from "../hooks/useTrackShipment";
import TrackShipmentInfo from "./TrackShipmentInfo";
import TrackShipmentProgress from "./TrackShipmentProgress";
import TransitEventList from "./TransitEventList";

const TrackShipment = () => {
  const trackId = "67151313";
  const { error, isLoading, data } = useTrackShipment(trackId);

  if (isLoading) return <Spinner />;
  if (error) return null;
  if (!data) return null;
  return (
    <Box>
      <TrackShipmentInfo shipment={data} />
      <TrackShipmentProgress shipment={data} />
      <TransitEventList shipment={data} />
    </Box>
  );
};

export default TrackShipment;
