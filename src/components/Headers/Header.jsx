import React, { useEffect, useRef } from "react";
import Rellax from "rellax";
import PropTypes from "prop-types";
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import bgImage from "assets/images/blue_bird.webp";
import theme from "assets/theme";

function Header({ title, subtitle, buttonLabels, buttonLinks, mixedVariants, backgroundImage, backgroundImageStyle, quote, author }) {
  const headerRef = useRef(null);
  const background = ({ palette: { gradients }, functions: { linearGradient, rgba } }) => `${linearGradient(rgba(gradients.dark.main, 0.85), rgba(gradients.dark.state, 0.85))}, url(${backgroundImage})`;
  
  // Setting up rellax
  useEffect(() => {
    const parallax = new Rellax(headerRef.current, {
      speed: -6,
    });

    return () => parallax.destroy();
  }, []);

  return (
    <MKBox component="header" position="relative" ref={headerRef}>
      <MKBox
        display="flex"
        alignItems="center"
        minHeight="85vh"
        sx={{
          backgroundColor: "black",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          [theme.breakpoints.up("lg")]: {
            backgroundImage: background,
          },
          [theme.breakpoints.down("lg")]: {
            backgroundImage: background,
            height: "100vh",
          },
        }}
      >
        <Container>
            <Grid
              container
              item
              xs={12} 
              md={12} 
              lg={10}
              flexDirection="column"
              justifyContent="center"
            >
            <MKTypography
              variant="title"
              color="white"
              py={0.8125}
              mr={2}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  marginTop: 3,
                },
              })}
            >
              {title}
            </MKTypography>
            <MKTypography variant="h1" color="white" opacity={0.8} pr={0} mr={0} mb={2}>
              {subtitle} {" "}
            </MKTypography>
            {quote ? (
              <MKTypography 
                variant="body1" 
                color="white" 
                opacity={0.8} 
                pr={6} 
                mr={6}
              >
                {quote}
              <MKTypography 
                variant="em" 
                color="white" 
                opacity={0.8} 
                pr={6} 
                mr={6} 
                sx={{flexDirection: 'row-reverse', display: 'flex',}}
              >
                {author}
              </MKTypography>
              </MKTypography>
              ) : <></>
            }
            {buttonLabels && buttonLinks ? (
              <Stack direction="row" spacing={1} mt={3}>
                {buttonLabels.map((label, i) => (
                  <MKButton 
                    key={i} 
                    color="white" 
                    onClick={() => window.open(buttonLinks[i], "_self")}
                    variant={mixedVariants && i % 2 !== 0 ? "text" : "contained"}
                  >
                    {label}
                  </MKButton>
                ))}
              </Stack>
            ) : <></>}
          </Grid>
        </Container>
      </MKBox>
    </MKBox>
  );
}

// typechecking
Header.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  buttonLabels: PropTypes.array,
  buttonLinks: PropTypes.array,
  mixedVariants: PropTypes.bool,
  backgroundImage: PropTypes.string,
  backgroundImageStyle: PropTypes.object,
  quote: PropTypes.string,
  author: PropTypes.string,
};

Header.defaultProps = {
  backgroundImage: bgImage
};

export default Header;