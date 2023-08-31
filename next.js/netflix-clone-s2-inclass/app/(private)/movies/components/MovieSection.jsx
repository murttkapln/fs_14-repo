import MovieCard from "@/components/MovieCard"
import { getMovies } from "@/helpers/movieFunctions"


const MovieSection = async({title,type}) => {
    const movies = await getMovies({type})
  return (
    <div className="mb-4">
        <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">{title}</p>
        <div className="grid grid-flow-col gap-2 overflow-x-auto">
        {movies.map(movie=> <MovieCard {...movies.id}/>)}

        </div>
    </div>
  )
}

export default MovieSection