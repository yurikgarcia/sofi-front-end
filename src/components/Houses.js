import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";

function Houses({houseData}) {
  const charac = houseData.map((elem, idx) => (
    <Card key="idx" variant="outlined">{elem.name}</Card>
  ))
  console.log("Characters in HTML:", charac);
  return (
    <div>
      <Box>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <Card variant="outlined">{charac}</Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default Houses;