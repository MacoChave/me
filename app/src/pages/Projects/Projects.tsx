'use client';
import React from 'react';
import './Projects.css';
import { FlipCard } from '../../components/FlipCard';

export type ProjectsProps = {
	// types...
};

const Projects: React.FC<ProjectsProps> = ({}) => {
	return (
		<div className='projects'>
			<FlipCard
				title='Project 1'
				description='Description of project 1'
				images={[
					{ name: 'Image 1', url: 'https://lorempixel.com/200/200' },
					{ name: 'Image 2', url: 'https://lorempixel.com/200/200' },
					{ name: 'Image 3', url: 'https://lorempixel.com/200/200' },
				]}
			/>
		</div>
	);
};

export default Projects;
