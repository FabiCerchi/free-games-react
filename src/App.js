import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.css';
import {React , useState, useEffect } from 'react';



function App() {
  const API_KEY = 'bdb7304562msh74e239fa497b009p178d7ajsnab646b11f3d8';
  const API_HOST = 'free-to-play-games-database.p.rapidapi.com';
  
  //Hook url game 
  const [games, setRecommended ] = useState([]);
  
  useEffect (() => {
    const headers = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': API_HOST,
      }
    };
    const fetchData = async () => {
      try {
        const response = await fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=relevance',headers);
        const data = await response.json();
        const randomGames = data.sort(() => Math.random() - 0.5).slice(0, 3);
        setRecommended(randomGames)
        console.log(randomGames)
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  },[]);

  return (
      <>
      <Header/>
      <h1>Recomendaciones:</h1>
      {
        games.map((game) => (
          <li key={game.id}>{game.title}</li>
        ))
      }
      </>
  );
}

export default App;
