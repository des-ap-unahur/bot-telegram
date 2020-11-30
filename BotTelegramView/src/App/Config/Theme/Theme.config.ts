import { createMuiTheme } from '@material-ui/core/styles';
import { BLUE, GRAY, WHITE, DARK_GRAY } from '../../Styles/Colors.index';

export const theme = createMuiTheme({
  typography: {},
  overrides: {
    MuiTableRow:{
      root: {
        backgroundColor: WHITE,
        '&:nth-of-type(odd)': {
          backgroundColor: GRAY,
        },
      },
    },
    MuiTableCell:{
      root: {
        borderBottom: 'none',
        padding: '5px 0px 5px 22px',
      },
      head: {
        color: WHITE,
        borderBottom: '1px solid '+ BLUE,
        backgroundColor: BLUE,
        padding: '10px 0px 10px 22px',
      },
      body: {
        borderBottom: '1px solid '+ BLUE,
      },
    },
    MuiTooltip: {
      arrow: {
        '&::before':{
          backgroundColor: DARK_GRAY,
        }
      },
      popper: {
        marginTop: '-13px',
      },
      tooltip: {
        color: WHITE,
        backgroundColor: DARK_GRAY
      }
    },
    MuiBackdrop:{
      root: {
        backgroundColor: 'none'
      }
    }
  },
})