import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Waily';

  constructor(private router: Router) { }
  
  onCheckInClick(){
    this.router.navigate(['/daily']);
  }

  onHistoryClick(){
    this.router.navigate(['/history']);
  }
}
