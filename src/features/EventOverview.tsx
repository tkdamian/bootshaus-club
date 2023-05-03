import { FC } from "react";
import { EventType } from "../types";
import EventOverviewCard from "./EventOverviewCard";

type EventOverviewType = {
  events?: EventType[];
};

const EventOverview: FC<EventOverviewType> = (props) => {
  const { events = [] } = props;
  return (
    <div>
      {events.map((item) => (
        <EventOverviewCard key={item.id} event={item} />
      ))}
    </div>
  );
};

export default EventOverview;
