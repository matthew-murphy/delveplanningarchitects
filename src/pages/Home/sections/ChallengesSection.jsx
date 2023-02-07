// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import image1 from "assets/images/undraw_void_-3-ggu.svg";

// Component
import IconContent from "components/IconContent";

function ChallengesSection() {
  return (
    <MKBox component="section" py={{ xs: 3, md: 12 }}>
      <Container>
        <Grid container alignItems="center">
          <Grid item xs={12} lg={6}>
            <MKTypography variant="h3" my={1}>
              Your Challenges
            </MKTypography>
            <Grid item xs={12} lg={12} sx={{ ml: { xs: -2, lg: "auto" }, mt: { xs: 6, lg: 0 } }}>
              <Stack>
                <IconContent
                  icon="calendar_month"
                  iconColor="error"
                  content={
                    <>
                      The business manages by reviewing past months performance with little understanding of strategic goals.
                    </>
                  }
                />
                <IconContent
                  icon="multiline_chart"
                  iconColor="error"
                  content={
                    <>
                      There is little trust in the information within the organization resulting in multiple finger pointing between supply and demand.
                    </>
                  }
                />
                <IconContent
                  icon="sync_problem"
                  iconColor="error"
                  content={
                    <>
                      It is usually a mystery on what supply chain will deliver this month.
                    </>
                  }
                />
              </Stack>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={6} sx={{ display: 'flex' }} justifyContent="center">
            <img
              src={image1}
              alt="..."
              style={{ width: '350px', marginTop: '30px' }}
            />
          </Grid>
        </Grid>
        <Grid container alignItems="center">
          <Grid item xs={12} lg={6}>
            <MKTypography variant="h3" my={1}>
              Our Solutions
            </MKTypography>
            <Grid item xs={12} lg={12} sx={{ ml: { xs: -2, lg: "auto" }, mt: { xs: 6, lg: 0 } }}>
              <Stack>
                <IconContent
                  icon="calendar_month"
                  iconColor="error"
                  content={
                    <>
                      The business manages by reviewing past months performance with little understanding of strategic goals.
                    </>
                  }
                />
                <IconContent
                  icon="multiline_chart"
                  iconColor="error"
                  content={
                    <>
                      There is little trust in the information within the organization resulting in multiple finger pointing between supply and demand.
                    </>
                  }
                />
                <IconContent
                  icon="sync_problem"
                  iconColor="error"
                  content={
                    <>
                      It is usually a mystery on what supply chain will deliver this month.
                    </>
                  }
                />
              </Stack>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={6} sx={{ display: 'flex' }} justifyContent="center">
            <img
              src={image1}
              alt="..."
              style={{ width: '350px', marginTop: '30px' }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default ChallengesSection;