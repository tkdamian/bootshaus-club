import { FC } from "react";
import { EventType } from "../types";
import { Button, Grid, Typography, styled } from "@mui/material";
import {
  CalendarMonthIcon,
  LocationOnIcon,
  ScheduleIcon,
  ConfirmationNumberIcon,
  InfoIcon,
  ChevronRight,
} from "../components/ui/icons";

type EventOverviewCardType = {
  event: EventType;
};

const StyledCard = styled(Grid)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

const StyledCover = styled("img")(({ theme }) => ({
  width: "100%",
  borderRadius: theme.spacing(2),
  maxHeight: "230px",
  objectFit: "cover",
}));

const StyledContainer = styled(Grid)(({ theme }) => ({
  textAlign: "left",
  paddingLeft: theme.spacing(5),
  paddingTop: theme.spacing(1),
}));

const EventTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(3),
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

const EventOverviewCard: FC<EventOverviewCardType> = (props) => {
  const { event } = props;
  return (
    <StyledCard container>
      <Grid item md={4}>
        <StyledCover src={event.coverUrl} />
      </Grid>
      <StyledContainer item md={6}>
        <EventTitle variant="h5" gutterBottom>
          {event.title}
        </EventTitle>
        <EventInfo>
          {event.date && (
            <>
              <CalendarMonthIcon />
              <span>{event.date}</span>
            </>
          )}
          {event.time && (
            <>
              <ScheduleIcon />
              <span>{event.time}</span>
            </>
          )}
        </EventInfo>
        {event.location && (
          <EventInfo>
            <LocationOnIcon />
            {event.location}
          </EventInfo>
        )}
        {event.tickets && (
          <EventInfo>
            <ConfirmationNumberIcon />
            {event.tickets}
          </EventInfo>
        )}
        {event.info && (
          <EventInfo>
            <InfoIcon />
            {event.info}
          </EventInfo>
        )}
      </StyledContainer>
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

export default EventOverviewCard;
