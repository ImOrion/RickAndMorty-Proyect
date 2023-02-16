import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function SearchBar(props) {
	const navigate = useNavigate();
 	const [character, setCharacter] = useState("");

  function handleChange(e) {
    setCharacter(e.target.value);
  }

  const onClick = (event) => {
    event.preventDefault();
	console.log(event)
  };
  return (
    <Form onSubmit={() => {
		onClick();
		props.onSearch(character);
		props.show();
	  }} className="d-flex">
      <Form.Control
        type="number"
        value={character}
        onChange={handleChange}
        placeholder="Busca un personaje por id"
        aria-describedby="basic-addon2"
        className="me-2"
        aria-label="Search"
      />
      <Button
        onClick={() => {
          props.onSearch(character);
          props.show();
        }}
        id="button-addon2"
        variant="outline-success"
      >
        <FontAwesomeIcon icon={faPlus} />
      </Button>
    </Form>
  );
}
