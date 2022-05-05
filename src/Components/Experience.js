import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';
const Experience = () => {
	const [company, setCompany] = useState('TCS');
	return (
		<Container className='expContainer scrollItem'>
			<Row>
				<div className='separator'>
					<h2>Work Places</h2>
				</div>
			</Row>
			<Row className='expHeader'>
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
			<Row className='expData'>
				<div className={company !== 'TCS' ? 'hidden' : ''}>
					<h4>
						Front End Developer
						<span style={{ color: 'var(--green)' }}>
							@Tata Consultancy Services
						</span>
					</h4>
					<div>
						<ul>
							<li>
								Analyzed the current system and came up with required design
								changes to suit the employee requirements.
							</li>
							<br />
							<li>
								Designed and developed very complex and large web pages and
								modals using ReactJS, JavaScript, HTML5, and CSS3.
							</li>
							<br />
							<li>
								Participated in code review sessions and system design
								discussions. Interacted with Product Managers to fine-tune user
								stories and with the testing team to approve functional
								specifications and test cases.
							</li>
							<br />
						</ul>
					</div>
				</div>
				<div className={company !== 'MBP' ? 'hidden' : ''}>
					<h4>
						WordPress administrator
						<span style={{ color: 'var(--green)' }}> @MBP Solutions</span>
					</h4>
					<ul>
						<li>Part of UI Design for the entire website.</li>
						<br />
						<li>
							Created multiple designs using the Elementor page builder, by
							adding custom HTML, CSS, and JS.
						</li>
						<br />
						<li>
							Created company’s presence on Google My Business. Optimized the
							company’s website for Search Engines using google analytics.
						</li>
					</ul>
				</div>
			</Row>
		</Container>
	);
};
export default Experience;
