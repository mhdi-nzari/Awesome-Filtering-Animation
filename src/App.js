import "./App.css";

import { useEffect, useState } from "react";
import Movie from "./Move";
import Filter from "./Filter";
import { AnimatePresence, motion ,  } from "framer-motion";

function App() {
  const [popular, setPopular] = useState([]),
    [filtred, setFiltred] = useState([]),
    [activeGenre, setActiveGenre] = useState(0);

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=2aa9dc8da8b8a85c11e2e8c23b93e590&language=en-US&page=1"
    );
    const movies = await data.json();
    setPopular(movies.results);
    setFiltred(movies.results);
    console.log(movies);
  };

  return (
    <div className="App">
      <Filter popular={popular} setFiltred={setFiltred} activeGenre={activeGenre} setActiveGenre={setActiveGenre} />
      <motion.div layout   className="popular-moveis">
     <AnimatePresence>
        {filtred.map((movie) => {
          return <Movie key={movie.id} movie={movie}></Movie>;
        })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;
