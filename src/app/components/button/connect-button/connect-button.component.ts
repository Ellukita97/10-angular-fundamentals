import { Component, input } from '@angular/core';

@Component({
  selector: 'app-connect-button',
  imports: [],
  templateUrl: './connect-button.component.html',
  styleUrl: './connect-button.component.scss'
})
export class ConnectButtonComponent {
  public titleButton = input<string>();

  updateButtonNameClicked():string{
    
    return "Button connect clicked"
  }
}
