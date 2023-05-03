import { FC } from "react";
import { EventType } from "../types";
import { Button, Grid, Typography, styled } from "@mui/material";
import {
  CalendarMonthIcon,
  LocationOnIcon,
  ScheduleIcon,
  ChevronRight,
} from "../components/ui/icons";

type EventListItemType = {
  event: EventType;
};

const StyledCard = styled(Grid)(({ theme }) => ({
  marginBottom: theme.spacing(0),
  padding: theme.spacing(1),
}));

const EventTitle = styled(Typography)(() => ({
  textAlign: "left",
}));

const EventInfo = styled(Typography)(({ theme }) => ({
  display: "flex",
  marginTop: theme.spacing(1),
  "& span": {
    marginRight: theme.spacing(1.5),
  },
}));

const EventActionBtn = styled(Button)(({ theme }) => ({
  padding: theme.spacing(2),
  textTransform: "none",
  display: "inline-block",
  "& span": {
    float: "right",
  },
}));

const EventListItem: FC<EventListItemType> = (props) => {
  const { event } = props;
  return (
    <StyledCard container>
      <Grid item md={6}>
        <EventTitle variant="h5" gutterBottom>
          {event.title}
        </EventTitle>
        {event.location && (
          <EventInfo>
            <LocationOnIcon />
            {event.location}
          </EventInfo>
        )}
      </Grid>
      <Grid item md={2}>
        {event.date && (
          <EventInfo>
            <CalendarMonthIcon />
            <span>{event.date}</span>
          </EventInfo>
        )}
        {event.time && (
          <EventInfo>
            <ScheduleIcon />
            <span>{event.time}</span>
          </EventInfo>
        )}
      </Grid>
      <Grid md={2}>
        <Typography>Tickets ab</Typography>
        <Typography sx={{ fontStyle: "bold" }}>{event.tickets}</Typography>
      </Grid>
      <Grid
        item
        md={2}
        display="flex"
        justifyContent="right"
        alignItems="center"
      >
        <EventActionBtn variant="contained" fullWidth>
          zu den Tickets
          <ChevronRight />
        </EventActionBtn>
      </Grid>
    </StyledCard>
  );
};

export default EventListItem;
