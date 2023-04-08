import { Grid, Container } from '@mui/material';
import MKBox from "components/MKBox";
import FilledInfoCard from 'examples/Cards/InfoCards/FilledInfoCard';

export default function SplitInfoSection({ title1, description1, title2, description2, height, icon1, icon2, color1, color2 }) {
  return (
    <MKBox component="section" pb={4}>
      <Container justifyContent="center">
        <Grid container spacing={7} justifyContent="center">
          <Grid item xs={12} md={12} lg={6}>
            <FilledInfoCard
              height={height}
              color={color1 ? color1 : "success"}
              icon={icon1 ? icon1 : "checkmark"}
              title={title1}
              description={description1}
            />
          </Grid>
          <Grid item xs={12} md={12} lg={6}>
            <FilledInfoCard
              height={height}
              color={color2 ? color2 : "success"}
              icon={icon2 ? icon2 : "checkmark"}
              title={title2}
              description={description2}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  )
}