import { Grid, Container } from '@mui/material';
import MKBox from "components/MKBox";
import MKTypography from 'components/MKTypography';
import SimpleInfoCard from 'examples/Cards/InfoCards/SimpleInfoCard';

export default function InfoSection() {
  return (
    <MKBox component="section" pb={4}>
      <Container justifyContent="center">
        <Grid container spacing={7} justifyContent="center">
          <Grid item xs={12} md={6} lg={6}>
            <SimpleInfoCard
              color="info"
              icon="support_agent"
              title="Who We Are"
              // description="We bring significant global industry experience using pragmatic solutions to real world problems. 
              // We bridge the gap between theoretical solutions and solutions that work in individual business requirements."
              description={
                <>
                  We bring significant global industry experience using pragmatic solutions to real world problems.
                  We bridge the gap between theoretical solutions and solutions that work in individual business requirements. <br/><br/>
                  <MKTypography display="block" variant="5" fontWeight="bold" mt={2.5} mb={1.5}>Our experience includes:<br/></MKTypography>
                  <ul style={{ listStylePosition: "inside" }}>
                    <li>Designing organization structure for accountability towards strategic growth</li>
                    <br/>
                    <li>Implementing Integrated Business Planning (IBP) and Sales & Operations Planning (S&OP)</li>
                    <br/>
                    <li>Implementing short term tactical planning (Sales & Operations Execution, demand control etc.)</li>
                    <br/>
                    <li>Effecting Foundational supply chain supporting processes</li>
                    <br/>
                    <li>Aligning Systems integration  - how to bridge the gap between business processes and systems.</li> 
                    <br/>
                    <li>Enabling Financial integration</li>
                  </ul>
                </>
              }
            />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <SimpleInfoCard
              color="info"
              icon="architecture"
              title="What We Offer"
              description="We apply unique solutions to address  an array of business issues from organization designs  for strategic growth to balancing supply and demand."
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  )
}
