
import { GetData } from "../../util/getData";
import './movies.css';
import Movie from "../../components/Movie";

export default function Movies() {
    let movies = GetData();
    return (
    <div className="movies-grid">
        { movies.map ( (movie) => (
            <Movie key={movie.id} movie={movie}/>
            )
        )}
    </div>
    )
}