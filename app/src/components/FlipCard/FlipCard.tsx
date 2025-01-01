'use client';
import React from 'react';
import './FlipCard.css';

/**
 * FlipCard component
 * @param {string} title - The title of the flip card.
 * @param {string} description - The description of the flip card.
 * @param {<string, string>[]} images - The images of the flip card in an array of name, url.
 */
export type FlipCardProps = {
	title: string;
	description: string;
	images: { name: string; url: string }[];
};

const FlipCard: React.FC<FlipCardProps> = ({ title, description, images }) => {
	return (
		<div className='flipcard'>
			<div className='flipcard__title'>
				<h1>{title}</h1>
			</div>
			<div className='flipcard__description'>
				<p>{description}</p>
			</div>
			<div className='flipcard__images'>
				{images.map(({ name, url }, index) => (
					<img key={index} src={url} alt={name} />
				))}
			</div>
		</div>
	);
};

export default FlipCard;
