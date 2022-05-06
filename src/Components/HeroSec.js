import '../App.css';
import { Container, Row, Col } from 'react-bootstrap';

const HeroSec = () => {
	return (
		<Container fluid className='heroSec d-flex align-items-center scrollItem'>
			<Container>
				<Row>
					<Col>
						<div style={{ color: 'var(--green)', fontSize: '20px' }}>
							Hey there, this is
						</div>
						<div
							style={{
								fontSize: '42px',
								fontWeight: '600',
								letterSpacing: '0.05em',
							}}>
							Prathap Reddy
						</div>
						<div style={{ marginTop: '20px', fontSize: '24px' }}>
							I build interactive websites that run across platforms & devices
						</div>

						<a
							href='https://drive.google.com/uc?export=download&id=1DIrKHX621neidNSzhdfSbAu0LIu1UThr'
							target='_blank'
							style={{
								textDecoration: 'none',
								fontSize: '18px',
							}}
							className='downloadResume'>
							Download RESUME
						</a>
					</Col>
				</Row>
			</Container>
		</Container>
	);
};

export default HeroSec;
