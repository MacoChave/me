'use client';
import React from 'react';
// Import profile_image.jpg from src/assets
import profileImage from '../../assets/profile_image.jpg';
import './Header.css';

export type HeaderProps = {
	// types...
};

const Header: React.FC<HeaderProps> = ({}) => {
	return (
		<div className='w-full h-dvh flex flex-col place-content-center place-items-center gap-8 bg-header-light dark:bg-header-dark text-text-dark dark:text-text-dark'>
			<div>
				<img
					className='h-36 rounded-full mx-auto'
					src={profileImage}
					alt='Profile image'
				/>
				<p>Marco Chávez</p>
			</div>
			<div className='flex flex-row gap-2 place-content-center place-items-start'>
				<p>¡Hello! I knowledge</p>
				<div className='h-8 overflow-hidden'>
					<ul className='pt-8 vcarrousel__container text-start'>
						<li className='vcarrousel__item'>Frontend</li>
						<li className='vcarrousel__item'>Backend</li>
						<li className='vcarrousel__item'>
							Database administrator
						</li>
						<li className='vcarrousel__item'>DevOps</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Header;
