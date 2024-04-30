import { useEffect, useState } from "react";
import styled from "styled-components";
const Rickandmorty = () => {
	const [rick, setRick] = useState([]);

	const BASE_URL = "https://rickandmortyapi.com/api/character";

	async function getRick() {
		const response = await fetch(BASE_URL);
		const data = await response.json();
		console.log(data.results);
		setRick(data.results);
	}

	useEffect(() => {
		getRick();
	}, []);

	const statusColor = (color) => {
		console.log(color);
		return color === "Alive" ? "green" : color === "Dead" ? "red" : "gray";
	};

	return (
		<Container>
			{rick.map((item) => (
				<BigBlock key={item.id}>
					<Block>
						<img src={item.image} alt="#" />
					</Block>

					<Block2 style={{ backgroundColor: statusColor(item.status) }}>
						<Pteg>{item.name}</Pteg>
						<Pteg>
							Status:
							<span>{item.status}</span>
						</Pteg>
						<Pteg>{item.gender}</Pteg>
					</Block2>
				</BigBlock>
			))}
		</Container>
	);
};

export default Rickandmorty;
const Container = styled.div`
	width: 100%;
	min-height: 100vh;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 10px;
`;
const Block = styled.div`
	min-width: 300px;
	min-height: 250px;
`;
const Block2 = styled.div`
	width: 300px;
	min-height: 250px;
	padding: 10px;
`;
const BigBlock = styled.div`
	display: flex;
	transition: all 0.3s;
	&:hover {
		transform: translateY(-5px);
	}
`;
const Pteg = styled.p`
	font-family: monospace;
	font-weight: 600;
	font-style: italic;
	font-size: 20px;
`;
