import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/react";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { TRACK_SHIPMENT } from "../constants";
const TrackShipmentSearch = () => {
  const ref = useRef<HTMLInputElement>(null);
  const [t] = useTranslation();
  const navigate = useNavigate();
  return (
    <Popover>
      <PopoverTrigger>
        <Button fontWeight="bold" variant="ghost">
          {t(TRACK_SHIPMENT)}
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverHeader>{t(TRACK_SHIPMENT)}</PopoverHeader>
        <PopoverBody>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              if (ref.current) {
                navigate(`/tracking-shipments/${ref.current.value}`);
              }
            }}
          >
            <InputGroup>
              <InputLeftElement
                backgroundColor="#E30613"
                borderRadius={4}
                color="white"
                children={<BsSearch />}
              />
              <Input
                ref={ref}
                borderRadius={15}
                placeholder={t(TRACK_SHIPMENT)}
                variant="filled"
              />
            </InputGroup>
          </form>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default TrackShipmentSearch;
