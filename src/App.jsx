import React from "react";
import RestRouter from "./routes";
import ReactGA from "react-ga4";

const TRACKING_ID = "G-S1ZPP0X3DV";
ReactGA.initialize(TRACKING_ID);
ReactGA.send({ hitType: "pageview", page: "/" });

function App() {
  return (
    <>
      <RestRouter />
    </>
  );
}

export default App;
