import './heroSec.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Fade, Slide } from 'react-reveal';
import Pulse from 'react-reveal/Pulse';
const HeroSec = () => {
	return (
		<Container fluid className='heroSec d-flex align-items-center scrollItem'>
			<Container>
				<Row>
					<Col>
						<div className='heroSecContent'>
							<Fade left>
								<div className='introText'>Hey there, this is</div>
							</Fade>
							<Fade right big cascade>
								<div className='heroName'>Prathap Reddy</div>
							</Fade>
							<Slide left>
								<div className='heroDes'>
									I build interactive websites that run across platforms &
									devices
								</div>
							</Slide>
							<Pulse>
								<div>
									<a
										href='https://drive.google.com/uc?export=download&id=1DIrKHX621neidNSzhdfSbAu0LIu1UThr'
										target='_blank'
										className='downloadResume'>
										Download RESUME
									</a>
								</div>
							</Pulse>
						</div>
					</Col>
				</Row>
			</Container>
		</Container>
	);
};

export default HeroSec;
