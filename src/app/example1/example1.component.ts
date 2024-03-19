import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-example1',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './example1.component.html',
  styleUrl: './example1.component.scss',
})
export class Example1Component {
  //Приклад 1
  name = new FormControl('Olena');
  name1: string = 'Olena';
  ras(name: string) {
    this.name1 = name;
  }

  //Приклад2
  updateName(name: string) {
    this.name.setValue(name);
  }
  constructor() {}
}
