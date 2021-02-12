import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import { esES } from '@material-ui/core/locale';

// Create a theme instance.
const theme = createMuiTheme(
  {
    palette: {
      primary: {
        main: '#0f72b8',
      },
      secondary: {
        main: '#19857b',
      },
      error: {
        main: red.A400,
      },
      background: {
        default: '#fff',
      },
    },
  },
  esES,
);

export default theme;
