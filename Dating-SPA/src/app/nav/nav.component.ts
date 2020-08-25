import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AlertifyService } from '../services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};

  constructor(
    public authService: AuthService,
    private alertyfy: AlertifyService,
    private router: Router) { }

  ngOnInit() {
  }

  login(){
    this.authService.loogin(this.model).subscribe(next => {
      this.alertyfy.success('logged in successfully');
    }, error => {
      this.alertyfy.error(error);
    }, () => {
      this.router.navigate(['/members']);
    })
  }

  loggedIn(){
    return this.authService.loggedIn();
  }

  logout(){
    localStorage.removeItem('token');
    this.alertyfy.message('loggout out');
    this.router.navigate(['/home']);
  }
}
