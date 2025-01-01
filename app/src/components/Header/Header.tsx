'use client';
import React from 'react';
import './Header.css';

export type HeaderProps = {
	// types...
};

const Header: React.FC<HeaderProps> = ({}) => {
	return (
		<div className='header'>
			<div>
				<img src='https://lorempixum/com' alt='Photography' />
				<p>Marco Chávez</p>
			</div>
			<div className='flex flex-row gap-2 place-content-center place-items-start'>
				<p>¡Hello! I'm a</p>
				<div className='h-8 overflow-hidden'>
					<ul className='pt-8 vcarrousel__container text-start'>
						<li className='vcarrousel__item'>Frontend developer</li>
						<li className='vcarrousel__item'>Backend developer</li>
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
