import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.css';
import { React, useState, useEffect } from 'react';
import { Col, Row, Container, Pagination } from 'react-bootstrap';
import GameCard from './components/GameCard';
import GameItem from './components/GameItem';

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
  const itemsPerPage = 6; // Cantidad de juegos por página
  const maxPageNumbers = 5; // Cantidad máxima de números de página mostrados

  // Calcular índices de inicio y fin para los juegos de la página actual
  const indexOfLastGame = currentPage * itemsPerPage;
  const indexOfFirstGame = indexOfLastGame - itemsPerPage;
  const currentGames = games.slice(indexOfFirstGame, indexOfLastGame);

  // Calcular el rango de números de página a mostrar
  const totalPages = Math.ceil(games.length / itemsPerPage);
  const startPage = Math.max(1, currentPage - Math.floor(maxPageNumbers / 2));
  const endPage = Math.min(startPage + maxPageNumbers - 1, totalPages);

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
      <Container className='mt-5' style={{border:'1px solid black'}}>
        <h3 className='container'>Recomendados</h3>
        <Row className="align-items-stretch">
          {
            recommendedGames.map((game) => (
              <Col className='mt-2' style={{}}>
                <GameCard
                  key={game.id}
                  game={game}
                  setFavGames={setFavGames}
                  favGames={favGames}
                />
              </Col>
            ))
          }
        </Row>
      </Container>
      {/* 
      <Container className='mt-5'>
        <h3 id="gameslist" className='container text-capitalize'>{gamesTitle}</h3>
        {
          currentGames.map((game) => (
            <GameItem
              key={game.id}
              game={game}
              setFavGames={setFavGames}
              favGames={favGames}
              games={games}
            />
          ))
        }
        <Container className='d-flex justify-content-center mt-2'>
          <Pagination>
            <Pagination.Prev
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            />
            {Array.from({ length: endPage - startPage + 1 }).map((_, index) => {
              const pageNumber = startPage + index;
              return (
                <Pagination.Item
                  key={pageNumber}
                  active={pageNumber === currentPage}
                  onClick={() => handlePageChange(pageNumber)}
                >
                  {pageNumber}
                </Pagination.Item>
              );
            })}
            <Pagination.Next
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            />
          </Pagination>
        </Container>
      </Container>
            */}
    </>
  );
}

export default App;
