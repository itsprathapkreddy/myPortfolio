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
import Loader from './Components/Loader';
import { useEffect, useState } from 'react';
function App() {
	const [loadTimer, setLoadTimer] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setLoadTimer(false);
		}, 3000);
	}, []);
	return (
		<Container fluid className='appContainer'>
			{loadTimer ? (
				<Loader />
			) : (
				<div className='scrollContainer'>
					<Header />
					<HeroSec />
					<About />
					<Experience />
					<Projects />

					<Contact />
					<Footer />
				</div>
			)}
		</Container>
	);
}

export default App;
