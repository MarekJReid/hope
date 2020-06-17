import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Layout from "../components/layout";

const BlogPosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `);

  const info = data.allContentfulBlogPost.edges;

  console.log(info);
  return (
    <div>
      <Layout>
        <div className="container">
          <ol>
            {info.map((edges) => {
              return (
                <li
                style={{
                  listStyleType: 'none'
                }}>
                  <Link to={`/blog/${edges.node.slug}`}
                  style={{backgroundColor: 'lightskyblue', display: 'block', padding: '2rem', color: 'white'}}
                  >
                    <h2>{edges.node.title}</h2>
                    <p>{edges.node.publishedDate}</p>
                  </Link>
                </li>
              );
            })}
          </ol>
        </div>
      </Layout>
    </div>
  );
};

export default BlogPosts;
