'use client';
import React from 'react';
import './AboutMe.css';

export type AboutMeProps = {
	// types...
};

const AboutMe: React.FC<AboutMeProps> = ({}) => {
	return (
		<div className='aboutme__container'>
			<p>
				Soy estudiante con cierre en Ingeniería en Ciencias y Sistemas
			</p>
			<p>
				Soy de Guatemala y me gusta diseñar interfaces gráficas,
				desarrollar aplicaciones, jugar videojuegos y explorar nuevas
				tecnologías y lenguajes
			</p>
			<p>
				Soy un entusiasta de la enseñanza, orientación a soluciones y
				ayuda a compañeros / colegas que lo necesiten
			</p>
			<p>
				Trato de compartir mis conocimientos que he adquirido en mi
				canal de YouTube y/o publicar posts en mi Blog para que así, mis
				conocimientos lleguen a más personas con acceso a internet
			</p>
		</div>
	);
};

export default AboutMe;
