import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.css';
import { React, useState, useEffect } from 'react';
import { Container, Pagination } from 'react-bootstrap';
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
        const gamesWithFav = games.map(game => ({
          ...game,
          fav: favGames.some(favGame => favGame.id === game.id)
        }));
        setGames(gamesWithFav)
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  //Filtros Category - Platform , SortBy
  const requestApi = async (url, title, modal) => {
    try {
      const response = await fetch('https://free-to-play-games-database.p.rapidapi.com/api/' + url, headers);
      const games = await response.json();
      if (modal) {
        setFullGame(games);
        handleOpenModal();
      } else {
        const gamesWithFav = games.map(game => ({
          ...game,
          fav: favGames.some(favGame => favGame.id === game.id)
        }));
        setGamesTitle(title);
        setCurrentPage(1)
        setGames(gamesWithFav);
      }
    } catch (error) {
      console.log(error)
    };
  };

  const addFavorite = (gameParam) => {
    const favGame = favGames.filter(game => game.id === gameParam.id)
    if (favGame.length === 0) {
      gameParam.fav = true
      setFavGames([...favGames, gameParam])
    }
  };

  const removeFavorite = (gameParam) => {
    const newFavGames = favGames.filter(game => game.id !== gameParam.id)
    const newGames = games.find(game => game.id === gameParam.id)
    if (newGames) {
      // cambio el estado del juego en games
      newGames.fav = false
    }
    setFavGames(newFavGames)
    gameParam.fav = false
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
      {/* MODAL */}
      {
        showModal && (
          <GameModal
            show={showModal}
            onHide={handleCloseModal}
            fullGame={fullGame}
          />
        )
      }
      {/* HEADER */}
      <Header
        addFavorite={addFavorite}
        removeFavorite={removeFavorite}
        favGames={favGames}
        requestApi={requestApi}
      />

      {/* GAME ITEMS */}
      <main id="gamelist" className='mt-5'>
        <h3 className='container text-capitalize'><strong>{gamesTitle}</strong></h3>
        <Container className='mt-3'>
          {
            currentGames.map((game) => (
              <GameItem
                key={game.id}
                game={game}
                addFavorite={addFavorite}
                removeFavorite={removeFavorite}
                games={games}
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
                    href="./index.html#gamelist"
                    onClick={() => handlePageChange(pageNumber)}
                  >
                    {pageNumber}
                  </Pagination.Item>
                );
              })}
              <Pagination.Next
                onClick={() => handlePageChange(currentPage + 1)}
                href="./index.html#gamelist"
                disabled={currentPage === totalPages}
              />
            </Pagination>
          </Container>
        </Container>
      </main>

      {/* FOOTER */}
      <Footer />
    </>
  );
}

export default App;
