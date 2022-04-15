import '../App.css';
import { Container, Row, Col } from 'react-bootstrap';
const HeroSec = () => {
	return (
		<Container className='heroSec d-flex align-items-center '>
			<Row>
				<Col>
					<h4 style={{ color: 'var(--green)' }}>Hey there, this is</h4>
					<h1>Prathap Reddy</h1>
					<h3 style={{ opacity: '0.8', marginTop: '20px' }}>
						I build interactive websites that run across platforms & devices
					</h3>
					<h5 className='heroSecDes'>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book.
					</h5>
					<div className='downloadResume'>Download RESUME</div>
				</Col>
			</Row>
		</Container>
	);
};

export default HeroSec;
