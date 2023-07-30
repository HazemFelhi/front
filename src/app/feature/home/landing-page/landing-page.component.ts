import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }
  /* Scroll button */
  scrollDown() : void {
    const options: ScrollToOptions = {behavior: 'smooth' }
     window.scrollTo({ top: document.body.scrollHeight , left:0 , ...options} );
   }
  ngOnInit(): void {
  }

}
