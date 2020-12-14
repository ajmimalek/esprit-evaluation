import {Component, OnInit, Output} from '@angular/core';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  {
    path: 'dashboard',
    title: 'Tableau de Bord',
    icon: 'icon-chart-pie-36',
    class: ''
  },
  {
    path: 'enseignants',
    title: 'Corps Enseignant',
    icon: 'icon-bulb-63',
    class: ''
  },
  {
    path: 'reclamations',
    title: 'Réclamations Etudiants',
    icon: 'icon-satisfied',
    class: ''
  },
  {
    path: 'parametres',
    title: 'Paramétres',
    icon: 'icon-settings',
    class: ''
  },

  {
    path: 'user',
    title: 'Mon Profile',
    icon: 'icon-single-02',
    class: ''
  },
  {
    path: 'cours',
    title: 'Bibliothéque de Cours',
    icon: 'icon-book-bookmark',
    class: ''
  }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  constructor() {
  }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

  isMobileMenu() {
    return window.innerWidth <= 991;
  }

}
