import { SimpleGrid, GridItem, Text } from "@chakra-ui/react";
import { TrackShipment } from "../hooks/useTrackShipment";
import { getDate, getDay, getSplitedDate } from "../services/formate-date";
import { useTranslation } from "react-i18next";
import {
  LAST_UPDATE,
  PROMISED_DATE,
  PROVIDER,
  SHIPMENT_NUMBER,
} from "../constants";

interface Props {
  shipment: TrackShipment;
}

const TrackShipmentInfo = ({ shipment }: Props) => {
  const [t, i18n] = useTranslation();
  const { TrackingNumber, CurrentStatus, provider, PromisedDate } = {
    ...shipment,
  };
  const [lastUpdateDate, lastUpdateTime] = getDate(CurrentStatus.timestamp);
  const day = getDay(CurrentStatus.timestamp) || "";
  const [dayNo, month, year] = getSplitedDate(PromisedDate);
  return (
    <SimpleGrid
      borderRadius={4}
      padding={4}
      border="1px solid #e9e8e8"
      columns={{ base: 2, md: 4 }}
      fontSize="sm"
    >
      <GridItem>
        <Text color="#b5b5b5">
          {t(SHIPMENT_NUMBER)} {TrackingNumber}
        </Text>
        <Text fontWeight="bold">{t(CurrentStatus.state)}</Text>
      </GridItem>
      <GridItem>
        <Text color="#b5b5b5">{t(LAST_UPDATE)}</Text>
        <Text fontWeight="bold">
          {t(day)} at {lastUpdateTime} {lastUpdateDate}
        </Text>
      </GridItem>
      <GridItem>
        <Text color="#b5b5b5">{t(PROVIDER)}</Text>
        <Text fontWeight="bold">{provider}</Text>
      </GridItem>
      <GridItem>
        <Text color="#b5b5b5">{t(PROMISED_DATE)}</Text>
        <Text fontWeight="bold">
          {dayNo} {t(month)} {year}
        </Text>
      </GridItem>
    </SimpleGrid>
  );
};

export default TrackShipmentInfo;
