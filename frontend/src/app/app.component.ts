import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'UserApp';
  users = [
      {
        username: 'Romeo',
        age: 20,
      },
      {
        username: 'Arial',
        age: 55,
      },
    ];
}
