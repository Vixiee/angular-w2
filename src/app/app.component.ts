import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookRatingComponent } from './book-rating/book-rating.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BookRatingComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-w2';
}
