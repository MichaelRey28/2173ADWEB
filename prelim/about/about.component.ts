import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  showData($event: any) {
    console.log('You got a free gift!');
    if ($event) {
      console.log($event.target);
      console.log($event.target.value);
    }
  }
}
