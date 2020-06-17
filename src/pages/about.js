import React from "react";


import Layout from "../components/layout";
import SEO from "../components/seo";
import Video from "../components/video"

const About = () => (
  <Layout>
    <SEO title="About" />
    <div className="section">
      <div
        className="container"
        style={{
          width: "70vw",
        }}
      >
        <div className="row">
          <h1 className="center-align">About The Hope Barometer</h1>
          <div
            className="flow-text"
            style={{
              lineHeight: "1.8rem",
            }}
          >
            What originally stared as an idea in 2009, has evolved into an
            international research program involving over 15 countries. The
            basic motivation for developing the ‘Hope-Barometer International
            Research Program' was responding to the impression that in Europe,
            the attention of the populous and mass media concerning the future
            was focused mainly on problems, risks, catastrophes, worries and
            fears rather than opportunity and potential. Since then, for more
            than 10 years, swissfuture, together with the University of St.
            Gallen, has been conducting the international survey in which
            thousands of people take part every year and take place in
            Switzerland, Germany, France, Czech Republic, Poland, Spain, India,
            Malta, Israel, South Africa and now, Australia. The project is a
            scientifically broad-based study of the hopes, desires and future
            expectations of the population designed to empirically investigate
            the fundamental aspects, condition and interrelations of a positive
            attitude toward the future and ultimately discuss the results in the
            public media and forums around the world. In addition to providing a
            wide same of research data it also maintains two fundamental goals.
            First it aims to make people aware of their own hopes, values and
            abilities. This also includes reflection on the most important
            personal sources of hope. Secondly, it aims to show through an
            in-depth analysis what it is worth hoping for, where one should
            place ones hopes and what more people can do to stay hopeful and
            lead a fulfilled and happy life. Outcomes of the research is
            regularly presented and discussed at International congress of the
            International Positive Psychology Association (IPPA) and European
            Conference of Positive Psychology (ECPP), Swiss Positive Psychology
            Association (SWIPPA) and the Institute of Psychology at the
            University of Bern (Switzerland).
            <br />
            <br />
            <h2>What is the significance of hope?</h2>
            The idea of ‘hope' has been considered and explored throughout
            history, dating right back to the time of Greek philosophy. It was
            then that Aristotle delivered the notion that "even though not every
            hopeful person is courageous, every courageous person is hopeful".
            This of course was one of many attempts to conceptualise and explore
            the notion of hope and has continued to be explored by philosophers,
            academics, psychologists, theologists and even sports professionals
            ever since. A more contemporary view and one of the most recent and
            widely accepted definitions is that by American psychologist and
            professor Charles R. Snyder. Snyder defines and characterises hope
            as an individual mental willpower that is directed toward the
            fulfillment of personal goals supported by the determination and
            motivation to initiate and sustain actions driving them. This is
            combined with one's self-belief in their capabilities to manage
            obstacles and setbacks. In acknowledging this description and
            definition it becomes clear there is true value in hope and what's
            more, past research studies have shown that hope is a significant
            predictor of psychological well-being, specifically in the areas of
            life satisfaction and happiness. What is Mentor Educations role? The
            Australian instance of the Hope-Barometer survey is being run by
            researchers from Mentor Education in collaboration with an
            international research network. Rest assured the analysis of the
            results will be totally anonymous and used only for scientific
            purposes. The general results may be published in scientific
            journals but no individual information will be shared. To contribute
            towards this ground breaking study simply follow this link or click
            on the below and take a few minutes out of your day to contribute
            towards what we think is really important research.
          </div>
        </div>
        <div className="row">
          <h1>Mentor Educatation Involvement</h1>
          <div
            className="flow-text"
            style={{
              lineHeight: "1.8rem",
            }}
          >
            The Australian instance of the Hope-Barometer survey is being run by
            researchers from Mentor Education in collaboration with an
            international research network. Rest assured the analysis of the
            results will be totally anonymous and used only for scientific
            purposes. The general results may be published in scientific
            journals but no individual information will be shared. To contribute
            towards this ground breaking study simply follow this link or click
            on the below and take a few minutes out of your day to contribute
            towards what we think is really important research.
          </div>
          <div className="container">
          <Video
            videoSrcURL="https://player.vimeo.com/video/371765840"
            videoSrcTitle="Hope Barometer Presentation Mentor"
          />
          </div>
          



        </div>
      </div>
    </div>
  </Layout>
);

export default About;
