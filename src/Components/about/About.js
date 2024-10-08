import '../../App.css';
import { Col, Container, Row } from 'react-bootstrap';
import { Slide, Zoom } from 'react-reveal';

const About = () => {
    return (
        <Container fluid className="aboutSec scrollItem">
            <Container>
                <Row>
                    <Zoom top>
                        <div className="separator">
                            <h2>About Me</h2>
                        </div>
                    </Zoom>
                </Row>

                <br />
                <Row>
                    <Col sm={6}>
                        <Slide left>
                            <div>
                                Hello! My name is Prathap and I enjoy creating things that live on the internet. My interest in web
                                development started back in 2016 when I decided to try editing custom Wordpress themes — turns out hacking
                                together a custom button taught me a lot about HTML & CSS!
                            </div>
                        </Slide>

                        <br />
                    </Col>
                    <Col sm={6}>
                        <Slide right>
                            <div>
                                Fast-forward to today, and I’ve had the privilege of working at a start-up, a huge corporation. My main
                                focus these days is building accessible, inclusive products and digital experiences.{' '}
                            </div>
                        </Slide>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default About;
