import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Regional Solutions Representative</title>
        <meta property="og:title" content="Regional Solutions Representative" />
      </Helmet>
    </div>
  )
}

export default Home
