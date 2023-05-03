import { FC } from "react";
import { EventType } from "../types";
import EventOverviewCard from "./EventOverviewCard";
import { VIEW_TYPES } from "../pages/Home";
import EventListItem from "./EventListview";
import { styled } from "@mui/material";

type EventOverviewType = {
  events?: EventType[];
  view: VIEW_TYPES;
};

const ListContainerStyled = styled("ul")(() => ({
  listStyle: "none",
  paddingLeft: 0,
  "& li:nth-child(odd)": {
    backgroundColor: "#f2f2f2",
  },
}));

const EventOverview: FC<EventOverviewType> = (props) => {
  const { events = [], view } = props;
  if (view === VIEW_TYPES.OVERVIEW)
    return (
      <div>
        {events.map((item) => {
          return <EventOverviewCard key={item.id} event={item} />;
        })}
      </div>
    );
  return (
    <ListContainerStyled>
      {events.map((item) => (
        <li>
          <EventListItem key={item.id} event={item} />
        </li>
      ))}
    </ListContainerStyled>
  );
};

export default EventOverview;
