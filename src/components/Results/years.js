import React from "react";
import "materialize-css";
import { CollapsibleItem, Collapsible } from "react-materialize";
import { useStaticQuery } from "gatsby";

import Countries from "../Results/countries";


const Years = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulReport(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            country
            publishedDate(formatString: "YYYY")
          }
        }
      }
    }
  `);

  const info = data.allContentfulReport.edges;

  return (
    <div>
      <div className="container">
        <div className="section">
          <h1>Reports Written From Previous Years</h1>
            <p>Click on the year and select your desired country to read their report.</p>
          
        </div>
        <Collapsible accordian>
          <CollapsibleItem header="2020">
            {info.map((edges) => {
              if (edges.node.publishedDate === "2020")
                return (
                  <div>
                    <Countries postInfo={edges.node} />
                  </div>
                );
            })}
          </CollapsibleItem>
          <CollapsibleItem header="2019">
            {info.map((edges) => {
              if (edges.node.publishedDate < "2019")
                return (
                  <div>
                    <Countries postInfo={edges.node} />
                  </div>
                );
            })}
          </CollapsibleItem>
        </Collapsible>
      </div>
    </div>
  );
};

export default Years;
