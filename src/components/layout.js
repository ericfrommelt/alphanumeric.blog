import React from "react"
import {Helmet} from "react-helmet"
import { StaticQuery, Link, graphql } from "gatsby"

export default({ children }) => (
  <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem`}}>
    <Helmet>
      <link rel="stylesheet" type="text/css" href="https://cloud.typography.com/7804816/6709192/css/fonts.css" />
    </Helmet>
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
            }
          }
        }
      `
    }
      render={data => (
        <Link to={`/`}>
          <h1>{data.site.siteMetadata.title}</h1>
        </Link>
      )}
    />
    {children}
  </div>
)