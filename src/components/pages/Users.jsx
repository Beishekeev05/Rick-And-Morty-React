import { useEffect, useState } from "react";
import styled from "styled-components";
function Users() {
	const BASE_URL = "https://jsonplaceholder.typicode.com/users";

	const [user, setUser] = useState([]);

	async function getUser() {
		const response = await fetch(BASE_URL);
		const data = await response.json();
		console.log(data);
		setUser(data);
	}

	useEffect(() => {
		getUser();
	}, []);

	return (
		<Container>
			{user.map((item) => (
				<Block key={item.id}>
					<p>
						<b>Email : </b>
						<span>{item.email}</span>
					</p>
					<h3>
						<span>{item.name}</span>
					</h3>
					<p>
						<b>Phone : </b>
						<span>{item.phone}</span>
					</p>
					<p>
						{" "}
						<b>UserName: </b>
						<span>{item.username}</span>
					</p>
					<p>
						<b>Website: </b>
						<span>{item.website}</span>
					</p>
				</Block>
			))}
		</Container>
	);
}

export default Users;
const Container = styled.div`
	width: 98%;
	min-height: 350px;
	border: 1px solid black;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	gap: 10px;
	flex-wrap: wrap;
	padding: 3px;
`;
const Block = styled.div`
	width: 240px;
	height: 220px;
	border: 1px solid black;
	transition: all 0.3s;
	padding: 5px;
	font-style: italic;

	&:hover {
		box-shadow: 10px 10px 5px 0px rgba(150, 141, 150, 1);
		transform: translateY(-4px);
		color: white;
		background-color: black;
	}
`;
