import { Component } from '@angular/core';
import { HeroEditorComponent } from './hero-editor/hero-editor.component';

@Component({
  selector: 'app-example3',
  standalone: true,
  templateUrl: './example3.component.html',
  styleUrl: './example3.component.scss',
  imports: [HeroEditorComponent],
})
export class Example3Component {}
