import { createTheme } from "@mui/material";
import { green } from "@mui/material/colors";


const theme = {
  primary: {
    light: green[100],
    main: green[400],
    dark: green[800],
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
};

export const MuiTheme = createTheme({
  palette: {
    ...theme,
  },
});