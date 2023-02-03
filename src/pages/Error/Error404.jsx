import React from "react";
import MKBox from "../../components/MKBox/index";

// Routes
import footerRoutes from "footer.routes";

export const Error404 = () => {
  const wrapper = React.useRef(null);
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    wrapper.current.scrollTop = 0;
    document.body.classList.add("error-page");
    return function cleanup() {
      document.body.classList.remove("error-page");
    };
  }, []);
  return (
    <>
      <MKBox
        ref={wrapper}
        display="flex"
        flexDirection="column"
        minHeight="100vh"
        justifyContent="center"
        alignItems="center"
        className="wrapper"
      >
        <MKBox
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          className="content"
        >
          <MKBox
            display="flex"  
            justifyContent="center"
            alignItems="center"
            className="number"
          >
            <MKBox
              as="h1"
              fontSize="6rem"
              fontWeight="700"
              lineHeight="1.2"
              color="error"
            >
              404
            </MKBox>
          </MKBox>
          <MKBox
            as="h3"
            fontSize="1.5rem"
            fontWeight="700"
            lineHeight="1.2"
            color="error"
          >
            Page not found
          </MKBox>
          <MKBox
            as="p"
            fontSize="1.125rem"
            fontWeight="400"
            lineHeight="1.2"
            color="gray"
          >
            We are sorry but the page you are looking for does not exist.
          </MKBox>
        </MKBox>
      </MKBox>
    </>
  );
}
