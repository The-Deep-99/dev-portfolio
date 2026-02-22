import React, { useState, useEffect } from "react";
import { greetings, socialLinks } from "../portfolio";
import Headroom from "headroom.js";
import { UncontrolledCollapse, NavbarBrand, Navbar, NavItem, NavLink, Nav, Container, Row, Col, Button } from "reactstrap";

const Navigation = () => {
  const [collapseClasses, setCollapseClasses] = useState("");
  const onExiting = () => setCollapseClasses("collapsing-out");
  const onExited = () => setCollapseClasses("");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    // Close mobile menu after clicking
    const navbar = document.getElementById('navbar_global') as HTMLButtonElement;
    if (navbar) navbar.click();
  };

  useEffect(() => {
    let headroom = new Headroom(document.getElementById("navbar-main")!);
    headroom.init();
  });

  return (
    <>
      <header className="header-global">
        <Navbar className="navbar-main navbar-transparent navbar-light headroom" expand="lg" id="navbar-main">
          <Container>
            <NavbarBrand href="/" className="mr-lg-5">
              <h2 className="text-white" id="nav-title">
                {greetings.name}
              </h2>
            </NavbarBrand>
            <button className="navbar-toggler" aria-label="navbar_toggle" id="navbar_global">
              <span className="navbar-toggler-icon" />
            </button>
            <UncontrolledCollapse
              toggler="#navbar_global"
              navbar
              className={collapseClasses}
              onExiting={onExiting}
              onExited={onExited}
            >
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <h3 className="text-black" id="nav-title">
                      {greetings.name}
                    </h3>
                  </Col>
                  <Col className="collapse-close" xs="6">
                    <button className="navbar-toggler" id="navbar_global">
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className="align-items-lg-center ml-lg-auto" navbar>
                {/* Quick Navigation Links */}
                <NavItem>
                  <NavLink
                    className="nav-link"
                    onClick={() => scrollToSection('skills')}
                    style={{ cursor: 'pointer' }}
                  >
                    <i className="ni ni-bulb-61 mr-2" />
                    Skills
                  </NavLink>
                </NavItem>
                
                <NavItem>
                  <NavLink
                    className="nav-link"
                    onClick={() => scrollToSection('projects')}
                    style={{ cursor: 'pointer' }}
                  >
                    <i className="ni ni-laptop mr-2" />
                    Projects
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink
                    className="nav-link"
                    onClick={() => scrollToSection('experience')}
                    style={{ cursor: 'pointer' }}
                  >
                    <i className="ni ni-briefcase-24 mr-2" />
                    Experience
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink
                    className="nav-link"
                    onClick={() => scrollToSection('contact')}
                    style={{ cursor: 'pointer' }}
                  >
                    <i className="ni ni-email-83 mr-2" />
                    Contact
                  </NavLink>
                </NavItem>

                {/* Resume Download Button */}
                <NavItem className="d-none d-lg-block">
                  <Button
                    color="primary"
                    href={greetings.resumeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-3"
                  >
                    <i className="ni ni-download mr-2" />
                    Resume
                  </Button>
                </NavItem>

                {/* Mobile Resume Button */}
                <NavItem className="d-lg-none">
                  <NavLink
                    className="nav-link"
                    href={greetings.resumeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="ni ni-download mr-2" />
                    Download Resume
                  </NavLink>
                </NavItem>

                {/* Divider */}
                <NavItem className="d-none d-lg-block">
                  <div className="nav-divider" />
                </NavItem>

                {/* Essential Social Links */}
                {socialLinks.github && (
                  <NavItem>
                    <NavLink
                      rel="noopener"
                      aria-label="Github"
                      className="nav-link-icon"
                      href={socialLinks.github}
                      target="_blank"
                    >
                      <i className="fa fa-github" />
                      <span className="nav-link-inner--text d-lg-none ml-2">Github</span>
                    </NavLink>
                  </NavItem>
                )}
                
                {socialLinks.linkedin && (
                  <NavItem>
                    <NavLink
                      rel="noopener"
                      aria-label="Linkedin"
                      className="nav-link-icon"
                      href={socialLinks.linkedin}
                      target="_blank"
                    >
                      <i className="fa fa-linkedin" />
                      <span className="nav-link-inner--text d-lg-none ml-2">LinkedIn</span>
                    </NavLink>
                  </NavItem>
                )}
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Navigation;
