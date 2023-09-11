import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from 'src/dto/create-movie.dto';
import { UpdateMovieDto } from 'src/dto/update-movie.dto';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAllMovies(): Movie[] {
    return this.movies;
  }
  getOnemovies(id: number): Movie {
    const movie = this.movies.find((m) => m.id === id);
    if (!movie) {
      throw new NotFoundException(`Movie not found, id: ${id}`);
    } else return movie;
  }

  deleteMovie(id: number) {
    this.getOnemovies(id);
    this.movies = this.movies.filter((m) => m.id !== id);
  }

  createMovie(movieData: CreateMovieDto) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }

  updateMovie(id: number, updateData: UpdateMovieDto) {
    const movie = this.getOnemovies(id);
    this.deleteMovie(id);
    this.movies.push({ ...movie, ...updateData });
  }
}
