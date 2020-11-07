import React, { useEffect, useState, Fragment } from 'react';

/** Creamos el Componente como Función y usaremos los Hooks de React para manejar su ciclo*/

export const FetchGithubNew = () => {
	const [ state, setState ] = useState({ name: '', location: '' });

	/**Usamos el hook de useState para manejar el estado del componente */

	/**Extraemos las propiedades del state para manejarlas individualmente en el renderizado */

	const { name, location } = state;

	/** Usamos el useEffect que tiene el mismo efecto de componentDidAmount teniendo en cuenta los comentarios hechos en el archivo anterior, para extraer la información correctamente, y poder mostrarla debidamente */

	useEffect(() => {
		fetch('https://api.github.com/users/workshopsjsmvd').then((resp) => resp.json()).then((data) => {
			setState(data);
		});
	}, []);

	/** Renderizamos la información dentro de un Fragment */
	return (
		<Fragment>
			<h1>Prueba SOAINT</h1>
			<hr />
			<h1 key="name">{`Nombre: ${name}`}</h1>
			<p>,</p>
			<h2 key="location">{`País: ${location}`}</h2>
		</Fragment>
	);
};
