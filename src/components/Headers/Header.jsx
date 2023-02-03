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

function Header({ title, subtitle, buttonLabels, buttonLinks, mixedVariants, backgroundImage, backgroundImageStyle }) {
  const headerRef = useRef(null);
  const background = ({ palette: { gradients }, functions: { linearGradient, rgba } }) => `${linearGradient(rgba(gradients.dark.main, 0.5), rgba(gradients.dark.state, 0.5))}, url(${backgroundImage})`;
  
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
        minHeight="80vh"
        sx={ backgroundImageStyle ? backgroundImageStyle 
        : {
          backgroundColor: "black",
          backgroundSize: "cover",
          backgroundPosition: "top right",
          [theme.breakpoints.up("lg")]: {
            backgroundImage: `url(${backgroundImage})`,
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
              md={7} 
              lg={6}
              flexDirection="column"
              justifyContent="center"
            >
            <MKTypography
              variant="h1"
              color="white"
              mb={3}
              py={0.8125}
              mr={2}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              {title}
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} pr={6} mr={6}>
              {subtitle} {" "}
            </MKTypography>
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
  mixedVariants: PropTypes.bool
};

Header.defaultProps = {
  backgroundImage: bgImage
};

export default Header;