'use client';
import React from 'react';
import './Projects.css';
import { FlipCard } from '../../components/FlipCard';

export type ProjectsProps = {
	// types...
};

const Projects: React.FC<ProjectsProps> = ({}) => {
	return (
		<div className='flex flex-wrap place-content-around gap-8'>
			{/* EVENTIFY - Es un software como servicio para crear eventos en base a plantillas precargadas generando listas de invitados con sus enlaces y botones de confirmar asistencia */}
			<FlipCard
				title='Invitaciones a eventos'
				description='EVENTIFY is a software as a service platform designed to streamline event creation using preloaded templates. It enables users to generate guest lists with links and RSVP buttons.'
				images={[
					{
						name: 'Next JS',
						url: 'https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png',
					},
					{
						name: 'Postgres',
						url: 'https://img.icons8.com/?size=100&id=38561&format=png&color=000000',
					},
					{
						name: 'Vercel',
						url: 'https://midu.dev/images/tags/vercel.png',
					},
				]}
			/>
			{/* SAGIH - Sistema para la gestión de hotelería que permite el seguimiento de check-in, check-out, llevar la cuenta de los clientes y generar reportes y bitácora de los movimientos de pago, reservas y de más */}
			{/* MEUT - Sistema para seguimiento y aprobación del proceso de tesis para la facultad de ciencias jurídicas y sociales de la universidad de san carlos de guatemala*/}
			<FlipCard
				title='Módulo de Estaciones de la Unidad de Tesis'
				description='MEUT is a system designed to manage, monitor and aprove the thesis process for the Faculty of Legal and Social Sciences at the University of San Carlos of Guatemala. This system ensures efficient tracking, enhances communication and streamlines the stages of the graduation process.'
				images={[
					{
						name: 'React',
						url: 'https://img.icons8.com/ultraviolet/40/000000/react--v1.png',
					},
					{
						name: 'Node JS Express',
						url: 'https://img.icons8.com/fluency/48/000000/node-js.png',
					},
					{
						name: 'MySQL',
						url: 'https://img.icons8.com/?size=100&id=rgPSE6nAB766&format=png&color=000000',
					},
					{
						name: 'AWS',
						url: 'https://img.icons8.com/?size=100&id=33039&format=png&color=000000',
					},
				]}
			/>
			<FlipCard
				title='Sistema de Administración y Gestión de la Industria Hotelera'
				description='SAGIH is a platform designed to manage hotel operations, including tracking check-ins and check-outs, managing customer accounts, generating reports, keeping a log of payment transactions, reservations, and more.'
				images={[
					{
						name: 'React',
						url: 'https://img.icons8.com/ultraviolet/40/000000/react--v1.png',
					},
					{
						name: 'Node JS Express',
						url: 'https://img.icons8.com/fluency/48/000000/node-js.png',
					},
					{
						name: 'Postgres',
						url: 'https://img.icons8.com/?size=100&id=38561&format=png&color=000000',
					},
					{
						name: 'AWS',
						url: 'https://img.icons8.com/?size=100&id=33039&format=png&color=000000',
					},
				]}
			/>
			{/* HealthCheck es una aplicación web que desarrollé con el fin de ayudar a mis padres con el fin de dar seguimiento al control de las mediciones de glucosa, presión arterial y peso. */}
			<FlipCard
				title='HealthCheck'
				description='HealthCheck is a web application I developed to help my parents monitor glucose levels, blood pressure, and weight. The platform allows users to track their health metrics and generate reports.'
				images={[
					{
						name: 'Angular 8',
						url: 'https://img.icons8.com/color/48/000000/angularjs.png',
					},
					{
						name: 'Firebase',
						url: 'https://img.icons8.com/?size=100&id=62452&format=png&color=000000',
					},
				]}
			/>
			{/* DESICION- Aplicación en Android para tomar una desición en base a un listado de opciones precargadas o personalizadas para el momento */}
			<FlipCard
				title='Desicion APP'
				description='Desicion is an Android application designed to help users make quick and effective decisions. It allows chosing from a list of preloaded options or creating custom options tailored to the moment.'
				images={[
					{
						name: 'Android',
						url: 'https://img.icons8.com/fluency/48/000000/android-os.png',
					},
				]}
			/>
		</div>
	);
};

export default Projects;
