import React from "react";
import ContentRowTop from "./ContentRowTop";
import Footer from "./Footer";
import Background from "../assets/images/HOME-background.jpg";

function ContentWrapper() {
  return (
    <React.Fragment>
      {/*<!-- Content Wrapper -->*/}
      <div
        id="content-wrapper"
        className="d-flex flex-column"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/*<!-- Main Content -->*/}
        <div id="content">
          <ContentRowTop />
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
}
export default ContentWrapper;
