// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Images
import bgPattern from "assets/images/shapes/pattern-lines.svg";
import { Icon } from "@mui/material";

function SolutionsSection() {
 
  return (
    <MKBox position="relative" variant="gradient" bgColor="dark" mt={{ xs: 0, lg: 12 }} mx={-2}>
      <MKBox
        component="img"
        src={bgPattern}
        alt="background-pattern"
        position="absolute"
        top={0}
        left={0}
        width={{ xs: "auto", lg: "100%" }}
        height={{ xs: "100%", lg: "auto" }}
        opacity={0.6}
      />
      <Container>
        <Grid container alignItems="center">
          <Grid
            item
            xs={12}
            lg={6}
            sx={{ my: 'auto', py: 2, pr: { xs: 3, lg: 2 }, pl: { xs: 3, lg: 0 } }}
          >
            <MKTypography variant="h2" color="white" mb={3}>
              Why Engage Us...
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              {/* IBP is provocative, challenging, and, at times, contentious, yet the benefits are unquestionable. */}
            </MKTypography>
          </Grid>
          <Grid item xs={12} lg={6} sx={{ my: { xs: 0, lg: 6 }, pl: { xs: 3, lg: 6 }, pr: { xs: 3, lg: 6 } }}>
            <Grid container direction={'column'}>
              <Grid item xs={12} lg={4} sx={{ display: 'flex', flexDirection: 'row' }}>
                <Icon sx={{ color: "success.main", fontSize: 20, mr: 1 }}>groups</Icon>
                <MKTypography variant="body2" color="white" mb={2} opacity={0.8}>
                  Operational experience across multiple businesses and sectors
                </MKTypography>
              </Grid>
              <Grid item xs={12} lg={4} sx={{ display: 'flex' , flexDirection: 'row'  }}>
              <Icon sx={{ color: "success.main", fontSize: 20, mr: 1 }}>psychology</Icon>
                <MKTypography variant="body2" color="white" mb={2} opacity={0.8}>
                  Expertise in all aspects of planning: PPDS to strategic roadmaping
                </MKTypography>
              </Grid>
              <Grid item xs={12} lg={4} sx={{ display: 'flex' , flexDirection: 'row'  }}>
              <Icon sx={{ color: "success.main", fontSize: 20, mr: 1 }}>hourglass_bottom</Icon>
                <MKTypography variant="body2" color="white" mb={2} opacity={0.8}>
                  Reduced time to value, focus on quick wins and continuous improvement 
                </MKTypography>
              </Grid>
              <Grid item xs={12} lg={4} sx={{ display: 'flex' , flexDirection: 'row'  }}>
              <Icon sx={{ color: "success.main", fontSize: 20, mr: 1 }}>emoji_objects</Icon>
                <MKTypography variant="body2" color="white" mb={2} opacity={0.8}>
                  Healthy dose of pragmatism verses chasing a concept or perfection
                </MKTypography>
              </Grid>
              <Grid item xs={12} lg={4} sx={{ display: 'flex' , flexDirection: 'row'  }}>
              <Icon sx={{ color: "success.main", fontSize: 20, mr: 1 }}>schema</Icon>
                <MKTypography variant="body2" color="white" mb={2} opacity={0.8}>
                  "With you for the journey" guarantee, your success is our success
                </MKTypography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default SolutionsSection;
