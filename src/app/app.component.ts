import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projekt';
  pi = Math.PI;
  date = new Date();
  dog: string;
  dogs = new Array<Dog>();
  days = ['poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota', 'niedziela'];

  inputText = 'Tekst';
  maxLength = 6;
  colorClass = 'color';
  logoUrl = '';

  isDisabled = true;


  constructor() {

    setTimeout(() => {
      this.isDisabled = false;
    }, 3000);

    this.dogs.push(new Dog('szmak', 2), new Dog('killwater', 6), new Dog('ies', 200));
  }

  showDog() {
    const dog = new Dog('Andrzej', 2);
    return 'My dog is ' + dog.name + 'and He is' + dog.age;
  }

  change() {
    this.inputText = 'Zmiana tekstu i koloru';
    this.maxLength = 10;
    this.colorClass = 'color2';
    this.logoUrl = 'https://angular.io/assets/images/logos/angular/angular.png';
  }

}

class Dog {
  constructor(public name: string, public age: number) { }
}
