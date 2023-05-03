// import { useState } from "react";
import Logo from "/holder-1080.jpg";
import { Button, Grid, TextField, Typography } from "@mui/material";
import {
  CalendarMonthIcon,
  FormatListBulletedIcon,
  GridViewIcon,
  SearchIcon,
} from "../components/ui/icons";
import EventOverview from "../features/EventOverview";
import { EVENTS } from "../mockup";

function Home() {
  const events = EVENTS;
  // const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <img src={Logo} alt="bootshaus club logo"></img>
      </header>
      <Grid container spacing={2} sx={{ marginBottom: "2em" }}>
        <Grid
          item
          xs={6}
          md={8}
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
          md={4}
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
          />
          <Button>
            <GridViewIcon />
          </Button>
          <Button>
            <FormatListBulletedIcon />
          </Button>
          <Button>
            <CalendarMonthIcon />
          </Button>
        </Grid>
      </Grid>

      <EventOverview events={events} />
    </>
  );
}

export default Home;
