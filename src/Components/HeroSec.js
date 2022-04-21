import '../App.css';
import { Container, Row, Col } from 'react-bootstrap';
const HeroSec = () => {
	return (
		<Container className='heroSec d-flex align-items-center '>
			<Row>
				<Col>
					<h2 style={{ color: 'var(--green)' }}>Hey there, this is</h2>
					<h1>Prathap Reddy</h1>
					<h2 style={{ opacity: '0.8', marginTop: '20px' }}>
						I build interactive websites that run across platforms & devices
					</h2>
					{/* <h5 className='heroSecDes'>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book.
					</h5> */}
					<a
						href='https://drive.google.com/uc?export=download&id=1DIrKHX621neidNSzhdfSbAu0LIu1UThr'
						target='_blank'
						style={{ color: 'inherit', textDecoration: 'none' }}
						className='downloadResume'>
						Download RESUME
					</a>
				</Col>
			</Row>
		</Container>
	);
};

export default HeroSec;
