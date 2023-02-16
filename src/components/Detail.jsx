import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Detail() {
	const { detailId } = useParams();
	const navigate = useNavigate();
	const [character, setCharacter] = useState({});

	useEffect(() => {
		fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
			.then(response => response.json())
			.then(char => {
				if (char.name) {
					setCharacter(char);
				} else {
					window.alert("No hay personajes con ese ID");
				}
			})
			.catch(err => {
				window.alert("Error", err);
			});

			console.log(character)
		return setCharacter({});
	}, [detailId]);
	return (
		<div>
			<div>
				<button onClick={() => navigate("/home")}>Volver</button>
			</div>
			<h1>NOMBRE: {character.name}</h1>
			<h2>STATUS: {character.status}</h2>
			<h2>ESPECIE: {character.species}</h2>
			<h2>GENERO: {character.gender}</h2>
			<h2>ORIGIN: {character.origin?.name}</h2>
			<img src={character.image} alt={character.name} />
		</div>
	);
}
