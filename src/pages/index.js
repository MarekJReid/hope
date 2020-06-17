import React from "react";

import Layout from "../components/layout";
import Video from "../components/video";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ height: "100vh" }}>
      <div className="container">
        <div className="section">
          <h1 className="center-align">Welcome to the Hope Barometer</h1>

          <Video
            videoSrcURL="https://player.vimeo.com/video/428430548"
            videoSrcTitle="Hope Barometer Presentation"
          />
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
