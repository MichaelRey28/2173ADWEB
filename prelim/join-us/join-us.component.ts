import { Component } from '@angular/core';

@Component({
  selector: 'app-join-us',
  templateUrl: './join-us.component.html',
  styleUrl: './join-us.component.css'
})
export class JoinUsComponent {
    name: string = '';
    last: string = '';
    email: string = '';
    instituition: string = '';
    submitted: boolean = false;
  
    submitForm() {
      this.submitted = true;
    }

}
