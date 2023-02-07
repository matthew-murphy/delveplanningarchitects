// @mui material components
import Card from "@mui/material/Card";
import Header from "components/Headers/Header";

// Sections
import InfoSection from "./sections/InfoSection";
import TitleWithContent from "components/TitleWithContent";
import WhyUsSection from "./sections/WhyUsSection";
import ContactForm from "components/Contact";
import bgImage from "assets/images/bg38.jpg";

export default function Home() {

  return (
    <>
      <Header 
        title="Delve Planning Architects"
        subtitle={<>Integrated Business Planning (IBP)<br/> Design, Align, Integrate, Orchestrate</>}
        buttonLabels={["Get Started", "Learn More"]}
        buttonLinks={["/services", "/#learn-more"]}
        backgroundImage={bgImage}
        backgroundImageStyle={{
          backgroundSize: "cover",
          backgroundPosition: "top right",
          backgroundImage: ({ palette: { gradients }, functions: { linearGradient, rgba } }) => `${linearGradient(rgba(gradients.dark.main, 0.85), rgba(gradients.dark.state, 0.85))}, url(${bgImage})`,
        }}
        quote={
          <>
          Alice: “Would you tell me, please, which way I ought to go from here?”<br/>
          The Cheshire Cat: “That depends a good deal on where you want to get to.”<br/>
          Alice: “I don’t much care where."<br/>
          The Cheshire Cat: “Then it doesn’t much matter which way you go.”<br/>
          Alice: “…so long as I get somewhere.”<br/>
          The Cheshire Cat: “Oh, you’re sure to do that, if only you walk long enough.”<br/>
          </>
        }
        author={<em>Lewis Carroll, Alice in Wonderland</em>}
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