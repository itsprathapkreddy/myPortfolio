import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './Components/Header';
import HeroSec from './Components/HeroSec';
import About from './Components/About';
import Contact from './Components/Contact';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
function App() {
	return (
		<Container fluid className='appContainer'>
			<Header />
			<HeroSec />
			<About />
			<Experience />
			<Projects />
			<Contact />
			<Footer />
		</Container>
	);
}

export default App;
