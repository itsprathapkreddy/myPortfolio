import '../App.css';
import { Container, Row, Col } from 'react-bootstrap';
const HeroSec = () => {
	return (
		<Container className='heroSec d-flex align-items-center '>
			<Row>
				<Col>
					<div style={{ color: 'var(--green)', fontSize: '20px' }}>
						Hey there, this is
					</div>
					<div
						style={{
							fontSize: '46px',
							fontWeight: '600',
							letterSpacing: '0.05em',
						}}>
						Prathap Reddy
					</div>
					<div style={{ opacity: '0.8', marginTop: '20px', fontSize: '24px' }}>
						I build interactive websites that run across platforms & devices
					</div>
					{/* <h5 className='heroSecDes'>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book.
					</h5> */}
					<a
						href='https://drive.google.com/uc?export=download&id=1DIrKHX621neidNSzhdfSbAu0LIu1UThr'
						target='_blank'
						style={{
							color: 'inherit',
							textDecoration: 'none',
							fontSize: '18px',
						}}
						className='downloadResume'>
						Download RESUME
					</a>
				</Col>
			</Row>
		</Container>
	);
};

export default HeroSec;
