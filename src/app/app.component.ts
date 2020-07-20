import { Component } from '@angular/core';
import { Router } from '@angular/router';

// SERVICES
import { AuthService } from './@core/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'zen-movie';
  user$   : any;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.user$ = this.authService.currentUserValue;
  }
  
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
