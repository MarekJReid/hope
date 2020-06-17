import React from "react";
import { Link } from "gatsby";

import countryCodeToFlagEmoji from 'country-code-to-flag-emoji'

import PostData from './countries.json'
export const ResultLink = (reportLink) => {

    //Deconstruct Props
    const reportProps = reportLink.reportLink

    // //Sort out country code
    // let countryCode
    // let country = reportProps.country
    // PostData.find((item) => {
    //     if (country.substring(0, 1).toUpperCase() + country.substring(1).toLowerCase() == item.name)
    //         countryCode = item.alpha2
    // })

    return (
        <div>hello
            {/* <Link to={`/results/${reportProps.country}`}
            >
                {countryCodeToFlagEmoji(countryCode)}
            </Link> */}
        </div>
    );
};

export default ResultLink;