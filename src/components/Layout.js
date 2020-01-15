// import {useStaticQuery, graphql} from 'gatsby'
import React from 'react'
import './Layout.css'

/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Layout = props => {
  /*const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)*/

  return (
    <main>
      {props.children}
    </main>
  )
}

export {Layout}
