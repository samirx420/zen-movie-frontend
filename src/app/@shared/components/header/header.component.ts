import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/@core/services';
import { Router } from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user$   : any;
  
  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.user$ = this.authService.currentUserValue;
  }

  
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
