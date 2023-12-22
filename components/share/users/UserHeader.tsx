import React from 'react';
import { Container, Row, Nav, Navbar, NavDropdown, Col, Stack, Button } from 'react-bootstrap';
import styles from './UserHeader.module.scss';

function UserHeader() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Row className='w-100'>
          <Col className={styles.wrapHeader}>
            <div className={'toggle-header ' + styles.toggleHeader}>
              <Navbar.Brand href="#home" className={styles.logo}>DaiDV</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </div>
            <div className={'side-bar ' + styles.wrapSideBar }>
              <div className={'side-bar ' + styles.sideBar }>
                <Stack direction="horizontal" gap={3} className='justify-content-end '>
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className={styles.navBarItem}>
                      <Nav.Link href="#home">Home</Nav.Link>
                      <Nav.Link href="#link">About Me</Nav.Link>
                      <Nav.Link href="#link">Services</Nav.Link>
                      <Nav.Link href="#link">Portfolio</Nav.Link>
                      <NavDropdown title="Blog" id="blog-drop-down">
                        <NavDropdown.Item href="#action/3.1">
                          Blog
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                          Blog detail
                        </NavDropdown.Item>
                      </NavDropdown>
                      <Nav.Link href="#link">Contact</Nav.Link>
                      <Nav.Link href="#link">
                        <Button variant="warning">Hire Me</Button>
                      </Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Stack>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default UserHeader;