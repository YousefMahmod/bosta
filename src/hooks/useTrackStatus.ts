// import { useEffect, useState } from "react";
// import { TrackShipment } from "./useTrackShipment";
// import { useSteps } from "@chakra-ui/react";

// const steps = [
//     "TICKET_CREATED",
//     "PACKAGE_RECEIVED",
//     "OUT_FOR_DELIVERY",
//     "DELIVERED",
//   ];
//   const normalStatus: { [key: string]: string } = {
//     IN_TRANSIT: "IN_TRANSIT",
//     NOT_YET_SHIPPED: "NOT_YET_SHIPPED",
//   };
//   const redStatus = "CANCELLED";
// const useTrackStatus = (shipment: TrackShipment) => {
//     const {TransitEvents, CurrentStatus} = {...shipment};

//     const { activeStep, setActiveStep } = useSteps({
//         index: 0,
//         count: steps.length,
//       });
//       const [colorScheme, setColorScheme] = useState("green");
//       useEffect(() => {
//         // console.log(currentState);
//         let currentIndex = steps.findIndex((step) => step == currentState);
//         if (currentIndex != -1) {
//           setActiveStep(++currentIndex);
//           return;
//         }
//         console.log(currentState);
//         if (currentState == redStatus) {
//           setColorScheme("red");
//           return;
//         }
//         if (!normalStatus[currentState]) {
//           setColorScheme("yellow");
//           return;
//         }
//       }, [currentState]);
// }
