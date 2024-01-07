import {
  Popover,
  PopoverTrigger,
  Button,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { TRACK_SHIPMENT } from "../constants";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
const TrackShipmentSearch = () => {
  const ref = useRef<HTMLInputElement>(null);
  const [t, i18n] = useTranslation();
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
