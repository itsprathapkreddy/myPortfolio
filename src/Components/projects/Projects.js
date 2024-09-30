import { Button, Col, Container, Row } from 'react-bootstrap';
import { SiGithub } from 'react-icons/si';
import { HiExternalLink } from 'react-icons/hi';
import '../../App.css';
import { Slide, Zoom } from 'react-reveal';
import { projectsData } from './projectsData';

const Projects = () => {
    return (
        <Container className="projCont scrollItem">
            <Zoom top>
                <div className="separator">
                    <h2 className="projContHead">Projects</h2>
                </div>
            </Zoom>

            {projectsData.map((item, index) => (
                <div>
                    {item.show && (
                        <Slide right={index % 2 === 0} left={index % 2 !== 0}>
                            <Row className="indProj">
                                <Col sm={6} style={{ padding: '0px' }}>
                                    <img src={item.thumbNail} className="ProjectImage" />
                                </Col>
                                <Col sm={6} className="indProjDes">
                                    <h2 style={{ padding: '10px', marginBottom: '20px' }}>{item.projectName}</h2>
                                    <h5>{item.briefSummary}</h5>
                                    <Row style={{ padding: '10px 0px' }}>
                                        <Col xs={6}>
                                            <Button variant="primary" className="projBtn">
                                                <a
                                                    href={item.githubLink}
                                                    target="_blank"
                                                    style={{ color: 'inherit', textDecoration: 'none' }}
                                                >
                                                    <SiGithub style={{ fontSize: '24px' }} />
                                                    <span>&nbsp;&nbsp;&nbsp;Github</span>
                                                </a>
                                            </Button>
                                        </Col>
                                        <Col xs={6}>
                                            <Button variant="success" className="projBtn">
                                                <a
                                                    href={item.liveLink}
                                                    target="_blank"
                                                    style={{ color: 'inherit', textDecoration: 'none' }}
                                                >
                                                    <HiExternalLink style={{ fontSize: '24px' }} />
                                                    <span>&nbsp;&nbsp;&nbsp;Live</span>
                                                </a>
                                            </Button>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Slide>
                    )}
                </div>
            ))}
        </Container>
    );
};
export default Projects;
