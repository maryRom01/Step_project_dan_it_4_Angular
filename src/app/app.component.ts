import { Component, Input } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { ListComponent } from './list/list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    SearchComponent,
    ListComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'step-project-4';
}
