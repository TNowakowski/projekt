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


  showDog() {
    const dog = new Dog('Andrzej', 2);
    return 'My dog is ' + dog.name + 'and He is' + dog.age;
  }


}

class Dog {
  constructor(public name: string, public age: number) { }
}