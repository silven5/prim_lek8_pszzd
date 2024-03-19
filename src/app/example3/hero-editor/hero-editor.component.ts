import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { Hero } from './class/hero';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-editor',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './hero-editor.component.html',
  styleUrl: './hero-editor.component.scss',
})
export class HeroEditorComponent {
  skillsForm: FormGroup;
  hero!: Hero;

  constructor(private fb: FormBuilder) {
    this.skillsForm = this.fb.group({
      hero: [''],
      skills: new FormArray([new FormControl()]),
    });
  }
  deleteSkill(index: number) {
    (this.skillsForm.controls['skills'] as FormArray).removeAt(index);
  }
  addSkill() {
    (this.skillsForm.controls['skills'] as FormArray).push(new FormControl());
  }
  onSubmit() {
    this.hero = new Hero(
      this.skillsForm.value.hero,
      this.skillsForm.value.skills
    );
    console.log(this.hero);
  }
  // Повертаємо список контролів як FormArray
  getControls() {
    return (this.skillsForm.get('skills') as FormArray).controls;
  }
}
