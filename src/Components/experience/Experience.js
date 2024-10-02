import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Zoom } from 'react-reveal';
import '../../App.css';
import './experience.css';
import { experienceData } from './experienceData';

export default function Experience() {
    const [company, setCompany] = useState('TCS');
    return (
        <Container className="expContainer scrollItem">
            <Container>
                <Row>
                    <Zoom top>
                        <div className="separator">
                            <h2>Work Places</h2>
                        </div>
                    </Zoom>
                </Row>

                <div className={'experienceItemContainer'}>
                    {experienceData.map((item) => (
                        <div
                            className="experienceItem  gap-3 rounded-md bg-secondary/5 dark:bg-[#ffffff0a] dark:backdrop-blur-2xl"
                            key={item.companyName}
                        >
                            <div className={'topSection'}>
                                <div>
                                    <div>{item.companyName}</div>
                                    <div>{item.time}</div>
                                </div>

                                <div className={'companyLogo'}>
                                    <img
                                        src={item.companyLogoUrl}
                                        alt={'My Icon'}
                                        width={'120'}
                                        height={'120'}
                                        style={{ backgroundColor: 'white', borderRadius: '50%' }}
                                    />
                                </div>
                            </div>

                            <hr />
                            <div>Role: {item.briefSummary}</div>
                            <ul style={{ listStyleType: 'disc', textAlign: 'justify' }}>
                                {item.details.map((detail) => (
                                    <li>{detail}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </Container>
        </Container>
    );
}
