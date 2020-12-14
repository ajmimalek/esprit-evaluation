import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  constructor() {
  }

  changeDashboardColor(color) {
    let body = document.getElementsByTagName('body')[0];
    console.log(body);
    if (body && color === 'white-content') {
      body.classList.add(color);
    } else if (body.classList.contains('white-content')) {
      body.classList.remove('white-content');
    }
  }

  ngOnInit() {

  }
}
