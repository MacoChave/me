'use client';
import React from 'react';
import './Knowledges.css';
import { FlipCard } from '../../components/FlipCard';

export type KnowledgesProps = {
	// types...
};

const Knowledges: React.FC<KnowledgesProps> = ({}) => {
	return (
		<div className='knowledges'>
			<FlipCard
				title='Frontend'
				description="I have experience in frontend development using React and Angular as library / framework, and TailwindCSS, Material UI, Angular Material as a styling framework. Additionally, I'm proficient in HTML, CSS, and JavaScript."
				images={[
					{ name: 'HTML', url: 'https://lorempixel.com/200/200' },
					{ name: 'CSS', url: 'https://lorempixel.com/200/200' },
					{
						name: 'JavaScript',
						url: 'https://lorempixel.com/200/200',
					},
					{ name: 'React', url: 'https://lorempixel.com/200/200' },
					{ name: 'Angular', url: 'https://lorempixel.com/200/200' },
					{
						name: 'TailwindCSS',
						url: 'https://lorempixel.com/200/200',
					},
					{
						name: 'Material UI',
						url: 'https://lorempixel.com/200/200',
					},
					{
						name: 'Angular Material',
						url: 'https://lorempixel.com/200/200',
					},
				]}
			/>
			<FlipCard
				title='Backend'
				description='I have experience in backend development, creating RESTful APIs using NodeJS with Express, Python with Flask, C# with .NET Core, Go with Gorilla/Mux and PHP with Laravel.'
				images={[
					{
						name: 'NodeJS Express',
						url: 'https://lorempixel.com/200/200',
					},
					{
						name: 'Python Flask',
						url: 'https://lorempixel.com/200/200',
					},
					{
						name: 'C# NetCore',
						url: 'https://lorempixel.com/200/200',
					},
					{
						name: 'Go Gorilla/Mux',
						url: 'https://lorempixel.com/200/200',
					},
					{
						name: 'PHP Laravel',
						url: 'https://lorempixel.com/200/200',
					},
				]}
			/>
			<FlipCard
				title='Database'
				description='I have experience in database administration, working with SQLite, MySQL, SQL Server, PostgreSQL, and MongoDB.'
				images={[
					{ name: 'SQLite', url: 'https://lorempixel.com/200/200' },
					{ name: 'MySQL', url: 'https://lorempixel.com/200/200' },
					{
						name: 'SQL Server',
						url: 'https://lorempixel.com/200/200',
					},
					{
						name: 'PostgreSQL',
						url: 'https://lorempixel.com/200/200',
					},
					{ name: 'MongoDB', url: 'https://lorempixel.com/200/200' },
				]}
			/>
			<FlipCard
				title='DevOps'
				description='I have experience in DevOps with Docker, Kubernetes, Github Actions and Jenkins.'
				images={[
					{ name: 'Docker', url: 'https://lorempixel.com/200/200' },
					{
						name: 'Kubernetes',
						url: 'https://lorempixel.com/200/200',
					},
					{
						name: 'Github Actions',
						url: 'https://lorempixel.com/200/200',
					},
					{ name: 'Jenkins', url: 'https://lorempixel.com/200/200' },
				]}
			/>
			<FlipCard
				title='Mobile'
				description='I have experience in mobile development, specializing in Android using Java, as well as cross-platform development with React Native using Expo and Flutter.'
				images={[
					{
						name: 'Android',
						url: 'https://lorempixel.com/200/200',
					},
					{
						name: 'React Native',
						url: 'https://lorempixel.com/200/200',
					},
					{ name: 'Flutter', url: 'https://lorempixel.com/200/200' },
				]}
			/>
			<FlipCard
				title='UI/UX'
				description='I have experience in UI/UX design, proficient in using Figma for creating intuitive and visually appealing designs.'
				images={[
					{ name: 'Figma', url: 'https://lorempixel.com/200/200' },
				]}
			/>
		</div>
	);
};

export default Knowledges;
