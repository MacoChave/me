// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useEffect, useState } from 'react';
import './App.css';
import { MainLayout } from './layouts/MainLayout';
import { SectionLayout } from './layouts/SectionLayout';
import { AboutMe } from './pages/AboutMe';
import { Knowledges } from './pages/Knowledges';
import { Projects } from './pages/Projects';
import { Button } from './components/Button';

function App() {
	const [darkMode, setDarkMode] = useState(false);

	const handleMode = () => {
		setDarkMode(!darkMode);
	};

	useEffect(() => {
		document.documentElement.classList.toggle('dark', darkMode);
	}, [darkMode]);

	return (
		<div className='min-h-screen flex flex-col bg-footer-light dark:bg-footer-dark'>
			<Button
				label={darkMode ? 'Light' : 'Dark'}
				className='fixed top-4 right-4'
				isFab={true}
				variant='primary'
				startElement={darkMode ? '☀️' : '🌙'}
				onClick={handleMode}
			/>
			<MainLayout>
				<SectionLayout title='About me'>
					<AboutMe />
				</SectionLayout>
				<SectionLayout title='Knowledges'>
					<Knowledges />
				</SectionLayout>
				<SectionLayout title='Projects'>
					<Projects />
				</SectionLayout>
			</MainLayout>
		</div>
	);
}

export default App;
