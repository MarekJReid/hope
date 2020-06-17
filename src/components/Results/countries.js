import React from 'react';
import 'materialize-css';
import {useStaticQuery, Link} from 'gatsby'



import countryCodeToFlagEmoji from 'country-code-to-flag-emoji'
import PostData from '../../templates/countries.json'

const Countries = (postInfo) => {

  const data = useStaticQuery(graphql`
  query {
    allContentfulReport(sort: { fields: publishedDate, order: DESC }) {
      edges {
        node {
          country
          publishedDate(formatString: "YYYY")
          
        }
      }
    }
  }
`)

const reportProps = postInfo.postInfo


let countryCode
let country = reportProps.country
PostData.find((item) => {
    if (country.substring(0, 1).toUpperCase() + country.substring(1).toLowerCase() == item.name)
        countryCode = item.alpha2
})

    return (
        <div>
         
         <Link to={`/results/${reportProps.country}`}
            style={{display: 'inline-block'}}>
                {countryCodeToFlagEmoji(countryCode)}
            </Link>
          
        </div>
    );
}

export default Countries;
