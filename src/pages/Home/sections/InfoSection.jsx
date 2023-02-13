import { Grid, Container, Hidden } from '@mui/material';
import MKBox from "components/MKBox";
import MKTypography from 'components/MKTypography';
import FilledInfoCard from 'examples/Cards/InfoCards/FilledInfoCard';
import SimpleInfoCard from 'examples/Cards/InfoCards/SimpleInfoCard';

export default function InfoSection() {
  return (
    <MKBox component="section" pb={4}>
      <Container justifyContent="center">
        <Grid container spacing={7} justifyContent="center">
          <Grid item xs={12} md={12} lg={6}>
            <FilledInfoCard
              height="900px"
              action={{
                type: "internal",
                label: "Learn More",
                route: "/about-us",
              }}
              color="info"
              icon="support_agent"
              link="/about-us"
              title="Who We Are"
              description={
                <>
                  <MKTypography display="block" variant="body2">
                    We bring significant global industry experience using pragmatic solutions to real world problems.
                    We bridge the gap between theoretical solutions and solutions that work in individual business requirements.
                  </MKTypography>
                  <MKTypography display="block" variant="body2" fontWeight="bold" mt={3.5} mb={1.5}>Our experience includes:<br/></MKTypography>
                  <MKTypography variant="body2" fontWeight="bold" color="text">
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
                  </MKTypography>
                </>
              }
            />
          </Grid>
          <Grid item xs={12} md={12} lg={6}>
            <FilledInfoCard
              height="900px"
              action={{
                type: "internal",
                label: "Learn More",
                route: "/services",
              }}
              color="info"
              icon="architecture"
              title="What We Offer"
              link="/services"
              description={
                <>
                  <MKTypography display="block" variant="body2">
                    We apply unique solutions to address an array of business issues from organization designs 
                    for strategic growth to balancing supply and demand.
                  </MKTypography>
                  <MKTypography display="block" variant="5" fontWeight="bold" mb={1.5}mt={{xs: 0, md: 3.5, lg: 3.5}}>We Specialize in:<br/></MKTypography>
                  <MKTypography variant="body2" fontWeight="bold" color="text">
                    <ul style={{ listStylePosition: "inside", listStyleType: "none" }}>
                      <Grid container spacing={2} >
                        <Grid item xs={12} md={6} lg={12}>
                        <li>Integrated Business Planning (IBP/S&OP)</li>
                        <ul style={{marginLeft: "20px"}}>
                          <li>Organization structure & RACI</li>
                          <li>IBP process design and integrity</li>
                          <li>Review purpose, intent and accountability</li>
                          <li>Education, coaching and directing</li>
                          <li>Action roadmap to maturity & value proposition</li>
                          <li>Period assessment and recommendations</li>
                        </ul>
                        </Grid>
                      <br/>
                      <Grid item xs={12} md={6} lg={12}>
                        <li>Sales and Operations Execution (S&OE)</li>
                        <ul style={{marginLeft: "20px"}}>
                          <li>Establish the value proposition</li>
                          <li>Design & implement pragmatic S&OP</li>
                          <li>Work the process alongside the practitioners</li>
                          <li>Root cause and corrective action plans</li>
                          <li>Non bias evaluation of systemized capabilities</li>
                        </ul>
                      </Grid>
                      <br/>
                      <Grid item xs={12} md={6} lg={12}>
                        <li>Planning Capability Evaluation and Roadmaps</li>
                        <ul style={{marginLeft: "20px"}}>
                          <li>Baseline capabilities vs business aspirations</li>
                          <li>Define capabilities for strategic advantage</li>
                          <li>Determine the capability-building agenda</li>
                          <li>Build the roadmap and advancement program</li>
                          <li>Coach, guide and advocate for continuous improvement</li>
                        </ul>
                      </Grid>
                      <br/>
                      </Grid>
                    </ul>
                  </MKTypography>
                </>
              }
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  )
}