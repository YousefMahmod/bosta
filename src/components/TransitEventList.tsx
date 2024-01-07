import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { DATE, DETAILS, HUB, TIME } from "../constants";
import { TrackShipment } from "../hooks/useTrackShipment";
import { getDate } from "../services/formate-date";

interface Props {
  shipment: TrackShipment;
}

const TransitEventList = ({ shipment }: Props) => {
  const [t, i18n] = useTranslation();
  const { TransitEvents } = { ...shipment };
  return (
    <TableContainer
      white-space="wrap"
      maxHeight="300px"
      overflowY="auto"
      overflowX="auto"
    >
      <Table variant="simple" size="sm">
        <Thead backgroundColor="rgba(250,250,250,255)">
          <Tr>
            <Th>{t(HUB)}</Th>
            <Th>{t(DATE)}</Th>
            <Th>{t(TIME)}</Th>
            <Th>{t(DETAILS)}</Th>
          </Tr>
        </Thead>
        <Tbody>
          {TransitEvents.map((transit, index) => {
            const [date, time] = getDate(transit.timestamp);
            return (
              <Tr key={index}>
                <Td>{transit.hub || ""} </Td>
                <Td>{date}</Td>
                <Td>{time}</Td>
                <Td>{t(transit.state)}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TransitEventList;
