import React from "react";
// @mui material components
import Card from "@mui/material/Card";
import Header from "components/Headers/Header";

// Sections
import InfoSection from "./sections/InfoSection";
import TitleWithContent from "./components/TitleWithContent";
import WhyUsSection from "./sections/WhyUsSection";
import ContactForm from "components/Contact";

export default function Home() {

  return (
    <>
      <Header 
        title="Design for Success"
        subtitle="Designing changes based on your unique business requirements."
        buttonLabels={["Get Started", "Learn More"]}
        buttonLinks={["/services", "/#learn-more"]}
        mixedVariants
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
          label="Delve Planning Architects"
          title="Integrated Business Planning Experts"
          content="We have experience navigating the dynamics which impede Integrated Bussiness Planning (IBP) implementation in a variety of different businesses. 
          This experience affords us the opportunity to help others take the concepts of IBP and provide pragmatic operational 
          solutions, avoiding rabbit-holes, minefields, and some of the frustration associated with the deployment."
        />
        <InfoSection />
        <WhyUsSection />
        <ContactForm />
      </Card>
    </>
  );
}