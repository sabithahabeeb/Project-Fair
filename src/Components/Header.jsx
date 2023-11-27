import React, { useContext } from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { tokenAuthorisationContext } from '../Context/TokenAuth'

function Header({insideDashboard}) {
  const { isAuthorized, setIsAuthorized } = useContext(tokenAuthorisationContext)
  const navigate = useNavigate()
  const handleLogout = ()=>{
    // remove all existing  user detail from browser
    sessionStorage.removeItem("existingUser")
    sessionStorage.removeItem("token")
    setIsAuthorized(false)
    // navigate to landing page
    navigate('/')

  }
  return (
    <>
      <Navbar className="position-fixed bg-info w-100 top-0 ">
        <Container>
          <Navbar.Brand href="#home">
            <Link style={{ textDecoration: 'none', fontSize: '30px', margin: '20px', color: 'white', fontWeight: '600' }} to={'/'}><i className="fa-solid fa-shield fa-beat-fade"></i>{' '}Project Fair{' '}</Link>
          </Navbar.Brand>
        { insideDashboard &&  <button onClick={handleLogout} style={{textDecoration:'none'}} className='btn btn-link  ms-auto text-white fs-5 fw-bolder'>Logout <i className="fa-solid fa-arrow-right-from-bracket fa-beat-fade"></i> </button>}
        </Container>
      </Navbar>

    </>
  )
}

export default Header