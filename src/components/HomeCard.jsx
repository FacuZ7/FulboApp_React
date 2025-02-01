import { Grid2, Link, Card, CardContent, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

export const HomeCard = ({title='', redirect='/'}) => {
  return (
    <Grid2 xs={12} sm={6} md={4}>
        <Link sx={{textDecoration:'none'}} component={ RouterLink } color="inherit" to={redirect}>
            <Card>
                <CardContent>
                    <Typography variant="h5">{title}</Typography>
                </CardContent>
            </Card>
        </Link>
    </Grid2>
  )
}
