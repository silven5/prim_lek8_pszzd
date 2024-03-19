import { Component } from '@angular/core';
import { User } from './class/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IWrite } from './class/iwrite';
import { WriteDisplay } from './class/WriteDisplay';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-user-editor',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './user-editor.component.html',
  styleUrl: './user-editor.component.scss',
})
export class UserEditorComponent {
  user!: User;
  myForm: FormGroup;
  logger!: IWrite;
  //Патерн для валідування мобільного номеру
  mobnumPattern = '^((\\+38-?)|0)?[0-9]{10}$';
  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      userName: ['Olena', [Validators.required]],
      userEmail: ['olena@gmail.com', [Validators.email]],
      userPhones: ['+380992223344', Validators.pattern(this.mobnumPattern)],
      userColor: ['Green'],
    });
  }
  onSubmit() {
    this.user = new User(
      this.myForm.value.userName,
      this.myForm.value.userEmail,
      this.myForm.value.userPhones,
      this.myForm.value.userColor
    );
    this.logger = new WriteDisplay();
    this.logger.write(this.user);
  }
}
