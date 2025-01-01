// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import { MainLayout } from './layouts/MainLayout';
import { SectionLayout } from './layouts/SectionLayout';
import { AboutMe } from './pages/AboutMe';
import { Knowledges } from './pages/Knowledges';
import { Projects } from './pages/Projects';

function App() {
	return (
		<div className='min-h-screen flex flex-col bg-gray-50 text-gray-900'>
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
