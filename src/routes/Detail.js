import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import Movie from "../components/Movie";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? (
        "loading..."
      ) : (
        <div className="box">
          <h1>{movie.title}</h1>
          <div>
            <img
              src={movie.medium_cover_image}
              alt={movie.medium_cover_image}
            />
          </div>
          <div style={{ textAlign: "center" }}>
            rating: {movie.rating} | year:{movie.year} | runtime :{" "}
            {movie.runtime} | genres:{" "}
            {movie.genres.map((genre) => genre + ", ")}{" "}
          </div>
          <h5>{movie.description_full}</h5>
        </div>
      )}
    </div>
  );
}

export default Detail;
