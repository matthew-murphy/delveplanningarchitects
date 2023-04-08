import { Grid, Container } from '@mui/material';
import MKBox from 'components/MKBox';
import MKTypography from 'components/MKTypography';
import SimpleInfoCard from 'examples/Cards/InfoCards/SimpleInfoCard';

export default function InfoSection({ title, description, image, style, icon }) {
  return (
    <MKBox component="section" pb={4} sx={style}>
      <Container justifyContent="center">
        <Grid container spacing={7} justifyContent="center">
          <Grid item xs={12} md={12} lg={6}>
            <SimpleInfoCard
              color="info"
              icon={icon ? icon : "update"}
              title={title}
              description={
                <MKTypography display="block" variant="body2">
                  {description}
                </MKTypography>
              }
            />
          </Grid>
          <Grid item xs={12} md={12} lg={6}>
            <img
              alt="..."
              style={{
                width: "100%",
                maxWidth: "400px",
                objectFit: "contain",
                borderRadius: 2,
                alignSelf: "center",
              }}
              src={image}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  )
}
