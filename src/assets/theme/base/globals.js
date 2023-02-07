

// Material Kit 2 PRO React Base Styles
import colors from "assets/theme/base/colors";
import pxToRem from "assets/theme/functions/pxToRem";

const { info, dark } = colors;

const globals = {
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
  '#root': {
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
  // reduce the font size for the smaller screens
  "@media (max-width: 600px)": {
    h1: {
      fontSize: pxToRem(30) + " !important",
    }, 
    //reduce size of h2 on smaller screens
    h2: {
      fontSize: pxToRem(24) + " !important",
    },
    //reduce size of h3 on smaller screens
    h3: {
      fontSize: pxToRem(18) + " !important",
    },
    //reduce size of h4 on smaller screens
    h4: {
      fontSize: pxToRem(16) + " !important",
    },
    //reduce size of h5 on smaller screens
    h5: {
      fontSize: pxToRem(14) + " !important",
    },
    //reduce size of p on smaller screens
    p: {
      fontSize: pxToRem(14) + " !important",
    },
    //reduce size of em on smaller screens
    em: {
      fontSize: pxToRem(14) + " !important",
    },
    //reduce size of span on smaller screens
    span: {
      fontSize: pxToRem(14) + " !important",
    },
  },
};

export default globals;