'use client';
import React from 'react';
import './Footer.css';
import { Button } from '../Button';

const contactLinks = [
	{
		label: 'LinkedIn',
		href: 'https://www.linkedin.com/in/username',
		variant: 'primary',
	},
	{
		label: 'GitHub',
		href: 'https://www.github.com/username',
		variant: 'secondary',
	},
	{
		label: 'YouTube',
		href: 'https://www.youtube.com/username',
		variant: 'danger',
	},
	{
		labe: 'Blogspot',
		href: 'https://www.blogspot.com/username',
		variant: 'warning',
	},
	{ label: 'Email', href: 'mailto:macochave@gmail.com', variant: 'danger' },
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
								label={link?.label ?? ''}
								variant={link.variant as any}
								onClick={() => {}}
							/>
						</a>
					))}
				</div>
				<p className='mt-4 text-sm text-gray-400'>
					&copy; {new Date().getFullYear()} Marco Chávez. All rights
					reserved.
				</p>
			</div>
		</div>
	);
};

export default Footer;
