import './App.css';
import { Grid } from '@mui/material';
// import { motion } from 'framer-motion';

function App() {
	return (
		<Grid container spacing={2}>
			<Grid item xs={12}>
				<Grid className='mainPage'>
					<Grid className='logoHeader'>
						<svg width='50' height='50' viewBox='0 0 200 200' fill='none'>
							<path
								d='M100 25L164.952 62.5V137.5L100 175L35.0481 137.5V62.5L100 25Z'
								stroke='var(--green)'
								strokeWidth='5'
							/>
							<path
								d='M102.094 105.234H83.8594V97.875H102.094C105.625 97.875 108.484 97.3125 110.672 96.1875C112.859 95.0625 114.453 93.5 115.453 91.5C116.484 89.5 117 87.2188 117 84.6562C117 82.3125 116.484 80.1094 115.453 78.0469C114.453 75.9844 112.859 74.3281 110.672 73.0781C108.484 71.7969 105.625 71.1562 102.094 71.1562H85.9688V132H76.9219V63.75H102.094C107.25 63.75 111.609 64.6406 115.172 66.4219C118.734 68.2031 121.438 70.6719 123.281 73.8281C125.125 76.9531 126.047 80.5312 126.047 84.5625C126.047 88.9375 125.125 92.6719 123.281 95.7656C121.438 98.8594 118.734 101.219 115.172 102.844C111.609 104.438 107.25 105.234 102.094 105.234Z'
								fill='var(--green)'
							/>
						</svg>
					</Grid>
					<Grid className='heroSection'>
						<Grid style={{ color: 'var(--green)' }}>Hi, This is </Grid>
						<Grid className='heroName'>Prathap Reddy K</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default App;
