import { Component } from '@angular/core';
import { FoxHeaderComponent } from './fox-header/fox-header.component';
import { ChildExample1Component } from './child-example1/child-example1.component';
import { ChildExample2Component } from './child-example2/child-example2.component';
@Component({
  selector: 'app-example4',
  standalone: true,
  templateUrl: './example4.component.html',
  styleUrl: './example4.component.scss',
  imports: [FoxHeaderComponent, ChildExample1Component, ChildExample2Component],
})
export class Example4Component {
  //Приклад1
  cout = 1;
  public string1 = <string>'Data from parent ...';
  public sum: number = 0;
  public don: number = 1;
  public div: number = 2;
  //Метод для зміни даних в дочірньому компоненті
  changeChild1Data() {
    this.string1 += this.cout + ' ';
    this.sum += this.cout;
    this.don = this.don * this.cout;
    this.div = this.cout / 2;
    this.cout++;
  }
  //приклад2
  public string2 = '';
  public sum1: number = 0;
  receiveFromChild(event: any) {
    //!Потрібна валідація
    //!як мінмум перевірка на тип
    if (typeof event === 'string') {
      console.log('string');
      this.string2 = event;
    } else console.log('Not string');
  }
  childSum(event: any) {
    if (typeof event === 'number') {
      this.sum1 = event;
    } else console.log('Not number!!!!');
  }
}
