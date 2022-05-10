import './heroSec.css';
import { Container, Row, Col } from 'react-bootstrap';

const HeroSec = () => {
	return (
		<Container fluid className='heroSec d-flex align-items-center scrollItem'>
			<Container>
				<Row>
					<Col>
						<div className='heroSecContent'>
							<div className='introText'>Hey there, this is</div>
							<div className='heroName'>Prathap Reddy</div>
							<div className='heroDes'>
								I build interactive websites that run across platforms & devices
							</div>

							<div>
								<a
									href='https://drive.google.com/uc?export=download&id=1DIrKHX621neidNSzhdfSbAu0LIu1UThr'
									target='_blank'
									className='downloadResume'>
									Download RESUME
								</a>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</Container>
	);
};

export default HeroSec;
