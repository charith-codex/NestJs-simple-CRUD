import { Module } from '@nestjs/common';
import { BooksController } from './app.controller';
import { BookService } from './app.service';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';
import { MoviesModule } from './movies/movies.module';

@Module({
  imports: [MoviesModule],
  controllers: [BooksController, MoviesController],
  providers: [BookService, MoviesService],
})
export class AppModule {}
