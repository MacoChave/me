'use client';
import React from 'react';
import './MainLayout.css';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export type MainLayoutProps = {
	children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
	return (
		<div className='flex flex-col bg-gray-50 text-gray-800'>
			<Header />
			<main className='flex-grow'>{children}</main>
			<Footer />
		</div>
	);
};

export default MainLayout;
