import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from 'src/dto/create-movie.dto';
import { UpdateMovieDto } from 'src/dto/update-movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly movieService: MoviesService) {}
  @Get()
  getAllmovies() {
    return this.movieService.getAllMovies();
  }

  @Get(':id')
  getOnemovies(@Param('id') movieId: number) {
    return this.movieService.getOnemovies(movieId);
  }

  @Post()
  createMovie(@Body() movieData: CreateMovieDto) {
    return this.movieService.createMovie(movieData);
  }

  @Delete(':id')
  deleteMovie(@Param('id') movieId: number) {
    return this.movieService.deleteMovie(movieId);
  }

  @Patch(':id')
  patchMovie(@Param('id') movieId: number, @Body() movieData: UpdateMovieDto) {
    return this.movieService.updateMovie(movieId, movieData);
  }

  @Put(':id')
  putMovie(@Param('id') movieId: number) {
    return `this will put the movie id: ${movieId}`;
  }
}
