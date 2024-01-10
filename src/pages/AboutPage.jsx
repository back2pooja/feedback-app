import React from 'react'
import Card from '../components/shared/Card'
function AboutPage() {
  return (
    <Card>
        <div className="about"></div>
        <h1>About This Project</h1>
        <p>This is a React app to leave feedback for a product  or service</p>
        <p>version: 1.0.0</p>
        <p href = "/">Back To Home</p>

    </Card>
  )
}

export default AboutPage