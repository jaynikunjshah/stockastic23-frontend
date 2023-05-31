import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { events } from "../constants";
import "./styles/EventsTimeline.css";
import { Helmet } from "react-helmet";

const EventCard = ({ event }) => (
  <VerticalTimelineElement
    dateClassName="mt-2"
    contentStyle={{
      background: "#7353BA",
      color: "#fff",
    }}
    contentArrowStyle={{
      borderRight: "7px solid #232631",
    }}
    date={event.date}
    iconStyle={{
      background: event.iconBg,
    }}
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{event.title}</h3>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {event.points.map((point, index) => (
        <li
          key={`event-point-${index}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

function Timeline() {
  return (
    <>
      <Helmet>
        <link rel="icon" type="image/svg+xml" href="/stockastic_logo.svg" />
        <meta name="description" content="Stockastic'23 Timeline Page" />
      </Helmet>
      <div id="timeline" className="my-[10%]">
        <div className="text-white font-bold text-6xl text-center">
          Timeline Of The Event
        </div>
        <div className="mt-20 flex flex-col">
          <VerticalTimeline layout="1-column">
            {events.map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
}

export default Timeline;
