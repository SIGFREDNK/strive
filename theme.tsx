// MATERIAL UI
import { createTheme } from '@mui/material';
import { blue } from '@mui/material/colors';

// PALETTE
import palette from 'palette.module.scss';

// THEME
const theme = createTheme({
    palette: {
        primary: {
            main: palette.primary
        },
        secondary: blue,
        text: {
            primary: palette.textPrimary,
            secondary: palette.textSecondary
        }
    },
    typography: {
        fontFamily: 'Poppins',
        fontWeightLight: 400,
        fontWeightRegular: 500,
        fontWeightMedium: 600,
        fontWeightBold: 700
    }
});

export default theme;
