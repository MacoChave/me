'use client';
import React from 'react';
import './SectionLayout.css';

export type SectionLayoutProps = {
	title: string;
	children: React.ReactNode;
};

const SectionLayout: React.FC<SectionLayoutProps> = ({ title, children }) => {
	return (
		<section className='m-8 p-8 shadow-sm rounded-lg my-6 bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark'>
			<div className='container mx-auto'>
				<h2 className='text-2xl font-bold mb-4'>{title}</h2>
				<div>{children}</div>
			</div>
		</section>
	);
};

export default SectionLayout;
