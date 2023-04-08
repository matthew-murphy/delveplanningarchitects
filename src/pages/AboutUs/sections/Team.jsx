

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 PRO React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

// Images
import profilePic from "assets/images/debbie_img.png";
import profilePic2 from "assets/images/profilepix.jpg";
function Team() {
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
      sx={{
        borderBottomRightRadius: "8px",
        borderBottomLeftRadius: "8px",
      }}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              Your success is our success.
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              A Passion for enabling leaders in an organization to view their business from a new perspective.
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={profilePic}
                name="Debbie Climer"
                position={{ color: "info", label: "Partner" }}
                description={
                  <ul style={{ paddingBottom: "16px", minHeight: "500px"}}>
                    <li>Cummins Inc. Director of Global Integrated Business planning</li>
                    <li>Experienced in leading and deploying IBP in a variety of different businesses in multiple regions around the globe.</li>
                    <li>25 years of industry  experience in operations, Quality, auditing, finance, and all aspects of IBP. </li>
                    <li>With this experience,  encountered many adversities that come with implementation and have accumulated a long list of common potential failure modes and how to resolve or avoid them altogether. </li>
                    <li>BS in business from Indiana University. </li>
                    <li>MBA from Ball State University focused on finance.  BS in business from Kelley School of business IU.</li>
                  </ul>                
                }
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={profilePic2}
                name="Sriram Parameswaran"
                position={{ color: "info", label: "Partner" }}
                description={
                  <ul style={{ paddingBottom: "16px", minHeight: "500px" }}>
                    <li>Amazon Inc – General Manager for Advanced Analytics and Operational Excellence</li>
                    <li>Experienced in leading and deploying Analytical and Planning Solutions across the globe</li>
                    <li>16 years of industry experience in operations, analytics, machine learning, AI for planning, materials management, supplier management and business process improvement.</li>
                    <li>Lead multiple software implementations, analytical solutions for planning, MRP / ERP replacements and supply chain transformation.</li>
                    <li>MS in Nuclear Engineering from University Of Tennessee Knoxville, MBA in Supply Chain Management from University Of Tennessee Knoxville </li>
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

export default Team;
