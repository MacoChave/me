'use client';
import React from 'react';
import './Button.css';

type Variant = 'primary' | 'secondary' | 'danger' | 'warning' | 'success';

export type ButtonProps = {
	label: string;
	onClick: () => void;
	type?: 'button' | 'submit' | 'reset';
	className?: string;
	variant?: Variant;
	disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
	label,
	onClick,
	type = 'button',
	className = '',
	variant = 'primary',
	disabled = false,
}) => {
	const baseStyle =
		'px-6 py-2-medium rounded-lg focus:outline-none transition duration-300';
	const variantStyle: Record<Variant, string> = {
		primary: 'bg-blue-600 text-white hover:bg-blue-700',
		secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
		danger: 'bg-red-600 text-white hover:bg-red-700',
		warning: 'bg-yellow-600 text-white hover:bg-yellow-700',
		success: 'bg-green-600 text-white hover:bg-green-700',
	};

	return (
		<button
			className={`${baseStyle} ${variantStyle[variant]} ${className}`}
			disabled={disabled}
			onClick={onClick}
			type={type}>
			{label}
		</button>
	);
};

export default Button;
