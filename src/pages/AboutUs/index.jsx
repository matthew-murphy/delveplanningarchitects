

import { useEffect, useRef } from "react";

// rellax
import Rellax from "rellax";

// typed-js
import * as Typed from "typed.js";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

// About Us page sections
import Information from "./sections/Information";
import Team from "./sections/Team";
import Featuring from "./sections/Featuring";
import Newsletter from "./sections/Newsletter";
import bgImage from "assets/images/office-dark.jpg";
import Header from "components/Headers/Header";

export default function AboutUs() {
  const background = ({ palette: { gradients }, functions: { linearGradient, rgba } }) => `${linearGradient(rgba(gradients.dark.main, 0.5), rgba(gradients.dark.state, 0.5))}, url(${bgImage})`;

  return (
    <>
      <Header
        title="Work with an amazing team"
        subtitle="We're constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game"
        backgroundImage={bgImage}
        backgroundImageStyle={{
          backgroundSize: "cover",
          backgroundPosition: "top right",
          backgroundImage: background,
        }}
      />
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Information />
        <Team />
        <Featuring />
        <Newsletter />
      </Card>
    </>
  );
}