import './contact.css';
import { Container, Row, Col } from 'react-bootstrap';
const Contact = () => {
	return (
		<Container className='contactCont'>
			<h1>Get In Touch</h1>
			<h4>Leave an email, I will get back to you at the earliest.</h4>
			<h2 className='aboutEmail'>contact@itsprathapkreddy.com</h2>
		</Container>
	);
};

export default Contact;
