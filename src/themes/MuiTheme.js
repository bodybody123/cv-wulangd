import { createTheme } from '@mui/material/styles';

const font = "'Noto Serif', serif";

const theme = createTheme({
    palette: {
        primary: {
            main: '#383428EB'
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontFamily: "'roboto', sans-serif",
                }
            }
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: '#383428EB',
                }            
            }
        }
    },
    typography: {
        fontFamily: font,
        h1: {
            fontSize: '9rem',
            fontWeight: '900',
        },
        h2: {
            fontSize: '4rem',
            fontWeight: '700',
        },
        h3: {
            fontWeight: '700',
        }
    },
});

theme.typography.h3 = {
    fontFamily: font,
    marginBlock: '5%',
    fontSize: '3rem',
    [theme.breakpoints.down('sm')]: {
        marginBlock: '10%',
    }
}

export default theme;