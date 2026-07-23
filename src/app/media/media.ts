import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Movie {
  id: number;
  name: string;
  category: string;
  year: number;
  rating: number;
}

@Component({
  selector: 'app-media',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './media.html',
  styleUrl: './media.scss'
})
export class MediaComponent {

  movies: Movie[] = [
    {
      id: 1,
      name: 'RRR',
      category: 'Action',
      year: 2022,
      rating: 9
    },
    {
      id: 2,  
      name: 'Bahubali',
      category: 'Action',
      year: 2015,
      rating: 10
    },
    {
      id: 3,
      name: 'Hi Nanna',
      category: 'Drama',
      year: 2023,
      rating: 8
    }
  ];

  newMovie: Movie = {
    id: 0,
    name: '',
    category: '',
    year: 0,
    rating: 0
  };

  editIndex: number | null = null;

  searchText = '';
  selectedCategory = '';

  get filteredMovies(): Movie[] {
    return this.movies.filter(movie => {

      const searchMatch =
        movie.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
        movie.category.toLowerCase().includes(this.searchText.toLowerCase());

      const categoryMatch =
        this.selectedCategory === '' ||
        movie.category === this.selectedCategory;

      return searchMatch && categoryMatch;
    });
  }

  addMovie(): void {

    if (
      this.newMovie.name.trim() === '' ||
      this.newMovie.category.trim() === ''
    ) {
      return;
    }

    if (this.editIndex !== null) {
      this.movies[this.editIndex] = { ...this.newMovie };
      this.editIndex = null;
    } else {
      this.movies.push({ ...this.newMovie });
    }

    this.newMovie = {
      id: 0,
      name: '',
      category: '',
      year: 0,
      rating: 0
    };
  }

  editMovie(index: number): void {
    this.newMovie = { ...this.filteredMovies[index] };

    const originalIndex = this.movies.indexOf(this.filteredMovies[index]);
    this.editIndex = originalIndex;
  }

  deleteMovie(index: number): void {

    const originalIndex = this.movies.indexOf(this.filteredMovies[index]);
    this.movies.splice(originalIndex, 1);

    if (this.editIndex === originalIndex) {
      this.editIndex = null;
    }
  }

}