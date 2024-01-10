import { Component, OnInit } from '@angular/core';
import {Menu} from './menu';
import {Router, RouterLink} from '@angular/router';
import {NgClass, NgForOf} from "@angular/common";

@Component({
  selector: 'app-page-menu',
  templateUrl: './page-menu.component.html',
  standalone: true,
  imports: [
    NgClass,
    NgForOf,
    RouterLink
  ],
  styleUrls: ['./page-menu.component.scss']
})
export class PageMenuComponent implements OnInit {

  public menuProperties: Array<Menu> = [
    {
      id: '1',
      titre: 'Tableau de bord',
      icon: 'fas fa-chart-line',
      url: '',

    },
    {
      id: '2',
      titre: 'Articles',
      icon: 'fas fa-boxes',
      url: 'articles',

    },
    {
      id: '3',
      titre: 'Clients',
      icon: 'fas fa-users',
      url: '',

    },
    {
      id: '4',
      titre: 'Fournisseurs',
      icon: 'fas fa-users',
      url: '',

    },
    {
      id: '5',
      titre: 'Parametrages',
      icon: 'fas fa-cogs',
      url: '',

    }
  ];

  private lastSelectedMenu: Menu | undefined;


  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  navigate(menu: Menu): void {
    if (this.lastSelectedMenu) {
      this.lastSelectedMenu.active = false;
    }
    menu.active = true;
    this.lastSelectedMenu = menu;
    this.router.navigate([menu.url]);
  }
}
