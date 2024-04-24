import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Kristiyan Kraev';
  age = '20';
  showAboutMe: boolean = false;
  showHobbies: boolean = false;
  showFavCreator: boolean = false;
  showChannel: boolean = false;
  showPay: boolean = false;
  username = '@koko_kraev03';

  toggleAboutMe() {
    this.showAboutMe = !this.showAboutMe;
  }
  toggleHobbies() {
    this.showHobbies = !this.showHobbies;
  }
  toggleFavCreator() {
    this.showFavCreator = !this.showFavCreator;
  }

  toggleMyChannel() {
    this.showChannel = !this.showChannel;
  }

  togglePay() {
    this.showPay = !this.showPay;
  }



}

