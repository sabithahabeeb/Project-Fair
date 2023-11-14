import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import titleimage from '../Assests/image2.avif'
import ProjectCard from '../Components/ProjectCard'
import { Link } from 'react-router-dom'


function Home() {
  const [loggedin,setLoggedin] = useState(false)
  useEffect(()=>{
    if(sessionStorage.getItem){
      setLoggedin(true)

    }else{
      setLoggedin(false)
    }

  },[])
  return (
    <>
    {/* Landing Section */}
    <div style={{width:'100%',height:'100vh',backgroundColor:'#90ee90'}} className="container-fluid rounded">
    <Row className='align-items-center p-5'>
      <Col sm={12} md={6}>
        <h1 style={{fontSize:'80px'}} className='fw-bolder text-light mb-5'><i className="fa-solid fa-shield fa-beat-fade "></i>Project Fair</h1>
        <p>One stop Destination For all Software Development Projects. Where User can add and manage their projects Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci aliquam,</p>
       {loggedin? <Link to={'/login'} className='btn btn-warning'>Start to Explore<i className='fa-solid fa-right-long fa-beat ms-2'></i></Link>:
        <Link to={'/dashboard'} className='btn btn-warning'>Manage Youre Project<i className='fa-solid fa-right-long fa-beat ms-2'></i></Link>}

      </Col>
      <Col sm={12} md={6}>
        <img height={'450px'} style={{marginTop:'100px' ,borderRadius:'50%'}} src={titleimage} className='w-75 ' alt="no image" />
      </Col>

    </Row>
    </div>
    {/* all projects */}
    <div className="all-projects mt-5">
      <h1 className="text-center mb-5">Explore Our Projects</h1>
      <marquee scrollAmount={10}>
        <div className='d-flex justify-content-between'>
          <div style={{width:'500px'}}>
            <ProjectCard/>
          </div>
        </div>
      </marquee>
      <div className="text-center mb-5"><Link to={'/projects'}>View More Projects</Link></div>
    </div>
    </>
  )
}

export default Home