import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { ConnectButtonComponent } from "../button/connect-button/connect-button.component";

@Component({
  selector: 'app-hero',
  imports: [ConnectButtonComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  public resetColor: boolean = false;
  public buttonCircleName = "CONNECT";
  public colours = [
    'select color yellow button',
    'select color orange button',
    'select color red button',
    'select color pink button',
    'select color dark pink button',
    'select color green button',
    'select color blue button',
    'select color violet button',
  ];

  handleClick(): void {
    this.resetColor = true;
  }

  resetColorClick(): void {
    this.resetColor = false;
  }
}
