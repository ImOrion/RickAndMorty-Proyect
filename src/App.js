import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar.jsx";
import Cards from "./components/Cards.jsx";
import About from "./components/About.jsx";
import Detail from "./components/Detail.jsx";
import LogIn from "./components/LogIn";
import Favorites from "./components/Favorites.jsx";
import background from "./Img/background.jpg"
function App() {
	const [characters, setCharacters] = useState([]);
	const [access, setAccess] = useState(false);

	const username = "mateou771@gmail.com";
	const password = "cambiela0";

	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		!access && navigate("/");
	}, [access]);

	function login(userData) {
		if (userData.username === username && userData.password === password) {
			setAccess(true);
			navigate("/home");
		}
	}

	function onSearch(character) {
		let acces = true;
		characters.map((personaje) =>{
		  let Character = parseInt(character);
		  if (personaje.id === Character) {
			window.alert("ya existe este personaje");
			document.querySelector("#input").value = "";
			return (acces = false);
		  }
		});
	
		if (acces) {
		  fetch(`https://rickandmortyapi.com/api/character/${character}`)
			.then((response) => response.json())
			.then((data) => {
			  if (data.name) {
				setCharacters([data, ...characters]);
				//console.log(characters)
				document.querySelector("#input").value = "";
			  } else {
				window.alert("No hay personajes con ese ID");
				document.querySelector("#input").value = "";
			  }
			});
		}
	  }

	function onClose(id) {
		setCharacters(oldCharacters =>
			oldCharacters.filter(char => char.id !== id)
		);
	}

	return (
		<div className="App">
			{location.pathname === "/" ? null : <NavBar onSearch={onSearch} />}
			<Routes>
				<Route path="/" element={<LogIn login={login} />}></Route>
				<Route
					path="/home"
					element={<Cards onClose={onClose} characters={characters} />}
				/>
				<Route path="/favorites" element={<Favorites />} />
				<Route path="/about" element={<About />} />
				<Route path="/detail/:detailId" element={<Detail />} />
			</Routes>
		</div>
	);
}

export default App;
