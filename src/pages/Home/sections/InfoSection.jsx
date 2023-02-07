import { Grid, Container } from '@mui/material';
import MKBox from "components/MKBox";
import SimpleInfoCard from 'examples/Cards/InfoCards/SimpleInfoCard';

export default function InfoSection() {
  return (
    <MKBox component="section" pb={4}>
      <Container justifyContent="center">
        <Grid container spacing={7} justifyContent="center">
          <Grid item xs={12} md={6} lg={5}>
            <SimpleInfoCard
              color="info"
              icon="support_agent"
              title="Who We Are"
              description="We bring significant global industry experience using pragmatic solutions to real world problems. 
              We bridge the gap between theoretical solutions and solutions that work in individual business requirements."
            />
          </Grid>
          <Grid item xs={12} md={6} lg={5}>
            <SimpleInfoCard
              color="info"
              icon="architecture"
              title="What We Offer"
              description="We apply unique solutions to address  an array of business issues from organization designs  for strategic growth to balancing supply and demand."
            />
          </Grid>
          <Grid item xs={12} md={6} lg={5}>
            <SimpleInfoCard
              color="info"
              icon="update"
              title="How To Get Started"
              description="We believe that each business 
              has unique 
              nuances that require unique 
              solutions. 
              We begin this process by 
              understanding your business, 
              what's working vs what's not 
              working to design a specific 
              improvement plan for your business. "
            />
          </Grid>
          <Grid item xs={12} md={6} lg={5}>
            <SimpleInfoCard
              color="info"
              icon="bug_report"
              title="Identify The Problem"
              description="Business performance issues manifest in a variety of different aspects.  
              Understanding what problem you are trying to solve is a fundamental requirement in designing a unique solution."
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  )
}
