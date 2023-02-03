import React from 'react'
import { Grid } from '@mui/material'
import MKBox from 'components/MKBox'
import MKTypography from 'components/MKTypography'
import MKInput from 'components/MKInput'
import MKButton from 'components/MKButton'

export default function ContactForm() {
  return (
    <Grid container spacing={3} alignItems="center" justifyContent={"center"}>
      <Grid
        item
        justifyContent="center"
        xs={12}
        lg={8}
        ml={{ xs: "auto", lg: 6 }}
        mr={{ xs: "auto", lg: 6 }}
      >
        <MKBox
          bgColor="white"
          borderRadius="xl"
          shadow="lg"
          display="flex"
          flexDirection="column"
          mt={{ xs: 20, sm: 18, md: 20 }}
          mb={{ xs: 20, sm: 18, md: 20 }}
          mx={3}
        >
          <MKBox
            variant="gradient"
            bgColor="info"
            coloredShadow="info"
            borderRadius="lg"
            p={2}
            mx={2}
            mt={-3}
          >
            <MKTypography variant="h3" color="white">
              Contact us
            </MKTypography>
          </MKBox>
          <MKBox p={3}>
            <MKTypography variant="body2" color="text" mb={3}>
              We are here to help you. Please fill out the form below and we will
              get back to you as soon as possible.
            </MKTypography>
            <MKBox width="100%" component="form" method="post" autocomplete="off">
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <MKInput
                    variant="standard"
                    label="Full Name"
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKInput
                    type="email"
                    variant="standard"
                    label="Email"
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <MKInput
                    variant="standard"
                    label="What can we help you?"
                    placeholder="Describe your problem in at least 250 characters"
                    InputLabelProps={{ shrink: true }}
                    multiline
                    fullWidth
                    rows={6}
                  />
                </Grid>
              </Grid>
              <Grid container item justifyContent="center" xs={12} mt={5} mb={2}>
                <MKButton type="submit" variant="gradient" color="info">
                  Send Message
                </MKButton>
              </Grid>
            </MKBox>
          </MKBox>
        </MKBox>
      </Grid>
    </Grid>
  )
}
