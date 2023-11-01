import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header({insideDashboard}) {
  return (
    <>
      <Navbar className="position-fixed bg-info w-100 top-0 ">
        <Container>
          <Navbar.Brand href="#home">
            <Link style={{ textDecoration: 'none', fontSize: '30px', margin: '20px', color: 'white', fontWeight: '600' }} to={'/'}><i className="fa-solid fa-shield fa-beat-fade"></i>{' '}Project Fair{' '}</Link>
          </Navbar.Brand>
        { insideDashboard &&  <div style={{textDecoration:'none'}} className='btn btn-link  ms-auto text-white fs-5 fw-bolder'>Logout <i className="fa-solid fa-arrow-right-from-bracket fa-beat-fade"></i> </div>}
        </Container>
      </Navbar>

    </>
  )
}

export default Header