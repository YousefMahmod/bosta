import { Box, Spinner } from "@chakra-ui/react";
import useTrackShipment from "../hooks/useTrackShipment";
import TrackShipmentInfo from "./TrackShipmentInfo";
import TrackShipmentProgress from "./TrackShipmentProgress";

const TrackShipment = () => {
  const trackId = "13737343";
  const { error, isLoading, data } = useTrackShipment(trackId);

  if (isLoading) return <Spinner />;
  if (error) return null;
  if (!data) return null;
  return (
    <Box>
      <TrackShipmentInfo shipment={data} />
      <TrackShipmentProgress shipment={data} />
    </Box>
  );
};

export default TrackShipment;
