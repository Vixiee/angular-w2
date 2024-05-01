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
      "title": "The Catcher in the Rye",
      "description": "A novel narrated by the protagonist, Holden Caulfield, as he navigates his way through adolescence in New York City.",
      "authors": ["J.D. Salinger"],
      "rating": 0,
      "ratings": [],
      "hasRated": false
    },
    {
      "title": "Brave New World",
      "description": "A dystopian novel set in a futuristic society where people are genetically engineered and conditioned for conformity and social stability.",
      "authors": ["Aldous Huxley"],
      "rating": 0,
      "ratings": [],
      "hasRated": false
    },
    {
      "title": "Moby-Dick",
      "description": "A novel about the voyage of the whaling ship Pequod, led by the monomaniacal Captain Ahab in pursuit of the giant white whale Moby Dick.",
      "authors": ["Herman Melville"],
      "rating": 0,
      "ratings": [],
      "hasRated": false
    },
    {
      "title": "The Lord of the Rings",
      "description": "A high-fantasy epic that follows the quest to destroy the One Ring and defeat the Dark Lord Sauron, set in the fictional world of Middle-earth.",
      "authors": ["J.R.R. Tolkien"],
      "rating": 0,
      "ratings": [],
      "hasRated": false
    },
    {
      "title": "The Adventures of Huckleberry Finn",
      "description": "A novel narrated by the titular character, Huck Finn, as he embarks on a journey down the Mississippi River with a runaway slave named Jim, exploring themes of race, freedom, and morality.",
      "authors": ["Mark Twain"],
      "rating": 0,
      "ratings": [],
      "hasRated": false
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
    alert('Готово е!');
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
