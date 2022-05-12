import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Waypoint } from 'react-waypoint';

import { Zoom, Fade, Slide } from 'react-reveal';
import Shake from 'react-reveal/Shake';

import '../App.css';
const Experience = () => {
	const [company, setCompany] = useState('TCS');
	return (
		<Container className='expContainer scrollItem'>
			<Waypoint
				onEnter={() => console.log('Entered')}
				onLeave={() => console.log('Exited')}
			/>

			<Row>
				<Zoom top>
					<div className='separator'>
						<h2>Work Places</h2>
					</div>
				</Zoom>
			</Row>
			<Slide right>
				<Row className='expHeader' style={{ paddingBottom: '0px' }}>
					<Col
						className={company === 'TCS' ? 'expShow' : 'expHide'}
						xs={6}
						onClick={() => setCompany('TCS')}>
						TCS
					</Col>
					<Col
						className={company === 'MBP' ? 'expShow' : 'expHide'}
						xs={6}
						onClick={() => setCompany('MBP')}>
						MBP Solutions
					</Col>
				</Row>
			</Slide>
			<Slide left>
				<Row className='expData' style={{ paddingTop: '0px' }}>
					<div className={company !== 'TCS' ? 'hidden' : 'compDesContainer'}>
						<h4>
							Front End Developer
							<span style={{ color: 'var(--green)' }}>
								@Tata Consultancy Services
							</span>
						</h4>
						<div>
							<ul>
								<li style={{ display: 'list-item' }}>
									Analyzed the current system and came up with required design
									changes to suit the employee requirements.
								</li>

								<li style={{ display: 'list-item' }}>
									Designed and developed very complex and large web pages and
									modals using ReactJS, JavaScript, HTML5, and CSS3.
								</li>

								<li style={{ display: 'list-item' }}>
									Participated in code review sessions and system design
									discussions. Interacted with Product Managers to fine-tune
									user stories and with the testing team to approve functional
									specifications and test cases.
								</li>
							</ul>
						</div>
					</div>
					<div className={company !== 'MBP' ? 'hidden' : 'compDesContainer'}>
						<h4>
							WordPress administrator
							<span style={{ color: 'var(--green)' }}> @MBP Solutions</span>
						</h4>
						<ul>
							<li>Part of UI Design for the entire website.</li>

							<li>
								Created multiple designs using the Elementor page builder, by
								adding custom HTML, CSS, and JS.
							</li>

							<li>
								Created company’s presence on Google My Business. Optimized the
								company’s website for Search Engines using google analytics.
							</li>
						</ul>
					</div>
				</Row>
			</Slide>
		</Container>
	);
};
export default Experience;
