import React from 'react';
import { Container, Grid } from '@mui/material';
import MKBox from 'components/MKBox';
import MKBadge from 'components/MKBadge';
import MKTypography from 'components/MKTypography';

export default function TitleWithContent({ label, title, content, id }) {
  return (
    <MKBox id={id} component="section" py={6}>
      <Container>
        <Grid
          container
          item
          xs={12}
          flexDirection="column"
          alignItems="center"
          mx="auto"
          textAlign="center"
          pb={4}
        >
          <MKBadge
            badgeContent={label}
            variant="contained"
            color="info"
            container
            sx={{ mb: 1 }}
          />
          <MKTypography 
            variant="h2" 
            mb={1}
          >
            {title}
          </MKTypography>
          <MKTypography variant="body2" color="text">
            {content}
          </MKTypography>
        </Grid>
      </Container>
    </MKBox>
  )
}
