

// Material Kit 2 PRO React Base Styles
import colors from "assets/theme/base/colors";

const { info, dark } = colors;

export default {
  html: {
    scrollBehavior: "smooth",
  },
  body: {
    width: "100%",
    height: "100%",
    margin: "0px",
    padding: "0px",
    overflowX: "hidden", 
  },
  "*, *::before, *::after": {
    margin: 0,
    padding: 0,
  },
  "a, a:link, a:visited": {
    textDecoration: "none !important",
  },
  "a.link, .link, a.link:link, .link:link, a.link:visited, .link:visited": {
    color: `${dark.main} !important`,
    transition: "color 150ms ease-in !important",
  },
  "a.link:hover, .link:hover, a.link:focus, .link:focus": {
    color: `${info.main} !important`,
  },
};
