import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Book {
  title: string;
  description: string;
  authors: string[];
  rating: number;
  ratings: number[];
  hasRated: boolean;
}

@Component({
  selector: 'app-book-rating',
  templateUrl: './book-rating.component.html',
  styleUrls: ['./book-rating.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class BookRatingComponent {
  books: Book[] = [
    {
      title: 'To Kill a Mockingbird',
      description:
        'The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it.',
      authors: ['Harper Lee'],
      rating: 0,
      ratings: [],
      hasRated: false,
    },
    {
      title: '1984',
      description: 'A dystopian social science fiction novel by George Orwell.',
      authors: ['George Orwell'],
      rating: 0,
      ratings: [],
      hasRated: false,
    },
    {
      title: 'The Great Gatsby',
      description:
        "F. Scott Fitzgerald's third book, stands as the supreme achievement of his career.",
      authors: ['F. Scott Fitzgerald'],
      rating: 0,
      ratings: [],
      hasRated: false,
    },
    {
      title: 'Pride and Prejudice',
      description: 'An 1813 romantic novel of manners written by Jane Austen.',
      authors: ['Jane Austen'],
      rating: 0,
      ratings: [],
      hasRated: false,
    },
    {
      title: "Harry Potter and the Philosopher's Stone",
      description:
        'The first novel in the Harry Potter series written by J.K. Rowling.',
      authors: ['J.K. Rowling'],
      rating: 0,
      ratings: [],
      hasRated: false,
    },
  ];
  currentBookIndex = 0;
  get currentBook(): Book {
    return this.books[this.currentBookIndex];
  }

  restart() {
    this.currentBookIndex = 0;
    this.books.forEach((book) => (book.hasRated = false));
  }

  finish() {
    alert('Стига ти толкоз!');
  }

  get allBooksRated(): boolean {
    return this.books.every((book) => book.hasRated);
  }

  rateBook(rating: number) {
    this.currentBook.ratings.push(rating);
    this.currentBook.rating =
      this.currentBook.ratings.reduce((a, b) => a + b) /
      this.currentBook.ratings.length;
    this.currentBook.hasRated = true;
    this.currentBookIndex = (this.currentBookIndex + 1) % this.books.length;
  }

  updateBook(title: string, description: string, authors: string[]) {
    this.currentBook.title = title;
    this.currentBook.description = description;
    this.currentBook.authors = authors;
  }
}
