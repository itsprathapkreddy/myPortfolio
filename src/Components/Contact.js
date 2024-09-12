import "./contact.css";
import { Container, Row, Col } from "react-bootstrap";
const Contact = () => {
    return (
        <Container fluid className="contactCont scrollItem">
            <Container>
                <div className="separator">
                    <h2>Get In Touch</h2>
                </div>
                <div style={{ padding: "30px" }}>
                    <h4>Leave an email, I will get back to you at the earliest.</h4>
                    <h2 className="aboutEmail">kprathapreddy1997@gmail.com</h2>
                </div>
            </Container>
        </Container>
    );
};

export default Contact;
