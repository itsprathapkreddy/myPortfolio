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
import Helmet from 'react-helmet';
function App() {
	const [loadTimer, setLoadTimer] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setLoadTimer(false);
		}, 3000);
	}, []);
	return (
		<Container fluid className='appContainer'>
			<Helmet>
				<title>Prathap Reddy</title>
				<meta property='og:title' content='Prathap Reddy' />
				<meta
					property='og:image'
					content='http://drive.google.com/uc?export=view&id=1r_-NwxYfRYZ0G4-tquOv_ggL240j5xxH'
				/>
				<meta
					property='og:description'
					content='A portfolio website to showcase all my work'
				/>
				<meta property='og:url' content='https://itsprathapkreddy.com' />
				<meta name='twitter:card' content='summary_large_image' />
				<meta
					name='description'
					content='A portfolio website to showcase all my work'
				/>
			</Helmet>
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
