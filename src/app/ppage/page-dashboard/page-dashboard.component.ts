import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";
import {PageMenuComponent} from "../../composants/page-menu/page-menu.component";
import {PageArticleComponent} from "../articles/page-article/page-article.component";

@Component({
  selector: 'app-page-dashboard',
  standalone: true,
  imports: [
    RouterOutlet,
    PageMenuComponent,
    RouterLink,
    PageArticleComponent
  ],
  templateUrl: './page-dashboard.component.html',
  styleUrl: './page-dashboard.component.css'
})
export class PageDashboardComponent {



}
