import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  links: string[] = ['Home', 'Services', 'OurTeam', 'Testimonials', 'Blog'];
  constructor() { }

  ngOnInit(): void {
  }

}
