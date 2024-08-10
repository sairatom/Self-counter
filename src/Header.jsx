import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
  

function Header() {
  return (
    <div>
        <MDBNavbar light bgColor='dark'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#' className='text-light'>
            <img
              src='https://cdn.dribbble.com/users/221753/screenshots/1214929/dribbl_counter.gif'
              height='30'
              alt=''
              loading='lazy'
            />
            COUNTER APP
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
      {/* <h1>Header</h1> */}
    </div>
  )
}

export default Header