'use client';
import React from 'react';
import './SectionLayout.css';

export type SectionLayoutProps = {
	title: string;
	children: React.ReactNode;
};

const SectionLayout: React.FC<SectionLayoutProps> = ({ title, children }) => {
	return (
		<section className='py-8 px-4 bg-white shadow-sm rounded-lg my-6'>
			<div className='container mx-auto'>
				<h2 className='text-2xl font-bold mb-4 text-gray-900'>
					{title}
				</h2>
				<div>{children}</div>
			</div>
		</section>
	);
};

export default SectionLayout;
