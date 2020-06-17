import React from "react"
const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div className="video center-align">
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      height='450rem'
      width='80%'
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </div>
)
export default Video