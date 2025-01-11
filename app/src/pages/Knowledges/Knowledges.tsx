'use client';
import React from 'react';
import './Knowledges.css';
import { FlipCard } from '../../components/FlipCard';

export type KnowledgesProps = {
	// types...
};

const Knowledges: React.FC<KnowledgesProps> = ({}) => {
	return (
		<div className='flex flex-wrap place-content-around gap-8'>
			<FlipCard
				title='Frontend'
				description="I have experience in frontend development using React and Angular as library / framework, and TailwindCSS, Material UI, Angular Material as a styling framework. Additionally, I'm proficient in HTML, CSS, and JavaScript."
				images={[
					{
						name: 'HTML',
						url: 'https://img.icons8.com/color/48/000000/html-5--v1.png',
					},
					{
						name: 'CSS',
						url: 'https://img.icons8.com/color/48/000000/css3.png',
					},
					{
						name: 'JavaScript',
						url: 'https://img.icons8.com/color/48/000000/javascript--v1.png',
					},
					{
						name: 'React',
						url: 'https://img.icons8.com/ultraviolet/40/000000/react--v1.png',
					},
					{
						name: 'Angular',
						url: 'https://img.icons8.com/color/48/000000/angularjs.png',
					},
					{
						name: 'TailwindCSS',
						url: 'https://img.icons8.com/color/48/000000/tailwind_css.png',
					},
					{
						name: 'Material UI',
						url: 'https://img.icons8.com/?size=100&id=gFw7X5Tbl3ss&format=png&color=000000',
					},
					{
						name: 'Angular Material',
						url: 'https://img.icons8.com/color/48/000000/angularjs.png',
					},
				]}
			/>
			<FlipCard
				title='Backend'
				description='I have experience in backend development, creating RESTful APIs using NodeJS with Express, Python with Flask, C# with .NET Core, Go with Gorilla/Mux and PHP with Laravel.'
				images={[
					{
						name: 'NodeJS Express',
						url: 'https://img.icons8.com/fluency/48/000000/node-js.png',
					},
					{
						name: 'Python Flask',
						url: 'https://img.icons8.com/color/48/000000/python--v1.png',
					},
					{
						name: 'C# NetCore',
						url: 'https://img.icons8.com/color/48/000000/net-framework.png',
					},
					{
						name: 'Go Gorilla/Mux',
						url: 'https://img.icons8.com/?size=100&id=44442&format=png&color=000000',
					},
					{
						name: 'PHP Laravel',
						url: 'https://img.icons8.com/?size=100&id=lRjcvhvtR81o&format=png&color=000000',
					},
				]}
			/>
			<FlipCard
				title='Database'
				description='I have experience in database administration, working with SQLite, MySQL, SQL Server, PostgreSQL, and MongoDB.'
				images={[
					{
						name: 'SQLite',
						url: 'https://img.icons8.com/?size=100&id=VMRAbKfEzssG&format=png&color=000000',
					},
					{
						name: 'MySQL',
						url: 'https://img.icons8.com/?size=100&id=rgPSE6nAB766&format=png&color=000000',
					},
					{
						name: 'SQL Server',
						url: 'https://img.icons8.com/?size=100&id=laYYF3dV0Iew&format=png&color=000000',
					},
					{
						name: 'PostgreSQL',
						url: 'https://img.icons8.com/?size=100&id=38561&format=png&color=000000',
					},
					{
						name: 'MongoDB',
						url: 'https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000',
					},
					{
						name: 'Firebase',
						url: 'https://img.icons8.com/?size=100&id=62452&format=png&color=000000',
					},
				]}
			/>
			<FlipCard
				title='DevOps'
				description='I have experience in DevOps with Docker, Kubernetes, Github Actions and Jenkins.'
				images={[
					{
						name: 'Docker',
						url: 'https://img.icons8.com/?size=100&id=cdYUlRaag9G9&format=png&color=000000',
					},
					{
						name: 'Kubernetes',
						url: 'https://img.icons8.com/?size=100&id=cvzmaEA4kC0o&format=png&color=000000',
					},
					{
						name: 'Github Actions',
						url: 'https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=000000',
					},
					{
						name: 'Jenkins',
						url: 'https://img.icons8.com/color/48/000000/jenkins.png',
					},
				]}
			/>
			<FlipCard
				title='Mobile'
				description='I have experience in mobile development, specializing in Android using Java, as well as cross-platform development with React Native using Expo and Flutter.'
				images={[
					{
						name: 'Android',
						url: 'https://img.icons8.com/fluency/48/000000/android-os.png',
					},
					{
						name: 'React Native',
						url: 'https://img.icons8.com/ultraviolet/40/000000/react--v1.png',
					},
					{
						name: 'Flutter',
						url: 'https://img.icons8.com/?size=100&id=7I3BjCqe9rjG&format=png&color=000000',
					},
				]}
			/>
			<FlipCard
				title='UI/UX'
				description='I have experience in UI/UX design, proficient in using Figma for creating intuitive and visually appealing designs.'
				images={[
					{
						name: 'Figma',
						url: 'https://img.icons8.com/color/48/000000/figma--v1.png',
					},
				]}
			/>
		</div>
	);
};

export default Knowledges;
