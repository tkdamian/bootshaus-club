import { createTheme } from "@mui/material";

export default createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "0.6em",
        },
      },
    },
  },
  typography: {
    fontFamily: ["Source Sans Pro", "Calibri", "Arial", "sans-serif"].join(","),
  },
});
