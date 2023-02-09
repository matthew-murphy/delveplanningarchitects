import ContactForm from "components/Contact";
import { Card } from "@mui/material";
import Header from "components/Headers/Header";
import bgImage from "assets/images/nastuh.jpg";
import InfoSection from "./sections/InfoSection";
import TitleWithContent from "components/TitleWithContent";

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
          content="We offer a variety of services to help you achieve your goals.
          We offer a variety of services to help you achieve your goals.
          We offer a variety of services to help you achieve your goals."
        />
        <InfoSection />
        <ContactForm />
      </Card>
    </>
  );
}
