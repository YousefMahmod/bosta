import {
  Box,
  HStack,
  Progress,
  Step,
  StepIcon,
  StepIndicator,
  StepStatus,
  Stepper,
  Text,
  useSteps,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { TrackShipment } from "../hooks/useTrackShipment";
import { FaTruckFast } from "react-icons/fa6";
import { VscGitPullRequestCreate } from "react-icons/vsc";
import { GoPackage } from "react-icons/go";
import { AiOutlineDeliveredProcedure } from "react-icons/ai";

const steps = [
  { status: "TICKET_CREATED", icon: <VscGitPullRequestCreate /> },
  { status: "PACKAGE_RECEIVED", icon: <GoPackage /> },
  { status: "OUT_FOR_DELIVERY", icon: <FaTruckFast /> },
  { status: "DELIVERED", icon: <AiOutlineDeliveredProcedure /> },
];
const progressTrackStatus: { [key: string]: number } = {
  TICKET_CREATED: 1,
  PACKAGE_RECEIVED: 2,
  OUT_FOR_DELIVERY: 3,
  DELIVERED: 4,
  DELIVERED_TO_SENDER: 4,
};
const trackStatus: { [key: string]: string } = {
  TICKET_CREATED: "green",
  PACKAGE_RECEIVED: "green",
  OUT_FOR_DELIVERY: "green",
  IN_TRANSIT: "green",
  NOT_YET_SHIPPED: "green",
  DELIVERED: "green",
  DELIVERED_TO_SENDER: "green",
  CANCELLED: "red",
  DELETED: "red",
  WAITING_FOR_CUSTOMER_ACTION: "Yellow",
};

interface Props {
  shipment: TrackShipment;
}
const TrackShipmentProgress = ({ shipment }: Props) => {
  // transitEvents loop
  const [t, i18n] = useTranslation();
  const { TransitEvents, CurrentStatus } = { ...shipment };
  const currentState = CurrentStatus.state;

  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: steps.length,
  });
  const [colorScheme, setColorScheme] = useState("green");
  useEffect(() => {
    // console.log(currentState);
    let currentIndex = steps.findIndex((step) => step.status == currentState);
    if (currentIndex != -1) {
      setActiveStep(++currentIndex);
      setColorScheme(trackStatus[currentState]);
      return;
    }
    TransitEvents.forEach((transit) => {
      if (progressTrackStatus[transit.state]) {
        currentIndex = progressTrackStatus[transit.state];
      }
    });
    if (currentIndex != -1) {
      setActiveStep(currentIndex);
      setColorScheme(trackStatus[currentState]);
      return;
    }
  }, [currentState]);

  const max = steps.length - 1;
  const progressPercent = (activeStep / max) * 100;

  return (
    <Box borderWidth="0px 1px 1px 1px" borderRadius={4} padding={4}>
      <Box position="relative">
        <Stepper colorScheme={colorScheme} size="sm" index={activeStep} gap="0">
          {steps.map((step, index) => (
            <Step key={index}>
              <StepIndicator bg="white">
                <StepStatus
                  complete={<StepIcon />}
                  active={step.icon}
                  incomplete={step.icon}
                />
              </StepIndicator>
            </Step>
          ))}
        </Stepper>
        <Progress
          value={progressPercent}
          position="absolute"
          height="3px"
          width="full"
          top="12px"
          colorScheme={colorScheme}
          zIndex={-1}
        />
        <HStack justifyContent="space-between">
          {steps.map((step) => (
            <Text>{t(step.status)}</Text>
          ))}
        </HStack>
      </Box>
    </Box>
  );
};

export default TrackShipmentProgress;
