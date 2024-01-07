import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";

interface TransitEvent {
  state: string;
  timestamp: string;
  hub: string;
}

export interface TrackShipment {
  CreateDate: string;
  CurrentStatus: { state: string; timestamp: string };
  PromisedDate: string;
  TrackingNumber: string;
  TransitEvents: TransitEvent[];
  isEditableShipment: boolean;
  provider: string;
}

const apiClient = new ApiClient<TrackShipment>("shipments/track");

const useTrackShipment = (trackId: number | string) => {
  return useQuery<TrackShipment, Error>({
    queryKey: ["shipment", trackId],
    queryFn: () => apiClient.getTrack(trackId),
  });
};

export default useTrackShipment;
