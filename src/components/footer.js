import React from 'react'
import {Link, useStaticQuery} from 'gatsby'
export default function Footer() {

  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
          author
        description
      }
    }
  }   
  `)
    return (
       <footer className="page-footer teal">
           <div className="container">
               <div className="row">
                   
                   <div className="col l6 s12">
                       <h5 class="white-text">Footer Content</h5>
                <p class="grey-text text-lighten-4">{data.site.siteMetadata.description}</p>
                <p>{data.site.siteMetadata.author}</p>
                   </div>
                   <div className="col l4 offset-12 sm12">
                        <ul>
                            <li>
                                <Link to="/"
                                className="grey-text text-lighten-4"
                                > Home </Link>
                            </li>
                            <li>
                                <Link to="/about/"
                                className="grey-text text-lighten-4"
                                > About </Link>
                            </li>
                            <li>
                                <Link to="/survey/"
                                className="grey-text text-lighten-4"
                                > Survey </Link>
                            </li>
                            <li>
                                <Link to="/results/"
                                className="grey-text text-lighten-4"
                                > Results </Link>
                            </li>
                            <li>
                                <Link to="/contact/"
                                className="grey-text text-lighten-4"
                                > Contact Us </Link>
                            </li>
                        </ul>
                   </div>

               </div>

               </div>
       </footer>
    )
}
