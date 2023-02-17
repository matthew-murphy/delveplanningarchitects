// @mui icons
// import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 PRO React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/logosvg.svg";

const date = new Date().getFullYear();

const FooterRoutes = {
  brand: {
    name: "Delve Planning Architects",
    image: logoCT,
    route: "/"
  },
  // socials: [
  //   {
  //     icon: <FacebookIcon />,
  //     link: "https://www.facebook.com/CreativeTim/",
  //   },
  //   {
  //     icon: <TwitterIcon />,
  //     link: "https://twitter.com/creativetim",
  //   },
  //   {
  //     icon: <GitHubIcon />,
  //     link: "https://github.com/creativetimofficial",
  //   },
  //   {
  //     icon: <YouTubeIcon />,
  //     link: "https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w",
  //   },
  // ],
  menus: [
    {
      name: "company",
      items: [
        { name: "home", route: "/" },
        { name: "about us", route: "/about-us" },
        { name: "services", route: "/services" },
      ],
    },
    // {
    //   name: "legal",
    //   items: [
    //     { name: "terms & conditions", href: "/terms-and-conditions" },
    //     { name: "privacy policy", href: "/privacy-policy" },
    //     { name: "licenses (EULA)", href: "/EULA" },
    //   ],
    // },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} {" "}
      <MKTypography
        component="a"
        href="https://www.creative-tim.com"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        Delve Planning Architects
      </MKTypography>
      .
    </MKTypography>
  )
};

export default FooterRoutes;
