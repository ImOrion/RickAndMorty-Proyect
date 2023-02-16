import CardChar from "./CardChar";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Cards(props) {
	const { characters, onClose } = props;

	return (
		<Row xs={1} sm={2} md={3} lg={4} xl={5} xxl={5} className="g-4">
			{characters.map(character => (
				<Col>
				<CardChar
					name={character.name}
					gender={character.gender}
					species={character.species}
					image={character.image}
					key={character.id}
					id={character.id}
					onClose={onClose}
				/>
			</Col>
			))}
		</Row>
	);
}
