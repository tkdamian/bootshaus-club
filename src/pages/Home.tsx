// import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Logo from "/holder-1080.jpg";
import { Button, Grid, TextField } from "@mui/material";
import {
  CalendarMonthIcon,
  FormatListBulletedIcon,
  GridViewIcon,
  SearchIcon,
} from "../components/ui/icons";

function Home() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <img src={Logo} alt="bootshaus club logo"></img>
      </header>
      <Grid container spacing={2}>
        <Grid
          item
          xs={6}
          md={8}
          display="flex"
          justifyContent="left"
          alignItems="center"
        >
          <h2>Bootshaus Tickest</h2>
        </Grid>
        <Grid
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
            <Link to="/">
              <GridViewIcon />
            </Link>
          </Button>
          <Button>
            <Link to="/event-list">
              <FormatListBulletedIcon />
            </Link>
          </Button>
          <Button>
            <CalendarMonthIcon />
          </Button>
        </Grid>
      </Grid>

      <Outlet />
    </>
  );
}

export default Home;
