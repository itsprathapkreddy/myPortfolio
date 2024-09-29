import { Container, Row, Col, Button } from 'react-bootstrap';
import { SiGithub } from 'react-icons/si';
import { HiExternalLink } from 'react-icons/hi';
import '../App.css';

import { Fade, Slide, Zoom } from 'react-reveal';
import Shake from 'react-reveal/Shake';
import Demo from '../assets/fincal.png';
import typeTestImg from '../assets/typetest.png';
import expmngr from '../assets/expmngr.png';
const Projects = () => {
    return (
        <Container className="projCont scrollItem">
            <Zoom top>
                <div className="separator">
                    <h2 className="projContHead">Projects</h2>
                </div>
            </Zoom>
            <Slide right>
                <Row className="indProj">
                    <Col sm={6} style={{ padding: '0px' }}>
                        <img src={Demo} className="ProjectImage" />
                    </Col>
                    <Col sm={6} className="indProjDes">
                        <h2 style={{ padding: '10px', marginBottom: '20px' }}>
                            Fincal
                        </h2>
                        <h5>
                            A comprehensive financial calculator app, which is
                            built with vanilla JavaScript, HTML, and CSS using
                            the bootstrap framework. This Web app is converted
                            into a PWA using pwabuilder.
                        </h5>
                        <Row style={{ padding: '10px 0px' }}>
                            <Col xs={6}>
                                <Button variant="primary" className="projBtn">
                                    <a
                                        href="https://github.com/itsprathapkreddy/fincal"
                                        target="_blank"
                                        style={{
                                            color: 'inherit',
                                            textDecoration: 'none'
                                        }}
                                    >
                                        <SiGithub
                                            style={{ fontSize: '24px' }}
                                        />
                                        <span>&nbsp;&nbsp;&nbsp;Github</span>
                                    </a>
                                </Button>
                            </Col>
                            <Col xs={6}>
                                <Button variant="success" className="projBtn">
                                    <a
                                        href="https://financial-calculators-site.vercel.app/pages/home.html"
                                        target="_blank"
                                        style={{
                                            color: 'inherit',
                                            textDecoration: 'none'
                                        }}
                                    >
                                        <HiExternalLink
                                            style={{ fontSize: '24px' }}
                                        />
                                        <span>&nbsp;&nbsp;&nbsp;Live</span>
                                    </a>
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Slide>
            <Slide left>
                <Row className="indProj medQuRevCol">
                    <Col sm={6} className="indProjDes">
                        <h2 style={{ padding: '10px', marginBottom: '20px' }}>
                            Typing Test
                        </h2>
                        <h5>
                            The faster you type, the faster you communicate with
                            others. With typing test, you can check your live
                            speed i.e., Words per Min, accuracy, and get a
                            detailed report on which words you typed wrong.
                        </h5>
                        <Row style={{ padding: '10px 0px' }}>
                            <Col xs={6}>
                                <Button variant="primary" className="projBtn">
                                    <a
                                        href="https://github.com/itsprathapkreddy/typingtest"
                                        target="_blank"
                                        style={{
                                            color: 'inherit',
                                            textDecoration: 'none'
                                        }}
                                    >
                                        <SiGithub
                                            style={{ fontSize: '24px' }}
                                        />
                                        <span>&nbsp;&nbsp;&nbsp;Github</span>
                                    </a>
                                </Button>
                            </Col>
                            <Col xs={6}>
                                <Button variant="success" className="projBtn">
                                    <a
                                        href="https://typingtestpro.vercel.app/"
                                        target="_blank"
                                        style={{
                                            color: 'inherit',
                                            textDecoration: 'none'
                                        }}
                                    >
                                        <HiExternalLink
                                            style={{ fontSize: '24px' }}
                                        />
                                        <span>&nbsp;&nbsp;&nbsp;Live</span>
                                    </a>
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={6} style={{ padding: '0px' }}>
                        <img src={typeTestImg} className="ProjectImage" />
                    </Col>
                </Row>
            </Slide>
            {/* <Slide right>
                <Row className="indProj">
                    <Col sm={6} style={{ padding: "0px" }}>
                        <img src={expmngr} className="ProjectImage" />
                    </Col>
                    <Col sm={6} className="indProjDes">
                        <h2 style={{ padding: "10px", marginBottom: "20px" }}>Expense Manager</h2>
                        <h5>
                            Managing everyday expenses is the first step to mastering your financial stability. This Expense manager lets you add your everyday expenses and
                            categorize them and sort them by price every month. It also comes with an interactive dashboard of your monthly and yearly expenses.
                        </h5>
                        <Row style={{ padding: "10px 0px" }}>
                            <Col xs={6}>
                                <Button variant="primary" className="projBtn">
                                    <a href="https://github.com/itsprathapkreddy/ExpenseManager" target="_blank" style={{ color: "inherit", textDecoration: "none" }}>
                                        <SiGithub style={{ fontSize: "24px" }} />
                                        <span>&nbsp;&nbsp;&nbsp;Github</span>
                                    </a>
                                </Button>
                            </Col>
                            <Col xs={6}>
                                <Button variant="success" className="projBtn">
                                    <a href="https://expensemanager-993c2.web.app/dashboard" target="_blank" style={{ color: "inherit", textDecoration: "none" }}>
                                        <HiExternalLink style={{ fontSize: "24px" }} />
                                        <span>&nbsp;&nbsp;&nbsp;Live</span>
                                    </a>
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Slide> */}
        </Container>
    );
};
export default Projects;
