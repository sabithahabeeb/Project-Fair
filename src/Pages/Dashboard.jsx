import React from 'react'
import Header from '../Components/Header'
import { Col, Row } from 'react-bootstrap'
import Profile from '../Components/Profile'
import MyProjects from '../Components/MyProjects'

function Dashboard() {
  return (
    <>
      <Header insideDashboard/>
      <Row style={{marginTop:'100px'}} className='container-fluid'>
        <Col sm={12} md={8} >
          <h1>Welcome <span className='text-warning'>User</span></h1>
          {/* my project section */}
        <MyProjects/>
        </Col>
        <Col sm={12} md={4}>
          {/* my profile section */}
          <Profile/>
        </Col>

      </Row>
    </>
  )
}

export default Dashboard