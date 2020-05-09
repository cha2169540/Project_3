import React, { useContext, useState } from 'react';
import { Navbar, Nav, NavDropdown, Button, Modal } from 'react-bootstrap';
import { Link, useHistory, useParams } from 'react-router-dom';
import API from '../../utils/API';
import { UserContext } from '../../utils/Context';
// import Modal from '../Modal/index';


export default function NavBar() {

  // const [show, setShow] = useState(true);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  // return (
  //   <>
  //     <Modal show={show} onHide={handleClose}>
  //       <Modal.Header closeButton>
  //         <Modal.Title>Delete Account</Modal.Title>
  //       </Modal.Header>
  //       <Modal.Body></Modal.Body>
  //       <Modal.Footer>
  //         <Button variant="secondary" onClick={handleClose}>
  //           Close
  //           </Button>
  //         <Button variant="primary" onClick={handleClose}>
  //           Save Changes
  //           </Button>
  //       </Modal.Footer>
  //     </Modal>
  //   </>
  // );

  const { user, currentLang } = useContext(UserContext);

  // const { lang } = useParams();
  console.log("navbar", currentLang);

  // const language = lang || currentLang

  const history = useHistory();

  const [modal, setModal] = useState(false);

  const deleteAccount = () => {
    API.deleteUser(user.id)
      .then(() => {
        console.log('Successfully deleted!');
        history.push("/");
      })

  }

  return (
    <>
      {modal &&
        <Modal>
          <h2>Are you sure you want to delete your account?</h2>
          <Button variant="danger" onClick={deleteAccount}>Yes, please!</Button>
          <Button variant="success" onClick={() => setModal(false)}>ABORT ABORT</Button>
        </Modal>
      }
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand className="text">
          <Link to={"/DashboardCards/" + currentLang}>
            <img src="https://raw.githubusercontent.com/J-Navajo/Updated-Portfolio/master/assets/images/slanguagelogoFinal-02.png"
              width="120"
              height="40"
              alt="Slanguage logo"
            />
          </Link>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Link to={"/DashboardCards/" + currentLang}>My Dashboard</Link>
          <NavDropdown title="Account Settings" id="basic-nav-dropdown">
            <NavDropdown.Item onClick={() => setModal(true)}>Delete account</NavDropdown.Item>
          </NavDropdown>
          <Link to="/About">About</Link>
          <Link to="/">Sign Out</Link>
        </Nav>
      </Navbar>
    </>
  )
}