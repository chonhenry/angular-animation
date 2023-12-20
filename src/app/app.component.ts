import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('colorChange', [
      state(
        'state1',
        style({
          backgroundColor: 'blue',
        }),
      ),
      state(
        'state2',
        style({
          backgroundColor: 'red',
        }),
      ),
      state(
        'state3',
        style({
          backgroundColor: 'green',
        }),
      ),
      state(
        'state4',
        style({
          backgroundColor: 'yellow',
        }),
      ),
      // Define transitions between states
      transition('* => *', animate('500ms')),
    ]),
  ],
})
export class AppComponent {
  currentState = 'state1';

  changeState(newState: string) {
    this.currentState = newState;
  }
}

// animations: [
//   trigger('openClose', [
//     state('open', style({
//       height: '200px',
//       opacity: 1,
//       backgroundColor: 'yellow'
//     })),
//     state('closed', style({
//       height: '100px',
//       opacity: 0.5,
//       backgroundColor: 'green'
//     })),
//     transition('open => closed', [
//       animate('1s')
//     ]),
//     transition('closed => open', [
//       animate('0.5s')
//     ]),
//   ]),
// ],

// isOpen = true;

//   toggle() {
//     this.isOpen = !this.isOpen;
//   }