import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
// import projImg2 from "../assets/img/project-img2.png";
// import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Projects = () => {
  const projects = [
    {
      title: "TCS Data Analysis",
      description: "Data Analysis",
      imgUrl: projImg1,
      linkUrl: "https://github.com/Jayesh11006/Power-BI-Project"
    },
    
  ];

  const projects2 = [
    {
      title: "Game Recommendation System END to END",
      description: "Machine Learning",
      imgUrl: projImg1,
      linkUrl: "https://github.com/Jayesh11006/Hardware-Based-Game-Recommender"
    },
    
  ];

  const projects3 = [
    {
      title: "Books Management System",
      description: "Website",
      imgUrl: projImg1,
      linkUrl: "https://github.com/Jayesh11006?tab=repositories"
    },
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>I have successfully executed multiple data analysis and machine learning projects...</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Data Analysis</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Machine Learning</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Websites</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return (
                              
                                <a href={project.linkUrl} target="_blank" rel="noopener noreferrer" >
                                  <ProjectCard className="project-card" {...project} key={index}  style={{ color: 'white' }}/>
                                </a>
                             
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects2.map((project2, index) => {
                            return (
                              
                                <a href={project2.linkUrl} target="_blank" rel="noopener noreferrer">
                                  <ProjectCard className="project-card" {...project2} key={index}/>
                                  
                                </a>
                              
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {projects3.map((project3, index) => {
                            return (
                              
                                <a href={project3.linkUrl} target="_blank" rel="noopener noreferrer">
                                  <ProjectCard className="project-card" {...project3} key={index}  sm={6} md={4}/>
                                </a>
                             
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  );
};
