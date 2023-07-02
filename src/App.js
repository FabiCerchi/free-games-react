import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.css';
import { React, useState, useEffect } from 'react';
import Game from './components/Game';
import { Col, Row, Container } from 'react-bootstrap';
import Favorites from './components/Favorites';

function App() {
  // Api headers


  // LocalStorage para guardados en favoritos.
  const saveFavGames = JSON.parse(localStorage.getItem("favGames")) || [];
  const [favGames, setFavGames] = useState(saveFavGames);
  useEffect(() => {
    localStorage.setItem("favGames", JSON.stringify(favGames))
  }, [saveFavGames]);

  // Hook para los juegos recomendados por relevancia rnd.
  const [recommendedGames, setRecommended] = useState([]);
  useEffect(() => {
    const headers = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': API_HOST,
      }
    };
    const fetchData = async () => {
      try {
        const responseRecommended = await fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=relevant', headers);
        const dataRecommended = await responseRecommended.json();
        const randomGamesRecommended = dataRecommended.sort(() => Math.random() - 0.5).slice(0, 3);
        setRecommended(randomGamesRecommended)
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Header
        favGames={favGames}
        setFavGames={setFavGames}
      />
      <Container>
        <h3>Recomendaciones:</h3>
        <Row>
          {
            recommendedGames.map((game) => (
              <Col className="d-flex justify-content-center">
                <Game
                  key={game.id}
                  game={game}
                  setFavGames={setFavGames}
                  favGames={favGames}
                  type='card'
                />
              </Col>
            ))
          }
        </Row>
      </Container>
    </>
  );
}

export default App;
