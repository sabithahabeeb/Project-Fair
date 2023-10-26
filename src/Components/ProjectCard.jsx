import React, { useState } from 'react'
import { Card, Col, Modal, Row } from 'react-bootstrap'
import prjctpic from '../Assests/image1.jpeg'

function ProjectCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>

<Card className='shabow mb-5 btn ' onClick={handleShow}>
      <Card.Img variant="top" src={prjctpic} />
      <Card.Body>
        <Card.Title>Project Title</Card.Title>
       
      </Card.Body>
    </Card>

    <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6}>
            <img style={{height:'200px'}} className='img-fluid' src={prjctpic} alt="project image" />
            </Col>
            <Col md={6}>
            <h2>Project Title</h2>
            <p>Project Overview : Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, iusto similique sed aut reiciendis officiis quas, deserunt et expedita eaque asperiores animi harum nam voluptas magnam alias nisi commodi. Sed!</p>
            <p>Language Used : <span className='fw-bolder'>HTML,Css,React</span></p>
          
            </Col>
          </Row>
          <div className="mt-3">
              <a href="https://github.com/sabithahabeeb/Media-player" target='_blank' className='me-5 btn'><i class="fa-brands fa-github fa-2x"></i></a>

              <a href="https://mediya-player-sabi.netlify.app/" target='_blank' className='me-5 btn'><i class="fa-solid fa-link fa-2x"></i></a>
            </div>
        </Modal.Body>
       
      </Modal>
    </>
  )
}

export default ProjectCard