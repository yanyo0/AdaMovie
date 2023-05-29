import { createTheme } from "@mui/material/styles";
import { lime, grey } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: lime[500],
      dark: lime[800],
    },
    secondary: {
      light: grey[800],
      main: grey[900],
    },
  },
  typography: {
    nav: {
      fontSize: "40%",
    },
    subtitle1: {
      fontSize: 15,
    },
    subtitle2: {
      fontSize: 12,
    },
  },
});

export default theme;
