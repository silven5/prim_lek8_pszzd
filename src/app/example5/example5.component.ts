import { Component } from '@angular/core';
import { AnimalListComponent } from './animal/animal-list/animal-list.component';
import { FoxHeaderComponent } from '../example4/fox-header/fox-header.component';

@Component({
  selector: 'app-example5',
  standalone: true,
  templateUrl: './example5.component.html',
  styleUrl: './example5.component.scss',
  imports: [AnimalListComponent, FoxHeaderComponent],
})
export class Example5Component {}
