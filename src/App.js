import './App.css';
import { Grid } from '@mui/material';

function App() {
	return (
		<div className='mainPage'>
			<div className='header'>Lorem Ipsum</div>
			<Grid container className='heroSection'>
				<Grid item md={6} xs={12} className='heroImg'>
					Hai Everyone
				</Grid>
				<Grid item md={6} xs={12} className='heroText'>
					Bye EveryOne
				</Grid>
			</Grid>
		</div>
	);
}

export default App;
