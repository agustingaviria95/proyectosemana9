import { useParams } from 'react-router-dom';
import './movie-detail.css';

export default function MovieDetail() {
    let { id } = useParams();
    return(
        <div className="movie-detail">
        <h1>Movie Detail</h1>
        <h1>Id: {id}</h1></div>
    )
}