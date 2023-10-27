import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
    <Navbar  className="position-fixed bg-info w-100 top-0 ">
        <Container>
          <Navbar.Brand href="#home">
          <Link style={{textDecoration:'none',fontSize:'30px',margin:'20px',color:'white',fontWeight:'600'}} to={'/'}><i className="fa-solid fa-shield fa-beat-fade"></i>{' '}Project Fair{' '}</Link>
            
          </Navbar.Brand>
        </Container>
      </Navbar>

    </>
  )
}

export default Header