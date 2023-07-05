import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.css';
import { React, useState, useEffect } from 'react';
import { Col, Row, Container, Pagination } from 'react-bootstrap';
import GameCard from './components/GameCard';
import GameModal from './components/GameModal';
import GameItem from './components/GameItem';
import Footer from './components/Footer';

function App() {
  // Api headers
  const headers = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
      'X-RapidAPI-Host': process.env.REACT_APP_API_HOST
    }
  };
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

  // Hook para cargar los juegos al ingresar.
  const [games, setGames] = useState([]);
  // Hook para titulo inicial
  const [gamesTitle, setGamesTitle] = useState('Random Popularity');

  // Use Efect para asignar los juegos al ingresar
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=popularity', headers);
        const data = await response.json();
        const games = data.sort(() => Math.random() - 0.5);
        setGames(games)
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  //Filtros Category - Platform , SortBy
  const requestApi = async (endPoint, title, modal) => {
    try {
      const response = await fetch('https://free-to-play-games-database.p.rapidapi.com/api/' + endPoint, headers);
      const games = await response.json();
      if (modal) {
        setFullGame(games);
        handleOpenModal();
      } else {
        setGamesTitle(title);
        setCurrentPage(1)
        setGames(games);
      }
    } catch (error) {
      console.log(error)
    };
  };

  // Modal
  const [showModal, setShowModal] = useState(false);
  //Hook para full game info (Modal)
  const [fullGame, setFullGame] = useState([]);
  // Modal Functions
  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  //Paginador
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Cantidad de juegos por página
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
      {
        showModal && (
          <GameModal
            show={showModal}
            onHide={handleCloseModal}
            fullGame={fullGame}
          />
        )
      }
      <Header
        favGames={favGames}
        setFavGames={setFavGames}
        requestApi={requestApi}
      />
      
      {/* RECOMENDADOS */}
      <Container className='mt-5 mb-5'>
        <Row className="align-items-stretch mt-3">
          <h3 className='container'><strong>Recommended</strong></h3>
          {
            recommendedGames.map((game) => (
              <Col className='mt-2'>
                <GameCard
                  key={game.id}
                  game={game}
                  setFavGames={setFavGames}
                  favGames={favGames}
                  requestApi={requestApi}
                />
              </Col>
            ))
          }
        </Row>
      </Container>

      {/* GAME ITEMS */}
      <h3 id="gameslist" className='container text-capitalize'><strong>{gamesTitle}</strong></h3>
      <Container className='mt-3'>
        {
          currentGames.map((game) => (
            <GameItem
              key={game.id}
              game={game}
              setFavGames={setFavGames}
              favGames={favGames}
              requestApi={requestApi}
            />
          ))
        }

        {/* PAGINADOR */}
        <Container className='d-flex justify-content-center mt-4'>
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

      {/* FOOTER */}
      <Footer/>
    </>
  );
}

export default App;
