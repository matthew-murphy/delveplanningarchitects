

import { useEffect, useRef } from "react";

// rellax
import Rellax from "rellax";

// typed-js
import * as Typed from "typed.js";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// components
import TitleWithContent from "components/TitleWithContent";

// About Us page sections
import Information from "./sections/Information";
import Team from "./sections/Team";
import Featuring from "./sections/Featuring";
import Newsletter from "./sections/Newsletter";
import bgImage from "assets/images/office-dark.jpg";
import Header from "components/Headers/Header";
import Team2 from "./sections/Team2";

export default function AboutUs() {
  const background = ({ palette: { gradients }, functions: { linearGradient, rgba } }) => `${linearGradient(rgba(gradients.dark.main, 0.5), rgba(gradients.dark.state, 0.5))}, url(${bgImage})`;

  return (
    <>
      <Header
        title="Work with an amazing team"
        subtitle="We are Integrated Business Planning Experts."
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
        <TitleWithContent
          id="learn-more"
          label="About Us"
          title="Combined 50 years of industry experience "
          content="Planning is the process of thinking, combining math and art, 
          integrating numbers and assumptions and merging facts and opinion. 
          Planning is about defining a path towards an objective and being agile 
          in response to inevitable deviations. Planning is based on foresight, 
          projections informed by today's performance. Planning is a fundamental 
          property of successful behavior. It involves the use of logic and 
          imagination to visualize a desired state and the necessary actions to 
          achieve that objective."
        />
        <Information />
        <Team />
      </Card>
    </>
  );
}