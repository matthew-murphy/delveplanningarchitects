

/** 
  All of the routes for the Material Kit 2 PRO React React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Navbar.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `name` key is used for the name of the route on the Navbar.
  2. The `icon` key is used for the icon of the route on the Navbar.
  3. The `collapse` key is used for making a collapsible item on the Navbar that contains other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  4. The `route` key is used to store the route location which is used for the react router.
  5. The `href` key is used to store the external links location.
  6. The `component` key is used to store the component of its route.
  7. The `dropdown` key is used to define that the item should open a dropdown for its collapse items .
  8. The `description` key is used to define the description of
          a route under its name.
  9. The `columns` key is used to define that how the content should look inside the dropdown menu as columns,
          you can set the columns amount based on this key.
  10. The `rowsPerColumn` key is used to define that how many rows should be in a column.
*/

// @mui material components
import Icon from "@mui/material/Icon";

// Pages
import CoworkingPage from "layouts/pages/landing-pages/coworking";
import Rental from "layouts/pages/landing-pages/rental";
import AboutUs from "layouts/pages/company/about-us";
import Pricing from "layouts/pages/company/pricing";
import HelpCenter from "layouts/pages/support/help-center";
import ContactUs from "layouts/pages/support/contact-us";
import Faq from "layouts/pages/support/faq";
import Privacy from "layouts/pages/support/privacy";
import DesktopApp from "layouts/pages/apps/desktop-app";
import SingleArticle from "layouts/pages/blogs/single-article";
import Author from "layouts/pages/blogs/author";
import VirtualRealityPage from "layouts/pages/extra/virtual-reality";

// Account
import SignInBasicPage from "layouts/authentication/sign-in/basic";
import SignInCoverPage from "layouts/authentication/sign-in/cover";
import SignInIllustration from "layouts/authentication/sign-in/illustration";
import SignInSimplePage from "layouts/authentication/sign-in/simple";
import SignUpCoverPage from "layouts/authentication/sign-up/cover";
import ResetPasswordPage from "layouts/authentication/reset-password/cover";

// Sections
import PageHeaders from "layouts/sections/page-sections/page-headers";
import Features from "layouts/sections/page-sections/featuers";
import PricingSection from "layouts/sections/page-sections/pricing";
import FaqSection from "layouts/sections/page-sections/faq";
import BlogPosts from "layouts/sections/page-sections/blog-posts";
import Testimonials from "layouts/sections/page-sections/testimonials";
import Teams from "layouts/sections/page-sections/teams";
import Stats from "layouts/sections/page-sections/stats";
import Cta from "layouts/sections/page-sections/cta";
import Applications from "layouts/sections/page-sections/applications";
import LogoAreas from "layouts/sections/page-sections/logo-areas";
import Footers from "layouts/sections/page-sections/footers";
import GeneralCards from "layouts/sections/page-sections/general-cards";
import ContentSections from "layouts/sections/page-sections/content-sections";
import Navbars from "layouts/sections/navigation/navbars";
import NavTabs from "layouts/sections/navigation/nav-tabs";
import Pagination from "layouts/sections/navigation/pagination";
import Newsletters from "layouts/sections/input-areas/newsletters";
import ContactSections from "layouts/sections/input-areas/contact-sections";
import Inputs from "layouts/sections/input-areas/inputs";
import Forms from "layouts/sections/input-areas/forms";
import Alerts from "layouts/sections/attention-catchers/alerts";
import Notifications from "layouts/sections/attention-catchers/notifications";
import Modals from "layouts/sections/attention-catchers/modals";
import TooltipsPopovers from "layouts/sections/attention-catchers/tooltips-popovers";
import Avatars from "layouts/sections/elements/avatars";
import Badges from "layouts/sections/elements/badges";
import BreadcrumbsEl from "layouts/sections/elements/breadcrumbs";
import Buttons from "layouts/sections/elements/buttons";
import Dropdowns from "layouts/sections/elements/dropdowns";
import ProgressBars from "layouts/sections/elements/progress-bars";
import SocialButtons from "layouts/sections/elements/social-buttons";
import Tables from "layouts/sections/elements/tables";
import Toggles from "layouts/sections/elements/toggles";
import Typography from "layouts/sections/elements/typography";
import React from "react";


const routes = [

  {
    name: "home",
    iconf: <Icon>home</Icon>,
    route: "/home",
  },
  {
    name: "about",
    icon: <Icon>info</Icon>,
    route: "/about",  
  },
  {
    name: "contact",
    icon: <Icon>contact_mail</Icon>,
    route: "/contact",
  },

  // Example of a collapsable menu
  
  // {
  //   name: "pages",
  //   icon: <Icon>dashboard</Icon>,
  //   columns: 3,
  //   rowsPerColumn: 2,
  //   collapse: [
  //     {
  //       name: "landing pages",
  //       collapse: [
  //         {
  //           name: "coworking",
  //           route: "/pages/landing-pages/coworking",
  //           component: <CoworkingPage />,
  //         },
  //         {
  //           name: "rental",
  //           route: "/pages/landing-pages/rental",
  //           component: <Rental />,
  //         },
  //       ],
  //     },
  //     {
  //       name: "company",
  //       collapse: [
  //         {
  //           name: "about us",
  //           route: "/pages/company/about-us",
  //           component: <AboutUs />,
  //         },
  //         {
  //           name: "pricing",
  //           route: "/pages/company/pricing",
  //           component: <Pricing />,
  //         },
  //       ],
  //     },
  //     {
  //       name: "support",
  //       collapse: [
  //         {
  //           name: "help center",
  //           route: "/pages/support/help-center",
  //           component: <HelpCenter />,
  //         },
  //         {
  //           name: "contact us",
  //           route: "/pages/support/contact-us",
  //           component: <ContactUs />,
  //         },
  //         {
  //           name: "faq",
  //           route: "/pages/support/faq",
  //           component: <Faq />,
  //         },
  //         {
  //           name: "privacy",
  //           route: "/pages/support/privacy",
  //           component: <Privacy />,
  //         },
  //       ],
  //     },
  //     {
  //       name: "apps",
  //       collapse: [
  //         {
  //           name: "desktop app",
  //           route: "/pages/apps/desktop-app",
  //           component: <DesktopApp />,
  //         },
  //       ],
  //     },
  //     {
  //       name: "blogs",
  //       collapse: [
  //         {
  //           name: "single article",
  //           route: "/pages/blogs/single-article",
  //           component: <SingleArticle />,
  //         },
  //         {
  //           name: "author",
  //           route: "/pages/blogs/author",
  //           component: <Author />,
  //         },
  //       ],
  //     },
  //     {
  //       name: "extra",
  //       collapse: [
  //         {
  //           name: "virtual reality",
  //           route: "/pages/extra/virtual-reality",
  //           component: <VirtualRealityPage />,
  //         },
  //       ],
  //     },
  //   ],
  // },
];

export default routes;
