import { Component } from '@angular/core';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { CommonModule } from '@angular/common';
import { UserEditorComponent } from './user-editor/user-editor.component';
@Component({
  selector: 'app-example2',
  standalone: true,
  templateUrl: './example2.component.html',
  styleUrl: './example2.component.scss',
  imports: [ProfileEditorComponent, CommonModule, UserEditorComponent],
})
export class Example2Component {}
