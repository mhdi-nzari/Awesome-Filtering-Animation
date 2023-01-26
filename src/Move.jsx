import { motion } from "framer-motion";


function Movie({ movie }) {
  return (
    <motion.div layout animate={{opacity:1 ,  scale:1}} initial={{opacity:0 , scale:0}} exit={{opacity:0 , scale:0}} transition={{duration:0.4}} >
      <h2>{movie.title}</h2>

      <img
        loading="lazy"
        className="poster"
        src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.backdrop_path}`}
        srcSet={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.backdrop_path} 1x, https://www.themoviedb.org/t/p/w440_and_h660_face/${movie.backdrop_path} 2x`}
        alt=""
      />
    </motion.div>
  );
}

export default Movie;
