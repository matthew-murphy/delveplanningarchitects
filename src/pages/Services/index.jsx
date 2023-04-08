import ContactForm from "components/Contact";
import { Card } from "@mui/material";
import Header from "components/Headers/Header";
import bgImage from "assets/images/nastuh.jpg";
import InfoSection from "./sections/InfoSection";
import WhyUsSection from "./sections/WhyUsSection"
import MKTypography from "components/MKTypography";
import TitleWithContent from "components/TitleWithContent";
import image1 from "assets/images/managementchart.png";
import image2 from "assets/images/chart.png";
import SplitInfoSection from "./sections/InfoCards"
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
          title="What we offer."
          content="We provide planning process and systems solutions to drive accuracy, fidelity and credibility of business and material planning across operational, tactical, and strategic horizons. "
        />
        <SplitInfoSection 
          height={500}
          title1={"ERP Management"} 
          description1={
            <>
              <MKTypography variant="body2" fontWeight="bold" color="text">
                <ul style={{ listStylePosition: "outside" }}>
                  <li>Assessment of the value that enterprise resource planning should bring to the business and the degree to which this promise has been realized with the current system.</li>
                  <li>Review of the effectiveness of the planning calendar in driving activities in the daily, weekly and monthly cycles.</li>
                  <li>Review of the ERP processes, ground rules, time fences and heuristics.</li>
                  <li>Comparison with best practice models.</li>
                  <li>Identification of opportunities for further improvements.</li> 
                  <li>Identification of processes that should be eliminated.</li>
                  <li>Technology recommendations for enhancing value from deployed ERP systems.</li>
                </ul>
              </MKTypography>
            </>
          }
          title2={"Demand Management"}
          description2={
            <>
              <MKTypography variant="body2" fontWeight="bold" color="text">
                Assessment of the compliance between actual CRM and demand management approaches with best practice models. This includes:
                  <ul style={{ listStylePosition: "outside", paddingLeft: "50px" }}>
                    <li>Order promising mechanisms.</li>
                    <li>Deriving value from EIS/Data warehouse, for demand aggregation, trend analysis and forecast development.</li>
                    <li>Distribution Centre replenishment behaviors, Linkage mechanisms to S&OP Supply agreement development for large customers, Customer service review processes, Annual customer satisfaction surveys, KPIs and measures of value.</li>
                    <li>Organization design and development.</li> 
                    <li>Technology recommendations related to enhancing value from deployed demand management and CRM systems.</li>
                  </ul>
              </MKTypography>
            </>
          }
        />
        <SplitInfoSection 
          height={510}
          title1={"Inventory Management"} 
          description1={
            <>
              <MKTypography variant="body2" fontWeight="bold" color="text">
                <ul style={{ listStylePosition: "outside" }}>
                  <li>Development of an explicit inventory model for the organization, that appropriately represents the multi-step and multistage reality of the supply chain.</li>
                  <li>Recommended policy and salient parameter prescription for each step and stage of the inventory model, in order to achieve target inventory levels.</li>
                  <li>Definition of a critical success factor program for implementing the required policy and parameter positions, and achieve and maintain the inventory result.</li>
                  <li>Identification of other improvement opportunities as appropriate.</li>
                  <li>Defining key KPI's to support inventory management.</li>
                </ul>
              </MKTypography>
            </>
          }
          title2={"Production Planning Architecture"}
          description2={
            <>
              <MKTypography variant="body2" fontWeight="bold" color="text">
                  <ul style={{ listStylePosition: "outside" }}>
                    <li>Determination of the processes, key parameters, ground rules, time fences and heuristics in regard to aggregate production planning across the global supply chain, that appropriately balances the needs of the customer with those of the multi-stage supply chain.</li>
                    <li>Determination of the planning calendar, that should drive planning activities in the daily, weekly and monthly cycles.</li>
                    <li>Distribution Centre replenishment and linkage strategies.</li>
                    <li>Assurance and review mechanisms via the product family and regional S&OP processes.</li> 
                    <li>Technology recommendations related to support of the planning process across multiple facilities.</li>
                    <li>Linkage mechanisms to strategic procurement.</li>
                    <li>Organizational design and development Implications.</li>
                  </ul>
              </MKTypography>
            </>
          }
        />
        <SplitInfoSection 
          height={510}
          title1={"Materials Planning Architecture"} 
          description1={
            <>
              <MKTypography variant="body2" fontWeight="bold" color="text">
                <ul style={{ listStylePosition: "outside" }}>
                  <li>Determination of the processes, parameters, ground rules, time fences and heuristics in regard to sequence and quantification of production, that appropriately balances the needs of the customer with those of the supply chain.</li>
                  <li>Linkage mechanisms between master production schedule and the S&OP.</li>
                  <li>Determination of the planning calendar, that should drive planning activities in the daily, weekly and monthly cycles.</li>
                  <li>Technology recommendations related to support of the planning process.</li>
                  <li>Linkage mechanisms to customer service and order intake.</li>
                  <li>Linkage mechanisms to procurement.</li>
                  <li>Change control mechanisms.</li>
                  <li>Organization design and development Implications.</li>
                </ul>
              </MKTypography>
              
            </>
          }
          title2={"Analytics Architecture"}
          description2={
            <>
              <MKTypography variant="body2" fontWeight="bold" color="text">
                  <ul style={{ listStylePosition: "outside" }}>
                    <li>Identify future trends, based on a comprehensive analysis of customer demand patterns, and various geographic and microeconomic factors — using state-of-the-art forecasting tools and algorithms — to make your supply chain more agile, provide enough lead time to prevent stock-outs, optimize inventory costs, and maintain a healthy bottom line.</li>
                    <li>Demand Forecasting & Planning</li>
                    <li>Inventory Forecasting & Planning</li>
                    <li>Replenishment Forecasting & Planning</li> 
                    <li>Manufacturing Forecasting & Planning</li>
                  </ul>
              </MKTypography>
            </>
          }
        />
        <InfoSection 
          title={"How To Get Started"} 
          description={"We believe that each business has unique nuances that require unique solutions. We begin this process by understanding your business, what's working vs what's not working to design a specific improvement plan for your business."} 
          image={image1}
          style={{ margin: "70px 0 50px"}}
          
        />
        <InfoSection 
          title={"Identify The Problem"} 
          description={"Business performance issues manifest in a variety of different aspects. Understanding what problem you are trying to solve is a fundamental requirement in designing a unique solution."} 
          image={image2}
          icon={"priority_high"}
          style={{ margin: "0 0 50px"}}
        />
        <WhyUsSection />
        <ContactForm />
      </Card>
    </>
  );
}
