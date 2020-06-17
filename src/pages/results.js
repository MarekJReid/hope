import React from "react";
import { gatsby, useStaticQuery, graphql, Link } from "gatsby";
import Layout from "../components/layout";
import ResultLink from '../templates/resultlink'

import Years from '../components/Results/years'
export const BlogPosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulReport(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            country
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  const info = data.allContentfulReport.edges;
 
  return (
    <div>
      
      <Layout>
        <div className="container">
        <Years />
          
        </div>
      </Layout>
    </div>
  );
};

export default BlogPosts;
