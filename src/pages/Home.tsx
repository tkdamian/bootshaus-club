import { useState } from "react";
import Logo from "/holder-1080.jpg";
import { Button, Grid, TextField, Typography, styled } from "@mui/material";
import {
  CalendarMonthIcon,
  FormatListBulletedIcon,
  GridViewIcon,
  SearchIcon,
} from "../components/ui/icons";
import EventsComponent from "../features/Events";
import { EVENTS } from "../mockup";

export enum VIEW_TYPES {
  OVERVIEW = "OVERVIEW",
  LIST = "LIST",
  CALENDAR = "CALENDAR",
}

const ViewButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
  paddingLeft: theme.spacing(0),
  paddingRight: theme.spacing(0),
}));

const HeaderStyled = styled("header")(() => ({
  "& img": {
    height: "10em",
  },
}));

function Home() {
  const events = EVENTS;
  const [view, setView] = useState(VIEW_TYPES.OVERVIEW);
  const handleChangeView = (view: VIEW_TYPES) => () => {
    setView(view);
  };
  return (
    <>
      <HeaderStyled>
        <img src={Logo} alt="bootshaus club logo"></img>
      </HeaderStyled>
      <Grid container spacing={2} sx={{ marginBottom: "2em" }}>
        <Grid
          item
          xs={6}
          md={7}
          display="flex"
          justifyContent="left"
          alignItems="center"
        >
          <Typography variant="h5" sx={{ fontStyle: "bold" }}>
            Tickets für Bootshaus
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          md={5}
          display="flex"
          justifyContent="right"
          alignItems="center"
        >
          <TextField
            id="event-search"
            variant="outlined"
            size="small"
            InputProps={{
              startAdornment: <SearchIcon />,
            }}
            sx={{ marginRight: "1em" }}
          />
          <Typography>Ansicht:</Typography>
          <ViewButton
            onClick={handleChangeView(VIEW_TYPES.OVERVIEW)}
            variant={view === VIEW_TYPES.OVERVIEW ? "contained" : "text"}
          >
            <GridViewIcon />
          </ViewButton>
          <ViewButton
            onClick={handleChangeView(VIEW_TYPES.LIST)}
            variant={view === VIEW_TYPES.LIST ? "contained" : "text"}
          >
            <FormatListBulletedIcon />
          </ViewButton>
          <ViewButton
            onClick={handleChangeView(VIEW_TYPES.CALENDAR)}
            variant={view === VIEW_TYPES.CALENDAR ? "contained" : "text"}
          >
            <CalendarMonthIcon />
          </ViewButton>
        </Grid>
      </Grid>

      <EventsComponent events={events} view={view} />
    </>
  );
}

export default Home;
