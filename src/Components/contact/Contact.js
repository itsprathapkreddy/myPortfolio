import './contact.css';
import { Container } from 'react-bootstrap';
import sendEmailToEmailJs from './contactUtils';

const Contact = () => {
    const onClickSendMail = () => {
        sendEmailToEmailJs({
            message: 'This is a test message123',
            fromEmail: 'testemail@gmail.com',
            fromName: 'TestName123'
        });
    };

    return (
        <Container fluid className="contactCont scrollItem">
            <Container>
                <div className="separator">
                    <h2>Get In Touch</h2>
                </div>
                <div style={{ padding: '30px' }}>
                    <h4>Leave an email, I will get back to you at the earliest.</h4>
                    <h2 className="aboutEmail">kprathapreddy1997@gmail.com</h2>
                </div>

                <div>
                    <button onClick={onClickSendMail}> SEND EMAIL</button>
                </div>
            </Container>
        </Container>
    );
};

export default Contact;
