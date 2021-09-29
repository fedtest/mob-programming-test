import React, { useEffect, useState } from 'react';
import './App.css';
import styled from 'styled-components';

const BodyStyled = styled.div`
	background-color: mistyrose;
	height: 100%;
	text-align: center;
	min-height: 100vh;
`;

function App() {
	useEffect(() => {
		fetchMovies();
	});
	const [movies, setMovies] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');

	const API_KEY = '65049324';
	const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`; // s=star+wars

	const fetchMovies = async () => {
		try {
			const response = await fetch(API_URL);
			const { Search } = await response.json();
			console.log(Search);
			setMovies(Search);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<BodyStyled>
			MOBPROGRAMMERINGSTEST!
			<input
				type='text'
				placeholder='search movie'
				onChange={(e) => setSearchTerm(e.target.value)}
			/>
			<ul>
				{movies.map(({ Title, Poster }, key) => (
					<li key={key}>
						<h2>{Title}</h2>
						<img src={Poster} alt='Poster' />
					</li>
				))}
			</ul>
		</BodyStyled>
	);
}

export default App;
