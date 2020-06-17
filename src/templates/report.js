import React from 'react';
import Layout from '../components/layout';
import {graphql} from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export const query = graphql `
query  {
  contentfulReport {
    title
    publishedDate(formatString: "MMMM Do, YYYY")
    body {
      json
    }
  }
} 
`

const Blog = (props) => {
    return (
        <div>
            <Layout>
               <div className="container">

               <h1>
              {props.data.contentfulReport.title}
            </h1>
            <p>
              {props.data.contentfulReport.publishedDate}
            </p>
            {documentToReactComponents(props.data.contentfulReport.body.json)}
               </div>
           
            </Layout>
        </div>
    );
}

export default Blog;
