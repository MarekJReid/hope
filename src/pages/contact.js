import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import { Button } from 'react-materialize'

const Contact = () => {

  
  return (

  <Layout>
    <SEO title="About" />
    <div className="section">
      <div className="container">
        <div className="row">
          <h1>Contact Us</h1>
        </div>
        <div className="row">
          <h3>Please Enter Your Details and Enquiry Below</h3>
          <form className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <input id="first_name" type="text" class="validate" />
                <label for="first_name">First Name</label>
              </div>
              <div className="input-field col s6">
                <input id="last_name" type="text" class="validate" />
                <label for="last_name">Last Name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input type="email" id="email" class="validate" />
                <label for="email">Email Address</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <textarea id="textarea1" className="materialize-textarea"></textarea>
                <label for="textarea1">Please Enter Your Enquiry Here</label>
              </div>
            </div>
          </form>
          <Button
          style= {{
            float: 'right'
          }}
          > Submit </Button>
        </div>
      </div>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)
};

export default Contact;
