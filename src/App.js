import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.css';
import { React, useState, useEffect } from 'react';
import { Col, Row, Container, Pagination } from 'react-bootstrap';
import CardGame from './components/CardGame';
import ItemGame from './components/ItemGame';

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

  // Hook para los juegos recien adheridos.
  const [games, setGames] = useState([]);
  const [gamesTitle, setGamesTitle] = useState('Recien Adheridos');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=release-date', headers);
        const data = await response.json();
        const games = data.sort(() => Math.random() - 0.5);
        setGames(games)
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  //Filtros
  const releaseDateAlphabeticalRelevance = async (type) => {
    try {
      const response = await fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=release-date', headers);
      const data = await response.json();
      const games = data.sort(() => Math.random() - 0.5);
      console.log('Ingrese')
      setGamesTitle(type)
      setGames(games)
    } catch (error) {
      console.log(error);
    }
  };

  //Paginador
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Cantidad de juegos por página

  // Calcular índices de inicio y fin para los juegos de la página actual
  const indexOfLastGame = currentPage * itemsPerPage;
  const indexOfFirstGame = indexOfLastGame - itemsPerPage;
  const currentGames = games.slice(indexOfFirstGame, indexOfLastGame);

  // Función para cambiar de página
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Header
        favGames={favGames}
        setFavGames={setFavGames}
        releaseDateAlphabeticalRelevance={releaseDateAlphabeticalRelevance}
      />
      <Container>
        <h3 className='container'>Recomendados</h3>
        <Row>
          {
            recommendedGames.map((game) => (
              <Col className="d-flex justify-content-center">
                <CardGame
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
      <Container>
        <h3 className='container text-capitalize'>{gamesTitle}</h3>
        {
          currentGames.map((game) => (
            <ItemGame
              key={game.id}
              game={game}
              setFavGames={setFavGames}
              favGames={favGames}
              games={games}
            />
          ))
        }
        <Pagination>
          {Array.from({ length: Math.ceil(games.length / itemsPerPage) }).map((_, index) => (
            <Pagination.Item
              key={index}
              active={currentPage === index + 1}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      </Container>
    </>
  );
}

export default App;
