import '../App.css';
import { Container, Row, Col } from 'react-bootstrap';
const About = () => {
	return (
		<Container className='aboutSec'>
			<Row>
				<div class='separator'>
					<h1>About Me</h1>
				</div>
			</Row>

			<br />
			<Row>
				<Col sm={6}>
					<div>
						Hello! My name is Prathap and I enjoy creating things that live on
						the internet. My interest in web development started back in 2016
						when I decided to try editing custom Wordpress themes — turns out
						hacking together a custom button taught me a lot about HTML & CSS!
					</div>
					<br />
					<div>
						Fast-forward to today, and I’ve had the privilege of working at a
						start-up, a huge corporation. My main focus these days is building
						accessible, inclusive products and digital experiences.{' '}
					</div>
					<br />
				</Col>
				<Col sm={6}>
					<div>
						Some of the technologies that I have been working recently are
					</div>
					<div className='abtList'>
						<li>React JS</li>
						<li>JavaScript ES6</li>
						<li>WordPress</li>
						<li>React Native</li>
						<li>Node JS</li>
						<li>Java</li>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default About;
