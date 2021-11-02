import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import ClippedDrawer from "./ClippedDrawer.js";

function Houses({houseData}) {
  return (
    <div>
      <ClippedDrawer />
      <Box>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <Card variant="outlined">{houseData.name}</Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
// aa
export default Houses;