import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {

    // Collapse Navbar
    var navbarCollapse = function() {
      if ($('#mainNav').offset().top > 100) {
        $('#mainNav').addClass('navbar-shrink');
      } else {
        $('#mainNav').removeClass('navbar-shrink');
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  }

  scrollIntoView(anchorHash) {
    setTimeout(() => {
      const anchor = document.getElementById(anchorHash);
      if (anchor) {
        anchor.focus();
        anchor.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        });
      }
    });
  }


}
