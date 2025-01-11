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
		<div className='w-80 bg-lightGray rounded-lg shadow-lg overflow-hidden p-8 group'>
			<div className='relative flip-card'>
				<div className='flex flex-wrap place-content-center place-items-center gap-8 flip-card__front'>
					<h2 className='text-xl font-bold text-primary'>{title}</h2>
					<p className='mt-2 text-gray-600'>{description}</p>
				</div>
				<div className='absolute top-0 w-fit h-fit flex flex-wrap place-content-center place-items-center gap-8 flip-card__back'>
					<h3 className='text-lg font-semibold text-darkGray'>
						{title}
					</h3>
					<div className='grid grid-cols-3 gap-4'>
						{images.map(({ name, url }, index) => (
							<div
								className='relative group tooltip__container'
								key={index}>
								<img
									src={url}
									alt={`Image ${name}`}
									className='h-12 object-cover rounded-md'
								/>
								<span className='tooltip__text absolute inset bg-primary text-lightGray rounded-lg p-2 z-10 opacity-0 invisible transition-opacity duration-500 group-hover:opacity-100'>
									{name}
								</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default FlipCard;
