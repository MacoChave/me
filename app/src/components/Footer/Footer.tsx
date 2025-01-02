'use client';
import React from 'react';
import './Footer.css';
import { Button } from '../Button';

const contactLinks = [
	{
		label: 'LinkedIn',
		href: 'https://www.linkedin.com/in/macochave',
		variant: 'primary',
		icon: 'fab fa-linkedin-in',
	},
	{
		label: 'GitHub',
		href: 'https://www.github.com/macochave',
		variant: 'secondary',
		icon: 'fab fa-github',
	},
	{
		label: 'YouTube',
		href: 'https://www.youtube.com/@macochave',
		variant: 'danger',
		icon: 'fab fa-youtube',
	},
	{
		label: 'Blogspot',
		href: 'https://macochave.blogspot.com',
		variant: 'warning',
		icon: 'fab fa-blogger-b',
	},
	// {
	// 	label: 'Email',
	// 	href: 'mailto:macochave@gmail.com',
	// 	variant: 'danger',
	// 	icon: 'fa-solid fa-inbox',
	// },
];

export type FooterProps = {
	// types...
};

const Footer: React.FC<FooterProps> = ({}) => {
	return (
		<div className='bg-gray-800 text-white py-6'>
			<div className='container mx-auto text-center'>
				<p className='text-lg mb-4'>Connect with me:</p>
				<div className='flex justify-center space-x-4'>
					{contactLinks.map((link, index) => (
						<a
							key={index}
							href={link.href}
							target='_blank'
							rel='noopener noreferrer'>
							<Button
								label={link.label}
								startElement={<i className={`${link.icon}`} />}
								isFab={true}
							/>
						</a>
					))}
				</div>
				<p className='mt-4 text-sm text-gray-400'>
					&copy; 2025 Marco Chávez. All rights reserved.
				</p>
			</div>
		</div>
	);
};

export default Footer;
