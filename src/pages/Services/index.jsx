import ContactForm from "components/Contact";
import { Card } from "@mui/material";
import Header from "components/Headers/Header";
import bgImage from "assets/images/nastuh.jpg";
import InfoSection from "./sections/InfoSection";
import WhyUsSection from "./sections/WhyUsSection"
import TitleWithContent from "components/TitleWithContent";
import image1 from "assets/images/image1.png";
import image2 from "assets/images/flow-chart.png";

export default function Services() {
  const background = ({ palette: { gradients }, functions: { linearGradient, rgba } }) => `${linearGradient(rgba(gradients.dark.main, 0.8), rgba(gradients.dark.state, 0.8))}, url(${bgImage})`;

  return (
    <>
      <Header
        title="Our Services"
        subtitle="We offer a variety of services to help you achieve your goals."
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
          label="Our Services"
          title="We offer a variety of services to help you achieve your goals."
          content="We provide planning process and systems solutions to drive accuracy, fidelity and credibility of business and material planning across operational, tactical, and strategic horizons. "
        />
        <InfoSection 
          title={"How To Get Started"} 
          description={"We believe that each business has unique nuances that require unique solutions. We begin this process by understanding your business, what's working vs what's not working to design a specific improvement plan for your business."} 
          image={image1} 
        />
        <InfoSection 
          title={"Identify The Problem"} 
          description={"Business performance issues manifest in a variety of different aspects. Understanding what problem you are trying to solve is a fundamental requirement in designing a unique solution."} 
          image={image2} 
        />
        
        <WhyUsSection />
        <ContactForm />
      </Card>
    </>
  );
}
