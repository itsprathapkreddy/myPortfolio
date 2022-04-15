import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './Components/Header';
import HeroSec from './Components/HeroSec';
import About from './Components/About';

function App() {
	return (
		<Container fluid className='appContainer'>
			<Header />
			<HeroSec />
			<About />
		</Container>
	);
}

export default App;
