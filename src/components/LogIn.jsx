import React from "react";
import { validation } from "./validation.js";
import s from "../CSS/LogIn.module.css"
import loginphoto from "../Img/loginphoto.png"

export default function LogIn(props) {
	const [userData, setUserData] = React.useState({
		username: "",
		password: "",
	});
	const [errors, setErrors] = React.useState({
		username: "",
		password: "",
	});

	function handleInputChange(e) {
		setErrors(
			validation({
				...userData,
				[e.target.name]: e.target.value,
			})
		);

		setUserData({
			...userData,
			[e.target.name]: e.target.value,
		});
	}

	function handleSubmit(e) {
		e.preventDefault();
		props.login(userData);
	}

	return (
		<div className={s.wrapper}>
        <div className={s.logo}>
            <img src={loginphoto} alt=""/>
        </div>
        <div className={`text-center mt-4 ${s.name}`}>
            Rick & Morty App
        </div>
        <form onSubmit={handleSubmit} className="p-3 mt-3">
            <div className={`${s.formfield} d-flex align-items-center`}>
                <span className="far fa-user"></span>
                <input 
					type="text"
		 			name="username"
		 			value={userData.username}
		 			onChange={handleInputChange} id="userName" placeholder="Email"/>
            </div>
            <div className={`${s.formfield} d-flex align-items-center`}>
                <span className="fas fa-key"></span>
                <input 
					type="password"
		 			name="password"
		 			value={userData.password}
		 			onChange={handleInputChange} id="pwd" placeholder="Password"/>
            </div>
			{errors.username && <p className={s.errors}>{errors.username}</p>}
			<p className={s.errors}>{errors.password && errors.password}</p>
            <button type="submit" className={`${s.btn} mt-3`}>Login</button>
        </form>
    </div>
	);
}
