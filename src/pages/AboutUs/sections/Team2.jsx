

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 PRO React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

// Images
import profilePic from "assets/images/kim_img.png";

function Team2() {
  return (
    <MKBox
      component="section"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              Your success is my success.
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              A Passion for enabling leaders in an organization to view their business from a new perspective.
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={12}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={profilePic}
                name="Kim Britton"
                position={{ color: "info", label: "Partner" }}
                description={
                  <ul>
                    <li>Personal Journey in Planning & Materials Management</li>
                    <li>Honeywell Exec Director Planning </li>
                    <li>3M Inc.: Global Division IBP Deployment Director</li>
                    <li>3M GMbH.: Region IBP Deployment Director</li>
                    <li>Cummins Engine Inc: Director IBP,  Capability Ldr </li>
                    <li>Ford of Japan: S&OP/E Leader</li>
                    <li>Ford of Europe: S&OP Deployment Ldr</li>
                    <li>Royal Navy: Engineering & Logistics </li>
                  </ul>                
                }
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team2;
