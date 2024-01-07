import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { DATE, DETAILS, HUB, TIME } from "../constants";
import { TrackShipment } from "../hooks/useTrackShipment";
import { getDate } from "../services/formate-date";

interface Props {
  shipment: TrackShipment;
}

const TransitEventList = ({ shipment }: Props) => {
  const [t] = useTranslation();
  const { TransitEvents } = { ...shipment };
  return (
    <TableContainer
      white-space="wrap"
      maxHeight="300px"
      overflowY="auto"
      overflowX="auto"
      fontSize={{ base: "xx-small", sm: "small" }}
    >
      <Table variant="simple">
        <Thead backgroundColor="rgba(250,250,250,255)">
          <Tr>
            <Th paddingX={1}>{t(HUB)}</Th>
            <Th paddingX={1}>{t(DATE)}</Th>
            <Th paddingX={1}>{t(TIME)}</Th>
            <Th paddingX={1}>{t(DETAILS)}</Th>
          </Tr>
        </Thead>
        <Tbody>
          {TransitEvents.map((transit, index) => {
            const [date, time] = getDate(transit.timestamp);
            return (
              <Tr key={index}>
                <Td paddingX={1}>{transit.hub || ""} </Td>
                <Td paddingX={1}>{date}</Td>
                <Td paddingX={1}>{time}</Td>
                <Td paddingX={1}>{t(transit.state)}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TransitEventList;
