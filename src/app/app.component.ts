import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AFACC';

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  gotoHome() {
    this.router.navigate(['/home']);
  }

  gotoAboutUs() {
    this.router.navigate(['/about_us']);
  }

  contactUs() {
    this.router.navigate(['/contact_us']);
  }

  underConstruc() {
    this.router.navigate(['/under_construction']);
  }

  topFunction() {
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
}
