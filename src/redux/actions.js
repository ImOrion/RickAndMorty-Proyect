export function agregarFavorito(personaje) {
	return { type: "ADD_FAVORITE", payload: personaje };
}

export function removerFavorito(id) {
	return { type: "REMOVE_FAVORITE", payload: id };
}

export function filtrarPersonajes(gender) {
	return { type: "FILTER", payload: gender };
}

export function ordenarPersonajes(order) {
	return {
		type: "ORDER",
		payload: order,
	};
}
