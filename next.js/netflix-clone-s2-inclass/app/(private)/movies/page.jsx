import { getMovies } from "@/helpers/movieFunctions";
import React from "react";
import MovieSection from "./components/MovieSection";

export const metadata = {
  title: "Movies",
};
const Movies = async () => {
  const movies = await getMovies("now_playing");
  console.log(movies);
  return (
    <div className="px-4 md:px-12 mt-4">
      <MovieSection title="NOW PLAYING" type="now playing" />
      <MovieSection title="POPULAR" type="popular" />
      <MovieSection title="TOP RATED" type="now top rated" />
      <MovieSection title="NOW UPCOMING" type="now upcoming" />
    </div>
  );
};

export default Movies;
