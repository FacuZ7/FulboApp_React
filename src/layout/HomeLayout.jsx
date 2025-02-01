import { Grid2 } from "@mui/material"

export const HomeLayout = ({ children }) => {
  return (
    <Grid2 
        container
        borderRadius={3}
        gap={2}
        xs={12} sm={6} md={4}
        sx={{
            minHeight: "100vh",
            backgroundColor: "primary.main",
            p: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        }} 
    >

        { children }

    </Grid2>
  )
}
