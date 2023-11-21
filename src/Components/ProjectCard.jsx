import React, { useState } from 'react'
import { Card, Col, Modal, Row } from 'react-bootstrap'
import prjctpic from '../Assests/imag.png'
import { BASE_URL } from '../Services/baseurl';

function ProjectCard({ project }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>

      {project && <Card className='shabow mb-5 btn ' onClick={handleShow}>
        <Card.Img variant="top" src={project ? `${BASE_URL}/uploads/${project.projectImage }`: prjctpic} />
        <Card.Body>
          <Card.Title>{project.title}</Card.Title>

        </Card.Body>
      </Card>}

      <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6}>
              <img style={{ height: '200px' }} className='img-fluid' src={project ? `${BASE_URL}/uploads/${project.projectImage }`: prjctpic} alt="project image" />
            </Col>
            <Col md={6}>
              <h2 className='fw-bolder text-warning'>{project.title}</h2>
              <p>Project Overview :<span className='fw-bolder text-success'>{project.overview}</span> </p>
              <p>Language Used : <span className='fw-bolder text-danger'>{project.languages}</span></p>

            </Col>
          </Row>
          <div className="mt-3">
            <a href={project.github} target='_blank' className='me-5 btn'><i class="fa-brands fa-github fa-2x"></i></a>

            <a href={project.website} target='_blank' className='me-5 btn'><i class="fa-solid fa-link fa-2x"></i></a>
          </div>
        </Modal.Body>

      </Modal>
    </>
  )
}

export default ProjectCard