'use client';
import React from 'react';
import './AboutMe.css';

export type AboutMeProps = {
	// types...
};

const AboutMe: React.FC<AboutMeProps> = ({}) => {
	return (
		<div className='aboutme__container'>
			<p>
				I'm a student nearing graduation in System and Computer Science
				Engineering from Guatemala
			</p>
			<p>
				I enjoy designing graphical interfaes, developing applications,
				playing video games and learning new technologies in my free
				time
			</p>
			<p>
				I am passionate about teaching and sharing my knowledge with
				others to help them learn and grow in the field of technology
				and programming
			</p>
			<p>
				I strive to share my knowledge and experience with others to
				help them learn and grow in the field of technology and
				programming in my YouTube channel and blog posts
			</p>
		</div>
	);
};

export default AboutMe;
