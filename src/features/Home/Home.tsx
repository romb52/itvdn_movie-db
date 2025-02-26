import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { Link as RouterLink} from 'react-router-dom';

export default function Home() {
    return (
        <Box sx={{ pt: 8, pb: 8, bgcolor: "background.paper" }}>
            <Container maxWidth="sm">
                <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
                    Welcome
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" paragraph>
                    Explore movies today with us
                </Typography>
                <Stack sx={{pt: 4}} direction="row" spacing={2} justifyContent="center">
                    <Button component={RouterLink} to="/movies" variant="contained" color="secondary">
                        Explore
                    </Button>
                </Stack>
            </Container>
        </Box>
    )
}