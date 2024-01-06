import React from "react";
import EventsContent from "../../../components/eventsPage";
import ScrollToTop from "../../../components/ScrollTop";
import EventNow from "../../../components/eventsPage/EventNow";
import FooterContentOp from "../../../components/statik/FooterContentOp";

const EventsPage = () => {
  return (
    <>
      <ScrollToTop />
      <EventNow />
      {/* <EventsContent /> */}
      <FooterContentOp />
    </>
  );
};

export default EventsPage;
