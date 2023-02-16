import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { agregarFavorito, removerFavorito } from "../redux/actions.js";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardChar(props) {
	const [isFav, setIsFav] = useState(false);

	useEffect(() => {
		props.myFavorites.forEach(fav => {
			if (fav.id === props.id) {
				setIsFav(true);
			}
		});
	}, [props.myFavorites]);

	function handleFavorite() {
		if (isFav) {
			setIsFav(false);
			props.removeFav(props.id);
		} else {
			setIsFav(true);
			props.addFav(props);
		}
	}

	return (
		<Card 
		key={props.id}
		style={{ width: '18rem' }}>
	  <Button onClick={() => props.onClose(props.id)}>X</Button>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
		Specie: {props.species}<br/>
		Gender: {props.gender}
        </Card.Text>
		<Link to={`/detail/${props.id}`}>
        <Button variant="primary">Go To Details</Button>
		</Link>
		{isFav ? (
		 			<Button variant="outline-danger" onClick={handleFavorite}>❤️</Button>
				) : (
					<Button variant="outline-danger" onClick={handleFavorite}>🤍</Button>
		 		)}
		
      </Card.Body>
    </Card>
	);
}



function mapStateToProps(state) {
	return {
		myFavorites: state.myFavorites,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		addFav: personaje => dispatch(agregarFavorito(personaje)),
		removeFav: id => dispatch(removerFavorito(id)),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(CardChar);
