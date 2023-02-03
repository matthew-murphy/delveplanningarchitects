import { useEffect } from "react";

// react-router components
import { Routes, Route, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Kit 2 PRO React themes
import theme from "assets/theme"
import MKBox from "components/MKBox";
import DefaultNavbar from "./components/DefaultNavbar/index";
import DefaultFooter from "./components/Footers/DefaultFooter/index";
import FooterRoutes from "footer.routes";
import routes from "routes";
import { Error404 } from "pages/Error/Error404";

export default function App() {
  const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DefaultNavbar
        routes={routes}
        transparent
        absolute
        light
      />
      <Routes>
        {getRoutes(routes)}
        <Route path="*" element={<Error404 />} />
      </Routes>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={FooterRoutes} />
      </MKBox>
    </ThemeProvider>
  );
}
