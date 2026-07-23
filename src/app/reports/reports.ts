import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reports.html',
  styleUrls: ['./reports.scss']
})
export class ReportsComponent {

  searchText: string = '';

  movies = [
    {
      movie: 'RRR',
      category: 'Action',
      year: 2022,
      rating: 9,
      status: 'Published'
    },
    {
      movie: 'Bahubali',
      category: 'Action',
      year: 2015,
      rating: 10,
      status: 'Published'
    },
    {
      movie: 'Hi Nanna',
      category: 'Drama',
      year: 2023,
      rating: 8,
      status: 'Pending'
    },
    {
      movie: 'Pushpa',
      category: 'Action',
      year: 2021,
      rating: 9,
      status: 'Published'
    },
    {
      movie: 'Salaar',
      category: 'Action',
      year: 2023,
      rating: 9,
      status: 'Published'
    }
  ];

}