import React from "react"
import {Helmet} from "react-helmet"

export default({ children }) => (
  <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem`}}>
    <Helmet>
      <link rel="stylesheet" type="text/css" href="https://cloud.typography.com/7804816/6709192/css/fonts.css" />
    </Helmet>
    <h1>Alphanumeric</h1>
    {children}
  </div>
)