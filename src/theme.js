import { createTheme } from "@mui/material/styles";

/////////Light theme
const lightTheme=createTheme({
    palette: {
        mode:"light",
        main: "#2196F3",
        background:{
            default:"#FFFFFF",
        },
        text:{
            primary:"#000000"
        }
    }
})

/////////Dark theme
const darkTheme=createTheme({
    palette: {
        mode:"dark",
        main: "#2196F3",
        background:{
            default:"#121212",
        },
        text:{
            primary:"#ffffff"
        }
    }
})

export {lightTheme, darkTheme}