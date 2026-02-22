import React, { useState } from "react";
import { projects } from "../portfolio";
import { Container, Row } from "reactstrap";
import ProjectsCard from "../components/ProjectsCard";
import ProjectFilter from "../components/ProjectFilter";
import Fade from "react-reveal/Fade";

const Projects = () => {
  const [filteredProjects, setFilteredProjects] = useState(projects);

  return (
    projects && (
      <Fade bottom duration={2000}>
        <section id="projects" className="section section-lg">
          <Container>
            <div className="d-flex p-4">
              <div>
                <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                  <i className="ni ni-laptop text-info" />
                </div>
              </div>
              <div className="pl-4">
                <h4 className="display-3 text-info">Projects</h4>
              </div>
            </div>
            
            <ProjectFilter 
              projects={projects} 
              onFilteredProjects={setFilteredProjects} 
            />
            
            <Row className="row-grid align-items-center">
              {filteredProjects.map((data, i) => {
                return <ProjectsCard key={i} {...data} />;
              })}
            </Row>
          </Container>
        </section>
      </Fade>
    )
  );
};

export default Projects;
