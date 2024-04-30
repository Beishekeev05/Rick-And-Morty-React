import React, { useEffect, useState } from "react";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import MainHeader from "./components/main-header/MainHeader";
import Users from "./components/pages/Users";
import Rickandmorty from "./components/pages/Rickandmorty";

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [userName, setUserName] = useState({});
	const [selectedPage, setSelectedPage] = useState("home");
	console.log(userName);
	useEffect(() => {
		const isLogged = localStorage.getItem("auth") || false;
		setIsLoggedIn(isLogged);
	}, []);

	const loginHandler = (email, password) => {
		setUserName({ email: email, password: password });
		setIsLoggedIn(true);
		localStorage.setItem("auth", true);
	};

	const logoutHandler = () => {
		localStorage.removeItem("auth"); // Change from "isLogged" to "auth"
		setIsLoggedIn(false);
	};

	const onPageChange = (page) => {
		setSelectedPage(page);
	};
	const onPageChangeRick = (page) => {
		setSelectedPage(page);
	};

	return (
		<React.Fragment>
			<MainHeader
				onPageChangeRick={onPageChangeRick}
				isLoggedIn={isLoggedIn}
				onPageChange={onPageChange}
			/>
			<main>
				{!isLoggedIn && <Login onLogin={loginHandler} />}
				{isLoggedIn && selectedPage === "home" && (
					<Home onLogout={logoutHandler} />
				)}
				{selectedPage === "users" && <Users />}
				{selectedPage === "RickAndMorty" && <Rickandmorty />}
			</main>
		</React.Fragment>
	);
}

export default App;
