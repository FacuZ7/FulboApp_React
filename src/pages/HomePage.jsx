import { Grid, Grid2, Typography } from "@mui/material"

export const HomePage = () => {
    return(
        <Grid2
            container
            spacing={0}
            direction={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            sx={{minHeight: '100vh', backgroundColor:'primary.main', padding:'4'}}
        >
        <Typography>Sigo mañana!!</Typography>
        
        </Grid2>
        
    )
}