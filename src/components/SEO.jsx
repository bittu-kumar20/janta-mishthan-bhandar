import React from 'react'
import { Helmet } from 'react-helmet-async'

const SEO = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title ? `${title} | Janta Mishthan Bhandar` : 'Janta Mishthan Bhandar | Premium Indian Sweets'}</title>
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      <meta property="og:title" content={title ? `${title} | Janta Mishthan Bhandar` : 'Janta Mishthan Bhandar | Premium Indian Sweets'} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:type" content="website" />
    </Helmet>
  )
}

export default SEO
